let matchRatingTable = async (num: number): Promise<number> => {
	if (num <= 4) {
		return 5;
	}
	if (num <= 7) {
		return 4;
	}
	if (num <= 11) {
		return 3;
	}
	if (num == 12) {
		return 2;
	}

	return 0;
}

let RemoveFromString = async (source: string, index: number): Promise<string> => {
	source = source.slice(0, index) + source.slice(index + 1);
	return source;
}

//MatchRatingEncoded strings
export let MatchRating = async (input1: string, input2: string): Promise<boolean> => {
	let small = '';
	let large = '';

	if (input1.length >= input2.length) {
		if ((input1.length - input2.length) >= 3) {
			return false;
		}
		small = input2;
		large = input1;
	}
	else {
		if ((input2.length - input1.length) >= 3) {
			return false;
		}

		small = input1;
		large = input2;
	}

	let inputSum = input1.length + input2.length;
	let minRating = await matchRatingTable(inputSum);

	if (minRating == 0) {
		return false;
	}

	for (let i = 0; i < small.length;) {
		let found = false;

		for (let x = 0; x < large.length; x++) {
			if (small[i] == large[x]) {
				small = await RemoveFromString(small, i);
				large = await RemoveFromString(large, x);
				found = true;
			}
		}

		if (!found) {
			i++;
		}
	}

	small = [...small].reverse().join('');
	large = [...large].reverse().join('');

	for (let i = 0; i < small.length;) {
		let found = false;

		for (let x = 0; x < large.length; x++) {
			if (small[i] == large[x]) {
				small = await RemoveFromString(small, i);
				large = await RemoveFromString(large, x);
				found = true;
			}
		}

		if (!found) {
			i++;
		}
	}

	let rating = 6 - large.length;

	if (rating >= minRating) {
		return true;
	}

	else {
		return false;
	}
}

export let MatchRatingEncode = async (input: string): Promise<string> => {
	input = input.toLowerCase();
	let vowels = ['a', 'e', 'i', 'o', 'u'];

	for (let vowel of vowels) {
		input = input.replace(vowel, '');
	}

	let encodedCharacters = [...input];
	let skipNext = false;
	let finalMatchRatingString = "";
	for (let i = 0; i < encodedCharacters.length; i++) {
		if (skipNext) {
			skipNext = false;
			continue;
		}

		if (!vowels.includes(encodedCharacters[i]) && i !== (encodedCharacters.length - 1)) {
			if (encodedCharacters[i] == encodedCharacters[i + 1]) {
				skipNext = true;
			}
		}

		finalMatchRatingString += encodedCharacters[i];
	}

	if (finalMatchRatingString.length > 6) {
		finalMatchRatingString = finalMatchRatingString.slice(0, 3) + finalMatchRatingString.slice(-3);
	}

	return finalMatchRatingString.toUpperCase();
}
