const exercises = require("../ifStatements.js");
// build using the assert/act/assess pattern. See https://automationpanda.com/2020/07/07/arrange-act-assert-a-pattern-for-writing-good-tests/


describe("exercises.js", () => {
    describe('loose equality', () => {
        test('should return true when both values are the same value', () => {
            const inputA = "1";
            const inputB = 1;
            const output = true;

            expect(exercises.looseEquality(inputA, inputB)).toEqual(output);
        });
        test('should return true when both values are the same type and value', () => {
            const inputA = 1;
            const inputB = 1;
            const output = true;

            expect(exercises.looseEquality(inputA, inputB)).toEqual(output);
        });
        test('should return false when both values are not the same value', () => {
            const inputA = 5;
            const inputB = 10;
            const output = false;

            expect(exercises.looseEquality(inputA, inputB)).toEqual(output);
        });
    });
    describe('strict equality', () => {
        test('should return false when both values are the same value but not the same type', () => {
            const inputA = "1";
            const inputB = 1;
            const output = false;

            expect(exercises.strictEquality(inputA, inputB)).toEqual(output);
        });
        test('should return true when both values are the same type and value', () => {
            const inputA = 1;
            const inputB = 1;
            const output = true;

            expect(exercises.strictEquality(inputA, inputB)).toEqual(output);
        });
        test('should return false when both values are not the same value', () => {
            const inputA = 5;
            const inputB = 10;
            const output = false;

            expect(exercises.strictEquality(inputA, inputB)).toEqual(output);
        });
    });
    describe('loose inequality', () => {
        test('should return false when both values are the same value but not the same type', () => {
            const inputA = "1";
            const inputB = 1;
            const output = false;

            expect(exercises.looseInequality(inputA, inputB)).toEqual(output);
        });
        test('should return false when both values are the same type and value', () => {
            const inputA = 1;
            const inputB = 1;
            const output = false;

            expect(exercises.looseInequality(inputA, inputB)).toEqual(output);
        });
        test('should return true when both values are not the same value', () => {
            const inputA = 5;
            const inputB = 10;
            const output = true;

            expect(exercises.looseInequality(inputA, inputB)).toEqual(output);
        });
    });
    describe('strict inequality', () => {
        test('should return true when both values are the same value but not the same type', () => {
            const inputA = "1";
            const inputB = 1;
            const output = true;

            expect(exercises.strictInequality(inputA, inputB)).toEqual(output);
        });
        test('should return false when both values are the same type and value', () => {
            const inputA = 1;
            const inputB = 1;
            const output = false;

            expect(exercises.strictInequality(inputA, inputB)).toEqual(output);
        });
        test('should return true when both values are not the same value', () => {
            const inputA = 5;
            const inputB = 10;
            const output = true;

            expect(exercises.strictInequality(inputA, inputB)).toEqual(output);
        });
    });
    describe("If/else if/else statements", () => {
        test('should return the string "if" when the first input is true', () => {
            const inputA = true;
            const inputB = false;
            const output = "if";

            expect(exercises.elseIf(inputA, inputB)).toEqual(output);
        });
        test('should return the string "else if" when the second input is true', () => {
            const inputA = false;
            const inputB = true;
            const output = "else if";

            expect(exercises.elseIf(inputA, inputB)).toEqual(output);
        });
        test('should return the string "else" when neither input is true', () => {
            const inputA = false;
            const inputB = false;
            const output = "else";

            expect(exercises.elseIf(inputA, inputB)).toEqual(output);
        });
        test('should return the string "if" when both inputs are true', () => {
            const inputA = true;
            const inputB = true;
            const output = "if";

            expect(exercises.elseIf(inputA, inputB)).toEqual(output);
        });
    })
    
})