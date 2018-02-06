/**
 * Subset
 * 
 * Given a set of distinct integers, S, return all possible subsets.
 * 
 * Note:
 *  - Elements in a subset must be in non-descending order.
 *  - The solution set must not contain duplicate subsets.
 *  - Also, the subsets should be sorted in ascending ( lexicographic ) order.
 *  - The list is not necessarily sorted.
 * 
 * Example :
 * 
 * If S = [1,2,3], a solution is:
 * 
 * [
 *   [],
 *   [1],
 *   [1, 2],
 *   [1, 2, 3],
 *   [1, 3],
 *   [2],
 *   [2, 3],
 *   [3],
 * ]
 */

module.exports = { 
    //param A : array of integers
    //return a array of array of integers
    subsets : function(A){
	    A.sort(function(a,b){return a-b;});
        var results = [];
        var subsetHelper = function(idx, arr) {
            results.push(arr.slice());
            for (var i = idx; i < A.length; i++) {
                arr.push(A[i]);
                subsetHelper(i + 1, arr);
                arr.pop();
            }
        };
        subsetHelper(0, []);
        return results;
    }
};

function printArrayOfArrays(arr){
    return arr.reduce(function (all, item) {
        return all + '[' + item.join(',') + ']' + '\n';
    }, '');
}

var S = [1,2,3];
console.log('Input : [' + S.join(',') + ']');
console.log('Subsets :\n' + printArrayOfArrays(module.exports.subsets(S)));  // [    ]

var S = [ 15, 20, 12, 19, 4 ];
console.log('Input : [' + S.join(',') + ']');
console.log('Subsets :\n' + printArrayOfArrays(module.exports.subsets(S)));  // [  [] [4 ] [4 12 ] [4 12 15 ] [4 12 15 19 ] [4 12 15 19 20 ] [4 12 15 20 ] [4 12 19 ] [4 12 19 20 ] [4 12 20 ] [4 15 ] [4 15 19 ] [4 15 19 20 ] [4 15 20 ] [4 19 ] [4 19 20 ] [4 20 ] [12 ] [12 15 ] [12 15 19 ] [12 15 19 20 ] [12 15 20 ] [12 19 ] [12 19 20 ] [12 20 ] [15 ] [15 19 ] [15 19 20 ] [15 20 ] [19 ] [19 20 ] [20 ]  ]
