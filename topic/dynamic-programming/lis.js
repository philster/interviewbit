/**
 * Longest Increasing Subsequence
 * 
 * Find the longest increasing subsequence of a given sequence / array.
 * 
 * In other words, find a subsequence of array in which the subsequence’s elements are in strictly increasing order, and in which the subsequence is as long as possible.
 * This subsequence is not necessarily contiguous, or unique.
 * In this case, we only care about the length of the longest increasing subsequence.
 * 
 * Example :
 * 
 *   Input : [0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15]
 *   Output : 6
 * 
 * The sequence : [0, 2, 6, 9, 13, 15] or [0, 4, 6, 9, 11, 15] or [0, 4, 6, 9, 13, 15]
 */

module.exports = { 
    //param A : array of integers
    //return an integer
    lis : function(A){
	    var l = [];
	    for (var n = 0; n < A.length; n++) {
	        l[n] = 1;
	    }
	    for (var i = 1; i < A.length; i++) {
	        for (var j = 0; j < i; j++) {
	            if (A[i] > A[j] && l[i] < l[j] + 1) {
	                l[i] = l[j] + 1;
	            }
	        }
	    }
	    var lMax = 0;
	    for (var i = 0; i < A.length; i++) {
	        lMax = Math.max(lMax, l[i]);
	    }
        return lMax;
    }
};

var arr = [0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15];
console.log('Input : [' + arr.join(', ') + ']');
console.log('Output : ' + module.exports.lis(arr));  // 6
