/**
 * Stairs
 * 
 * You are climbing a stair case. It takes n steps to reach to the top.
 * 
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 * 
 * Example :
 * 
 *   Input : 3
 *   Return : 3
 *  
 *   Steps : [1 1 1], [1 2], [2 1]
 */

module.exports = { 
    //param A : integer
    //return an integer
    climbStairs : function(A){
        var memo = {};
        var countWays = function (n) {
            if (n === 0 || n === 1) {
                return 1;
            }
            if (!(n in memo)) {
                memo[n] = countWays(n - 1) + countWays(n - 2);
            }
            return memo[n];
        };
        return countWays(A);
    }
};

var steps = 3;
console.log('Input : ' + steps);
console.log('Output : ' + module.exports.climbStairs(steps));  // 3
