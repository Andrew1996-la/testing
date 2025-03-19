const validateValue = require("./validateValue");

//Простой тест для функции validateValue описывающий один кейс
test('validateValueTest', () => {
    expect(validateValue(50)).toBe(true);
});

//Описание ряда кейсов одной настройки через describe
describe('validateValue', () => {
    test('Корректное значение', () => {
        expect(validateValue(50)).toBe(true);
    });
    test('меньше границы', () => {
        expect(validateValue(-1)).toBe(false);
    });
    test('больше границы', () => {
        expect(validateValue(101)).toBe(false);
    });
    test('нижняя граница', () => {
        expect(validateValue(1)).toBe(true);
    });
    test('верхняя граница', () => {
        expect(validateValue(100)).toBe(true);
    });
})