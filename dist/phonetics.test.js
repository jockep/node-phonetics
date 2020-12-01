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
const phonetics_1 = require("./phonetics");
describe("Soundex", () => {
    test("Should convert string according to the Soundex algorithm.", () => __awaiter(void 0, void 0, void 0, function* () {
        let soundexInput = yield phonetics_1.Soundex('Joacim');
        expect(soundexInput).toStrictEqual('J250');
    }));
    test("Should not return string longer than 4 characters.", () => __awaiter(void 0, void 0, void 0, function* () {
        let soundexInput = yield phonetics_1.Soundex('Magdalena');
        expect(soundexInput).toHaveLength(4);
    }));
    test("Should not return string shorter than 4 characters.", () => __awaiter(void 0, void 0, void 0, function* () {
        let soundexInput = yield phonetics_1.Soundex('Pär');
        expect(soundexInput).toHaveLength(4);
    }));
});
describe("MatchRating", () => {
    test("Should rate two strings using the Match rating algorithm", () => __awaiter(void 0, void 0, void 0, function* () {
        let matchRatingInput = yield phonetics_1.MatchRatingEncoding('Byrne');
        console.log(matchRatingInput);
    }));
});
