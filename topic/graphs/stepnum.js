/**
 * Stepping Numbers
 * 
 * Given N and M find all stepping numbers in range N to M
 * 
 * The stepping number:
 *   A number is called as a stepping number if the adjacent digits have a difference of 1.
 *   e.g. 123 is stepping number, but 358 is not a stepping number
 * 
 * Example:
 *   N = 10, M = 20
 *   all stepping numbers are 10 , 12
 * 
 * Return the numbers in sorted order.
 */

module.exports = { 
    //param A : integer
    //param B : integer
    //return a array of integers
    stepnum : function(A, B){
        var result = {};

        function dfs(stepNum) {
            if (stepNum >= A && stepNum <= B) {
                // if stepping number is in the range [n,m], then add to result
                result[stepNum] = 1;
            } else if (stepNum === 0 || stepNum > B) {
                // if stepping number is 0 or greater than m, then return
                return;
            }
            // get the last digit of the currently visited stepping number
            var lastDigit = stepNum % 10;
            // 1-9: digit to be appended is lastDigit-1
            if (lastDigit !== 0) {
                dfs(stepNum * 10 + (lastDigit-1));
            }
            // 0-8: digit to be appended is lastDigit+1
            if (lastDigit !== 9) {
                dfs(stepNum * 10 + (lastDigit+1));
            }
        }

        // for every single digit i, find all stepping numbers starting with i
	    for (var i = 0; i <= 9; i++) {
	        dfs(i);
	    }

        return Object.keys(result).sort(function(a, b) { return a-b; });
    }
};

var N = 10;
var M = 20;
console.log('Input : N = ' + N + ', M = ' + M);
console.log('Output : ' + module.exports.stepnum(N, M).join(', '));  // 10, 12

var N = 1;
var M = 100;
console.log('Input : N = ' + N + ', M = ' + M);
console.log('Output : ' + module.exports.stepnum(N, M).join(', '));  // 1 2 3 4 5 6 7 8 9 10 12 21 23 32 34 43 45 54 56 65 67 76 78 87 89 98 

