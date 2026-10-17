import { formatCurrency } from '../../scripts/utils/money.js';

describe('test suite: formatCurrency', () => {
    it('Testing formatCurrency function', () => {
        expect(formatCurrency(2095)).toEqual('20.95');
    });

    it('Testing formatCurrency function with edge cases', () => {
        expect(formatCurrency(0)).toEqual('0.00');
    });

    it('Testing formatCurrency function with decimal values', () => {
        expect(formatCurrency(2000.5)).toEqual('20.01')
    });
});