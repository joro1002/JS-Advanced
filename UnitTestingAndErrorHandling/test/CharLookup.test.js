const { assert } = require('chai');
const lookupChar = require('../CharLookup');

describe('TestCharLookup', () => {
    it('Should return undefined when first parameter is not string', () => {
        assert.equal(undefined, lookupChar(1, 3));
    });

    it('Should return undefined when second parameter is string', () => {
        assert.equal(undefined, lookupChar("test", "qwe"));
    });

    it('Should return undefined when second parameter is float', () => {
        assert.equal(undefined, lookupChar("test", 1.23));
    });

    it('Should return undefined when second parameter is null', () => {
        assert.equal(undefined, lookupChar("test", null));
    });

    it('Should return incorrect index when first parameter length is than smaller than second parameter', () => {
        assert.equal("Incorrect index", lookupChar("test", 10));
    });

    it('Should return incorrect index when first parameter length is equal second parameter', () => {
        assert.equal("Incorrect index", lookupChar("test", 4));
    });

    it('Should return incorrect index when second parameter is smaller than zero', () => {
        assert.equal("Incorrect index", lookupChar("test", -1));
    });

    it('Should first parameter and second are correct', () => {
        assert.equal("s", lookupChar("test", 2));
    });
})