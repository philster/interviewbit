/**
 * Distinct Numbers in Window
 * 
 * You are given an array of N integers, A[1], A[2] ,…, A[N] and an integer K. Return the of count of distinct numbers in all windows of size K.
 * 
 * Formally, return an array of size N-K+1 where i’th element in this array contains number of distinct elements in sequence A[i], A[i+1] ,…, A[i+k-1].
 * 
 * Note:
 *   - If K > N, return empty array.
 * 
 * For example,
 * 
 *  A=[1, 2, 1, 3, 4, 3] and K = 3
 *  
 *  All windows of size K are
 *  
 *  [1, 2, 1]
 *  [2, 1, 3]
 *  [1, 3, 4]
 *  [3, 4, 3]
 *  
 *  So, we return an array [2, 3, 3, 2].
 */

module.exports = { 
    //param A : array of integers
    //param B : integer
    //return a array of integers
    dNums : function(A, B){
        var results = []
        var hashmap = {};
        var cnt = 0;

        for (var i = 0; i < B; i++) {
            if (hashmap[A[i]] === undefined) {
                hashmap[A[i]] = 1;
                cnt++;
            } else {
                hashmap[A[i]]++;
            }
        }
        results.push(cnt);

        for (var i = B; i < A.length; i++) {
            if (hashmap[A[i - B]] === 1) {
                delete hashmap[A[i - B]];
                cnt--;
            } else {
                hashmap[A[i - B]]--;
            }
            if (hashmap[A[i]] === undefined) {
                hashmap[A[i]] = 1;
                cnt++;
            } else {
                hashmap[A[i]]++;
            }
            results.push(cnt);
        }

        return results;
    }
};

var A = [1, 2, 1, 3, 4, 3];
var K = 3;
console.log('Input: A=[' + A.join(',') + '], K=' + K);
console.log('Return: [' + module.exports.dNums(A, K).join(', ') + ']');  // [2, 3, 3, 2]
