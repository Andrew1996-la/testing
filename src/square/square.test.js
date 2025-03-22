const square = module.require('./square');

describe('square', () => {
    beforeAll(() => {
        //выполняется перед началом тестов
    })

    beforeEach(() => {
        //выполняется до каждого теста
    })

    //создается "шпион" на функцию Math.pow. Он следит сколько раз была вызвана данная функция
    //Если больше 1 раза то тест будет не проиден
    test('правильное значение', () => {
        const spyMathPow = jest.spyOn(Math, 'pow');
        square(2);
        expect(spyMathPow).toHaveBeenCalledTimes(1)
    })

    afterEach(() => {
        //выполняется после каждого теста
        jest.restoreAllMocks();
    })

    afterAll(() => {
        //выполняется после каждого теста
    })
});