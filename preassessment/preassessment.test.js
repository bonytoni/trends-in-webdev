/*
Trends in Web Development Assignment 0
Name: Tony Chen
NetID: tc448
*/

// @ts-check

const { mySum, isLeapYear, isPrime, perfectSquares } = require('./preassessment');

/**
 * @param {boolean} condition
 * @param {string} message
 */
const assert = (condition, message) => {
  if (!condition) {
    throw Error(`[x] Assertion failed: ${message}`);
  } else {
    console.log(`[✓] Assertion passed: ${message}`);
  }
};

// Question 1
assert(mySum([1, 2, 3]) === 6, 'Sum of [1, 2, 3] should be 6');

// Question 2
assert(isLeapYear(2000), 'Year 2000 is a leap year.');
assert(!isLeapYear(2100), 'Year 2100 is not a leap year.');
assert(isLeapYear(2004), 'Year 2004 is a leap year.');

// Question 3
assert(!isPrime(15), '15 is not prime.');
assert(isPrime(17), '17 is prime.');

// Question 4
assert(
  perfectSquares([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]).join(',') === '0,1,4,9',
  'perfectSquares works for [0,...,9].'
);