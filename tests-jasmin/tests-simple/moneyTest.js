import { formatCurrency } from '../../scripts/utils/money.js';

console.log('test suite for formatCurrency ');

console.log('Testing formatCurrency function:');
if (formatCurrency(2095) === '20.95') {
    console.log('passed');
} else {
    console.log('failed');
}

console.log('tests suite for edge cases:');

console.log('Testing formatCurrency function with edge cases:');
if (formatCurrency(0) === '0.00') {
    console.log('passed');
} else {
    console.log('failed');
}

console.log('tests suite for decimal values:');

console.log('Testing formatCurrency function with decimal values:');
if (formatCurrency(2000.5) === '20.01') {
    console.log('passed');
} else {
    console.log('failed');
}