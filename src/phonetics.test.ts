import { MatchRating, MatchRatingEncode } from './phonetics/matchrating';
import { Soundex } from './phonetics/soundex';

describe("Soundex", () => {
	test("Should encode string using the Soundex algorithm.", async () => {
		let soundexInput = await Soundex('Joacim');
		expect(soundexInput).toStrictEqual('J250');
	});

	test("Should not return string longer than 4 characters.", async () => {
		let soundexInput = await Soundex('Magdalena');
		expect(soundexInput).toHaveLength(4);
	});

	test("Should not return string shorter than 4 characters.", async () => {
		let soundexInput = await Soundex('Pär');
		expect(soundexInput).toHaveLength(4);
	});
});

describe("MatchRating", () => {

	test("Byrne should encode to BYRN with MatchRating algorithm.", async () => {
		let input = await MatchRatingEncode('Byrne');
		expect(input).toStrictEqual("BYRN");
	});


	test("Byrne and and encoded string BRN should result in true.", async () => {
		let input = await MatchRatingEncode('Byrne');
		let matchRatingCompare = await MatchRating(input, 'BRN');

		expect(matchRatingCompare).toStrictEqual(true);
	});

	test("Joacim and Joakim should result in true.", async () => {
		let input1 = await MatchRatingEncode('Joacim');
		let input2 = await MatchRatingEncode('Joakim');

		let compare = await MatchRating(input1, input2);
		expect(compare).toStrictEqual(true);
	});

	test("Joacim and Byrne should result in false.", async () => {
		let input1 = await MatchRatingEncode('Joacim');
		let input2 = await MatchRatingEncode('Byrne');

		let compare = await MatchRating(input1, input2);
		expect(compare).toStrictEqual(false);
	});
});
