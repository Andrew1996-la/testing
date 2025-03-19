const arrNumberToString = require('./arrNumberToString');

//для сравнения ссылочных типов данных используюется to Equal
//not для отрицания
describe('arrNumberToString', () => {
    test('корректное значение', () => {
        expect(arrNumberToString([1, 2, 3])).toEqual(["1", "2", "3"]);
    })
    test('проверка на другие типы', () => {
        expect(arrNumberToString([1,2,3,null, undefined, 'djfk'])).toEqual(["1", "2", "3"])
    })
    test('проверка на пустой массив', () => {
        expect(arrNumberToString([])).toEqual([])
    })
    test('проверка на другие излишние значения', () => {
        expect(arrNumberToString([1,2,3])).not.toEqual(["1", "2", "3", "4"])
    })
})