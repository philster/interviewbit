/**
 * Permutations
 * 
 * Given a collection of numbers, return all possible permutations.
 * 
 * Example:
 * 
 * [1,2,3] will have the following permutations:
 * 
 *   [1,2,3]
 *   [1,3,2]
 *   [2,1,3] 
 *   [2,3,1] 
 *   [3,1,2] 
 *   [3,2,1]
 *
 * NOTE
 * - No two entries in the permutation sequence should be the same.
 * - For the purpose of this problem, assume that all the numbers in the collection are unique.
 * 
 * Warning : DO NOT USE LIBRARY FUNCTION FOR GENERATING PERMUTATIONS.
 * Example : next_permutations in C++ / itertools.permutations in python.
 * If you do, we will disqualify your submission retroactively and give you penalty points. 
 */

module.exports = { 
    //param A : array of integers
    //return a array of array of integers
    permute : function(A){
        var getAllPermutations = function(arr){
            var results = [];
            
            if (arr.length === 1) {
                results.push(arr.slice());
                return results;
            }
            
            for (var i = 0; i < arr.length; i++) {
                var firstElem = arr[i];
                var elemsLeft = arr.filter(function (elem, idx) {
                    return idx !== i;
                });
                var innerPermutations = getAllPermutations(elemsLeft);
                for (var j = 0; j < innerPermutations.length; j++) {
                    var permu = [firstElem].concat(innerPermutations[j]);
                    results.push(permu);
                }
            }
            
            return results;
        };
        return getAllPermutations(A);
    }
};

function printArrayOfArrays(arr){
    return arr.reduce(function (all, item) {
        return all + '[' + item.join(',') + ']' + '\n';
    }, '');
}

var A = [1,2,3];
console.log('Input : [' + A.join(',') + ']');
console.log('Permutations :\n' + printArrayOfArrays(module.exports.permute(A)));  // [  [1,2,3] [1,3,2] [2,1,3] [2,3,1] [3,1,2] [3,2,1]  ]
