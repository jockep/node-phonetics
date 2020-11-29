import { Soundex } from './phonetics';

describe("Soundex", () => {
	test("Should convert string according to the Soundex algorithm.", async () => {
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
