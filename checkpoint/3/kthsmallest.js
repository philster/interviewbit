/**
 * https://www.interviewbit.com/problems/kth-smallest-element-in-the-array/
 *
 * Kth Smallest Element in the Array
 *
 * Find the kth smallest element in an unsorted array of non-negative integers.
 *
 * Definition of kth smallest element
 * " kth smallest element is the minimum possible n such that there are at least k elements in the array <= n.
 *   In other words, if the array A was sorted, then A[k - 1] ( k is 1 based, while the arrays are 0 based ) "
 *
 * NOTE
 * You are not allowed to modify the array ( The array is read only ).
 * Try to do it using constant extra space.
 *
 * Example:
 *   A : [2 1 4 3 2]
 *   k : 3
 *   answer : 2
 */
module.exports = {
  //param A : array of integers
  //param B : integer
  //return an integer
  kthsmallest : function(A, B){
    if (A === null || A.length === 0 || B < 1 || B > A.length) {
      return -1;
    }
    var lo = A[0];
    var hi = A[0];
    for (var i = 1; i < A.length; i++) {
      if (A[i] < lo) {
        lo = A[i];
      } else if (A[i] > hi) {
        hi = A[i];
      }
    }
    while (lo <= hi) {
      var mid = lo + Math.floor((hi - lo) / 2);
      var cntLess = 0;
      var cntEqual = 0;
      for (var i=0; i<A.length; i++) {
        if (A[i] < mid) {
          cntLess++;
        } else if (A[i] === mid) {
          cntEqual++;
        }
        if (cntLess >= B) {
          break;
        }
      }
      if (cntLess < B && cntLess + cntEqual >= B) {
        return mid;
      } else if (cntLess >= B) {
        hi = mid - 1;
      } else {
        lo = mid + 1;
      }
    }
  }
};

var A = [2, 1, 4, 3, 2];
var k = 3;
console.log('A : [' + A + ']');
console.log('k : ' + k);
console.log('answer : ' + module.exports.kthsmallest(A, k));
