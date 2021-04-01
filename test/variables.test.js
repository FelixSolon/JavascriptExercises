const variables = require("../variables");

describe("variables.js", () => {
    describe("declareVariable", () => {
        test("should return back the input value", () => {
            const input = "test string";
            const output = "test string";

            expect(variables.declareVariable(input)).toEqual(output);
        })
    })
})