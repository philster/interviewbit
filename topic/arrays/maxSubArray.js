/**
 * Max Sum Contiguous Subarray
 * 
 * Find the contiguous subarray within an array (containing at least one number) which has the largest sum.
 * 
 * For example:
 * 
 * Given the array [-2,1,-3,4,-1,2,1,-5,4],
 * 
 * the contiguous subarray [4,-1,2,1] has the largest sum = 6.
 * 
 * For this problem, return the maximum sum.
 */

module.exports = { 
  //param A : array of integers
  //return an integer
  maxSubArray : function(A){
    if (A.length === 1) {
      return A[0];
    }
    var maxsum = -Number.MAX_VALUE;
    var maxend = 0;
    for (var i = 0; i < A.length; i++) {
      maxend = maxend + A[i];
      maxsum = Math.max(maxsum, maxend);
      maxend = Math.max(maxend, 0)
    }
    return maxsum;
  }
};

var arr = [-2,1,-3,4,-1,2,1,-5,4];
console.log('Input:\n' + arr.join(','));
console.log('Output:\n' + module.exports.maxSubArray(arr));
