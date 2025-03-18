const validateValue = require("./validateValue");

test('validateValue', () => {
    expect(validateValue(3)).toBe(true);
});