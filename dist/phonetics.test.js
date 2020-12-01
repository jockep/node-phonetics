"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const matchrating_1 = require("./phonetics/matchrating");
const soundex_1 = require("./phonetics/soundex");
describe("Soundex", () => {
    test("Should encode string using the Soundex algorithm.", () => __awaiter(void 0, void 0, void 0, function* () {
        let soundexInput = yield soundex_1.Soundex('Joacim');
        expect(soundexInput).toStrictEqual('J250');
    }));
    test("Should not return string longer than 4 characters.", () => __awaiter(void 0, void 0, void 0, function* () {
        let soundexInput = yield soundex_1.Soundex('Magdalena');
        expect(soundexInput).toHaveLength(4);
    }));
    test("Should not return string shorter than 4 characters.", () => __awaiter(void 0, void 0, void 0, function* () {
        let soundexInput = yield soundex_1.Soundex('Pär');
        expect(soundexInput).toHaveLength(4);
    }));
});
describe("MatchRating", () => {
    test("Byrne should encode to BYRN with MatchRating algorithm.", () => __awaiter(void 0, void 0, void 0, function* () {
        let input = yield matchrating_1.MatchRatingEncode('Byrne');
        expect(input).toStrictEqual("BYRN");
    }));
    test("Byrne and and encoded string BRN should result in true.", () => __awaiter(void 0, void 0, void 0, function* () {
        let input = yield matchrating_1.MatchRatingEncode('Byrne');
        let matchRatingCompare = yield matchrating_1.MatchRating(input, 'BRN');
        expect(matchRatingCompare).toStrictEqual(true);
    }));
    test("Joacim and Joakim should result in true.", () => __awaiter(void 0, void 0, void 0, function* () {
        let input1 = yield matchrating_1.MatchRatingEncode('Joacim');
        let input2 = yield matchrating_1.MatchRatingEncode('Joakim');
        let compare = yield matchrating_1.MatchRating(input1, input2);
        expect(compare).toStrictEqual(true);
    }));
    test("Joacim and Byrne should result in false.", () => __awaiter(void 0, void 0, void 0, function* () {
        let input1 = yield matchrating_1.MatchRatingEncode('Joacim');
        let input2 = yield matchrating_1.MatchRatingEncode('Byrne');
        let compare = yield matchrating_1.MatchRating(input1, input2);
        expect(compare).toStrictEqual(false);
    }));
});
