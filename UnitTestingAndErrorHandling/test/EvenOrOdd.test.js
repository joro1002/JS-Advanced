const { assert } = require('chai');
const isOddOrEven = require('../EvenOrOdd');

describe('Test even or odd', () => {
    it('Should return undefined with invalid argument', () => {
        assert.equal(undefined, isOddOrEven(1));
    });

    it("Should return even", () => {
        assert.equal('even', isOddOrEven("qwerty"));
    });

    it('Should retunr odd', () => {
        assert.equal("odd", isOddOrEven("qwe"));
    });
})