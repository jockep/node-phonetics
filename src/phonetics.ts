export let Soundex = async (input: string): Promise<string> => {
	input = input.toLowerCase();

	let soundexConversionTable = [
		['a', 'e', 'i', 'o', 'u', 'y', 'w', 'h'],
		['b', 'f', 'p', 'v'],
		['c', 's', 'k', 'g', 'j', 'q', 'x', 'z'],
		['d', 't'],
		['l'],
		['m', 'n'],
		['r']
	]

	let characters = [...input];
	let firstCharacter = characters[0].toUpperCase();

	let soundexString = '';

	for (let i = 0; i < characters.length; i++) {
		for (let x = 0; x < soundexConversionTable.length; x++) {
			if (soundexConversionTable[x].includes(characters[i]) && x > 0) {
				soundexString += x;
				break;
			}
		}
	}

	soundexString = firstCharacter + soundexString.substring(1, soundexString.length);

	if (soundexString.length > 4) {
		soundexString = soundexString.substring(0, 4);
	}

	soundexString = soundexString.padEnd(4, "0");

	return soundexString;
}
