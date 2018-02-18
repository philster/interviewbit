/**
 * Sum Of Fibonacci Numbers
 * 
 * How many minimum numbers from fibonacci series are required such that sum of numbers should be equal to a given Number N?
 * Note : repetition of number is allowed.
 * 
 * Example:
 * 
 *   N = 4
 *   Fibonacci numbers : 1 1 2 3 5 .... so on
 *   here 2 + 2 = 4 
 *   so minimum numbers will be 2
 * 
 */

module.exports = { 
    //param A : integer
    //return an integer
    fibsum : function(A){
        if (A === 0 || A === 1) {
            return A;
        }
        // greedy approach
        // get largest fibonacci number less than or equal to A
        var fib = [0, 1];
        var i = 1;
        do {
            i++;
            fib[i] = fib[i-1] + fib[i-2];
        } while (fib[i] + fib[i-1] <= A);
        // return 1 step + num steps from recursive fibsum()
        return module.exports.fibsum(A - fib[i]) + 1;
    }
};

var N = 4;
console.log('Input : N = ' + N);
console.log('Output : ' + module.exports.fibsum(N));  // 2

var N = 10;
console.log('Input : N = ' + N);
console.log('Output : ' + module.exports.fibsum(N));  // 2
