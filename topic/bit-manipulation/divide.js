/**
 * Divide Integers
 * 
 * Divide two integers without using multiplication, division and mod operator.
 * 
 * Return the floor of the result of the division.
 * 
 * Example:
 * 
 *   5 / 2 = 2
 * 
 * Also, consider if there can be overflow cases. For overflow case, return INT_MAX.
 */

module.exports = { 
    //param A : integer
    //param B : integer
    //return an integer
    divide : function(A, B){
        var MAX_INT = 2147483647;
        var MIN_INT = -2147483648;
        if (B === 0) {
            return MAX_INT;
        } else if (A === 0) {
            return 0;
        } else if (B === 1) {
            return A;
        } else if (B === -1) {
            return Math.min(-A, MAX_INT);
        }
	    var sign = A < 0 ^ B < 0 ? -1 : 1;
	    dividend = Math.abs(A);
	    divisor = Math.abs(B);
	    var quotient = 0;
	    while (dividend > 0) {
	        dividend -= divisor;
	        quotient++;
	    }
	    if (dividend < 0) {
	        quotient--;
	    }
	    if (sign < 0) {
	        quotient = -quotient;
        }
        console.log(quotient);
        return quotient >= MAX_INT || quotient < MIN_INT ? MAX_INT : quotient;
    }
};

var dividend = 5;
var divisor = 2;
console.log('Input : ' + dividend + ' / ' + divisor);
console.log('Output : ' + module.exports.divide(dividend, divisor));  // 2

var dividend = 1;
var divisor = -1;
console.log('Input : ' + dividend + ' / ' + divisor);
console.log('Output : ' + module.exports.divide(dividend, divisor));  // -1

var dividend = -2147483648;
var divisor = -1;
console.log('Input : ' + dividend + ' / ' + divisor);
console.log('Output : ' + module.exports.divide(dividend, divisor));  // 2147483647
