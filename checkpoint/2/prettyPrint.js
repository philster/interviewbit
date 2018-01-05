/**
 * PRETTYPRINT
 *
 * Print concentric rectangular pattern in a 2d matrix.
 * Let us show you some examples to clarify what we mean.
 * 
 * Example 1:
 * 
 * Input: A = 4.
 * Output:
 *   4 4 4 4 4 4 4
 *   4 3 3 3 3 3 4
 *   4 3 2 2 2 3 4
 *   4 3 2 1 2 3 4
 *   4 3 2 2 2 3 4
 *   4 3 3 3 3 3 4
 *   4 4 4 4 4 4 4
 *
 * Example 2:
 * 
 * Input: A = 3.
 * Output:
 *   3 3 3 3 3
 *   3 2 2 2 3
 *   3 2 1 2 3
 *   3 2 2 2 3
 *   3 3 3 3 3
 * 
 * The outermost rectangle is formed by A, then the next outermost is formed by A-1 and so on.
 * You will be given A as an argument to the function you need to implement, and you need to return a 2D array.
 */
module.exports = { 
	//param A : integer
	//return a array of array of integers
	prettyPrint : function(A){
    // initialize output array
    var output = [];
    for (var i = 0; i < 2 * A - 1; i++) {
      output[i] = [];
      for (var j = 0; j < 2 * A - 1; j++) {
        output[i][j] = 0;
      }
    }
    // populate array
    for (var i = 0; i < A - 1; i++) {
      var n = A; 
      for (var j = 0; j < i; j++) {
        output[i][j] = n;  // top
        output[j][2 * A - i - 2] = n;  // right
        output[2 * A - i - 2][2 * A - j - 2] = n;  // bottom
        output[2 * A - j - 2][i] = n;  // left
        n--;
      }
      for (var j = i; j < A; j++) {
        output[i][j] = n;  // top
        output[j][2 * A - i - 2] = n;  // right
        output[2 * A - i - 2][2 * A - j - 2] = n;  // bottom
        output[2 * A - j - 2][i] = n;  // left
      }
    }
    output[A - 1][A - 1] = 1;
    return output;
	}
};

console.log('Input: A = 4.');
console.log('Output:\n' + module.exports.prettyPrint(4));
console.log('Input: A = 3.');
console.log('Output:\n' + module.exports.prettyPrint(3));
