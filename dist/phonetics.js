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
exports.MatchRatingEncoding = exports.MatchRating = exports.Soundex = void 0;
let Soundex = (input) => __awaiter(void 0, void 0, void 0, function* () {
    input = input.toLowerCase();
    let soundexConversionTable = [
        ['a', 'e', 'i', 'o', 'u', 'y', 'w', 'h'],
        ['b', 'f', 'p', 'v'],
        ['c', 's', 'k', 'g', 'j', 'q', 'x', 'z'],
        ['d', 't'],
        ['l'],
        ['m', 'n'],
        ['r']
    ];
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
});
exports.Soundex = Soundex;
let MatchRating = (input1, input2) => __awaiter(void 0, void 0, void 0, function* () {
    input1 = yield exports.MatchRatingEncoding(input1);
});
exports.MatchRating = MatchRating;
let MatchRatingEncoding = (input) => __awaiter(void 0, void 0, void 0, function* () {
    input = input.toLowerCase();
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let characters = [...input];
    let matchRatingString = "";
    for (let i = 0; i < characters.length; i++) {
        if (i == 0) {
            matchRatingString += characters[i];
        }
        if (!vowels.includes(characters[i])) {
            matchRatingString += characters[i];
        }
    }
    let encodedCharacters = [...matchRatingString];
    let skipNext = false;
    let finalMatchRatingString = "";
    for (let i = 0; i < encodedCharacters.length; i++) {
        if (skipNext) {
            skipNext = false;
            continue;
        }
        if (!vowels.includes(encodedCharacters[i]) && i !== (encodedCharacters.length - 1)) {
            if (encodedCharacters[i] = encodedCharacters[i + 1]) {
                skipNext = true;
            }
        }
        finalMatchRatingString += encodedCharacters[i];
    }
    return finalMatchRatingString;
});
exports.MatchRatingEncoding = MatchRatingEncoding;
