const { assert } = require('chai');
const mathEnforcer = require('../MathEnforcer');

describe('mathEnforcer', () => {
    describe('addFive', () => {
        it('Should returen undefined when param is string', () => {
            let result = mathEnforcer.addFive("10");
            assert.equal(undefined, result);
        });

        it('Should is negative', () => {
            let result = mathEnforcer.addFive(-5);
            assert.equal(0, result);
        });

        it('Should is floating', () => {
            let result = mathEnforcer.addFive(2.34);
            assert.equal(7.34, result);
        });

        it('Should is integer', () => {
            let result = mathEnforcer.addFive(2);
            assert.equal(7, result);
        });
    });

    describe("subtractTen", () => {
        it('Should return undefined when param is string', () => {
            let result = mathEnforcer.subtractTen("10");
            assert.equal(undefined, result);
        });

        it('Should is posive', () => {
            let result = mathEnforcer.subtractTen(10);
            assert.equal(0, result);
        });
        
        it('Should is negative', () => {
            let result = mathEnforcer.subtractTen(-10);
            assert.equal(-20, result);
        });

        it('Should is floating', () => {
            let result = mathEnforcer.subtractTen(10.5);
            assert.equal(0.5, result);
        });

    });

    describe('sum', () => {
        it('Should retun undefined when first param is string', () => {
            let result = mathEnforcer.sum("10", 3);
            assert.equal(undefined, result);
        });

        it('Should retun undefined when second param is string', () => {
            let result = mathEnforcer.sum(10, "2");
            assert.equal(undefined, result);
        });

        it('Should two param are negative', () => {
            let result = mathEnforcer.sum(-10, -2);
            assert.equal(-12, result);
        });

        it('Should first param is negative and second param is positive', () => {
            let result = mathEnforcer.sum(-10, 2);
            assert.equal(-8, result);
        });

        it('Should first param is positive and second param is negative', () => {
            let result = mathEnforcer.sum(20, -2);
            assert.equal(18, result);
        });

        it('Should two param are positive', () => {
            let result = mathEnforcer.sum(10, 2);
            assert.equal(12, result);
        });

        it('Should are positive floating', () => {
            let result = mathEnforcer.sum(10.5, 20.2);
            assert.equal(30.7, result);
        });

        it('Should first param is negative floating and second param is positive floating', () => {
            let result = mathEnforcer.sum(-10.5, 2.2);
            assert.equal(-8.3, result);
        });

        it('Should first param is positive floating and second param is negative floating', () => {
            let result = mathEnforcer.sum(10.5, -2.2);
            assert.equal(8.3, result);
        });
    })

})