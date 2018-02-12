/**
 * Min XOR value
 * Problem Setter: mihai.gheorghe 
 * Problem Tester: archit.rai
 * 
 * Given an array of N integers, find the pair of integers in the array which have minimum XOR value. Report the minimum XOR value.
 * 
 * Examples :
 * 
 * Input
 * 0 2 5 7
 * Output
 * 2 (0 XOR 2)
 * 
 * Input
 * 0 4 7 9
 * Output
 * 3 (4 XOR 7)
 * 
 * Constraints:
 * 2 <= N <= 100 000 
 * 0 <= A[i] <= 1 000 000 000
 */

module.exports = { 
    //param A : array of integers
    //return an integer
    findMinXor : function(A){
	    A.sort(function(a,b){ return a - b; });
        var minXor = Number.MAX_VALUE;
        for (var i = 0; i < A.length - 1; i++) {
            var currXor = A[i] ^ A[i+1];
            if (currXor < minXor) {
                minXor = currXor;
            }
        }
        return minXor;
    }
};

var arr = [0,2,5,7];
console.log('Input : [' + arr.join(', ') + ']');
console.log('Output : ' + module.exports.findMinXor(arr));  // 2 (0 XOR 2)
