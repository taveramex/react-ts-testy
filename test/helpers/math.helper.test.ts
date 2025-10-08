import { describe, expect, test } from 'vitest';
import { Add, Multiply, Substract } from '../../src/helpers/math.helper';


describe('Add', () => {
    test('two integers operation ', () => {
        const a = 5;
        const b = 10;
        const result = Add(a, b);
        expect(result).toBe(a + b);
    });
    test('two negative integer operation', () => {
        const a = -5;
        const b = -1;
        const result = Add(a, b);
        expect(result).toBe(a + b);
    });

});
describe('Substract', () => {
    test('positive integers', () => {
        const a = 7;
        const b = 2;
        const result = Substract(a, b);
        expect(result).toBe(a - b);
    });
    test('negative integers', () => {
        const a = -1;
        const b = -5;
        const result = Substract(a, b);
        expect(result).toBe(a - b);
    });
});
describe('Multiply', () => {
    test('positive integers', () => {
        const a = 1;
        const b = 230;
        const result = Multiply(a, b);
        expect(result).toBe(a * b);
    });
    test('positive integer zero operation', () => {
        const a = 0;
        const b = 5;
        const result = Multiply(a, b);
        expect(result).toBe(0);
    });
});