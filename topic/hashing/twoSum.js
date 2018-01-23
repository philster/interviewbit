/**
 * 2 Sum
 * 
 * Given an array of integers, find two numbers such that they add up to a specific target number.
 * 
 * The function twoSum should return indices of the two numbers such that they add up to the target, where index1 < index2. Please note that your returned answers (both index1 and index2 ) are not zero-based.
 * Put both these numbers in order in an array and return the array from your function ( Looking at the function signature will make things clearer ). Note that, if no pair exists, return empty list.
 * 
 * If multiple solutions exist, output the one where index2 is minimum. If there are multiple solutions with the minimum index2, choose the one with minimum index1 out of them.
 * 
 * Input: [2, 7, 11, 15], target=9
 * Output: index1 = 1, index2 = 2
 */

module.exports = { 
    //param A : array of integers
    //param B : integer
    //return a array of integers
    twoSum : function(A, B){
        var hashmap = {};
        for (var i = 0; i < A.length; i++) {
            var curValue = A[i];
            if (hashmap[curValue] !== undefined) {
                return [hashmap[curValue] + 1, i + 1];
            } else if (hashmap[B - curValue] === undefined) {
                hashmap[B - curValue] = i;
            }
            // console.log('i='+i+', curValue='+curValue+', hashmap='+Object.keys(hashmap).map(function (k) { return k + '=' + hashmap[k]; }).join(','));
        }
        return [];
    }
};

var arr = [2, 7, 11, 15];
var target = 9;
console.log('Input  : [' + arr.join(',') + '], target=' + target);
var result = module.exports.twoSum(arr, target);
console.log('Output : index1=' + result[0] + ', index2=' + result[1]);  // 1 2

var arr2 = [4, 7, -4, 2, 2, 2, 3, -5, -3, 9, -4, 9, -7, 7, -1, 9, 9, 4, 1, -4, -2, 3, -3, -5, 4, -7, 7, 9, -4, 4, -8];
var target2 = -3;
console.log('Input  : [' + arr2.join(',') + '], target=' + target2);
var result2 = module.exports.twoSum(arr2, target2);
console.log('Output : index1=' + result2[0] + ', index2=' + result2[1]);  // 4 8

var arr3 = [-5, 1, 4, -7, 10, -7, 0, 7, 3, 0, -2, -5, -3, -6, 4, -7, -8, 0, 4, 9, 4, 1, -8, -6, -6, 0, -9, 5, 3, -9, -5, -9, 6, 3, 8, -10, 1, -2, 2, 1, -9, 2, -3, 9, 9, -10, 0, -9, -2, 7, 0, -4, -3, 1, 6, -3];
var target3 = -1;
console.log('Input  : [' + arr3.join(',') + '], target=' + target3);
var result3 = module.exports.twoSum(arr3, target3);
console.log('Output : index1=' + result3[0] + ', index2=' + result3[1]);  // 1 3
