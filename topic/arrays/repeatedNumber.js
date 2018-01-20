/**
 * Find Duplicate in Array
 * 
 * Given a read only array of n + 1 integers between 1 and n, find one number that repeats in linear time using less than O(n) space and traversing the stream sequentially O(1) times.
 * 
 * Sample Input:
 * [3 4 1 4 1]
 * 
 * Sample Output:
 * 1
 * 
 * If there are multiple possible answers ( like in the sample case above ), output any one.
 * 
 * If there is no duplicate, output -1
 */

module.exports = { 
	//param A : array of integers
	//return an integer
	repeatedNumber : function(A){
	    var n = A.length - 1;
	    var lookup = {};
	    for (var i = 0; i < A.length; i++) {
	        var num = A[i];
	        if (lookup[num] === 1) {
	            return num;
	        } else {
	            lookup[num] = 1;
	        }
	    }
	    return -1;
	}
};

var arr = [3,4,1,4,1];
console.log('Input:\n' + arr.join(','));
console.log('Output:\n' + module.exports.repeatedNumber(arr));
