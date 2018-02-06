/**
 * Single Number
 * 
 * Given an array of integers, every element appears twice except for one. Find that single one.
 * 
 * Note: Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
 * 
 * Example :
 *   Input : [1 2 2 3 1]
 *   Output : 3
 */

module.exports = { 
    //param A : array of integers
    //return an integer
    singleNumber : function(A){
	    var uniq = A[0];
	    for (var i = 1; i < A.length; i++) {
	        uniq = uniq ^ A[i];
	    }
	    return uniq;
    }
};

var arr = [1, 2, 2, 3, 1];
console.log('Input : [' + arr.join(', ') + ']');
console.log('Output : ' + module.exports.singleNumber(arr));  // 3
