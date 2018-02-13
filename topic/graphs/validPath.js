/**
 * Valid Path
 * Problem Setter: glowing_glare 
 * Problem Tester: dhruvi
 * 
 * There is a rectangle with left bottom as  (0, 0) and right up as (x, y). There are N circles such that their centers are inside the rectangle. Radius of each circle is R. Now we need to find out if it is possible that we can move from (0, 0) to (x, y) without touching any circle.
 * Note : We can move from any cell to any of its 8 adjecent neighbours and we cannot move outside the boundary of the rectangle at any point of time.
 * 
 * Constraints
 * 0 <= x , y , R <= 100 
 * 1 <= N <= 1000 
 * Center of each circle would lie within the grid
 * 
 * Input
 * Input contains x, y , N , R  and two array of size N containing centers of circles.
 * The ith index of first array contains x co-ordinate of the ith circle and ith index of second array contains the y co-ordinate of the ith circle.
 * 
 * Output
 * YES or NO depending on weather it is possible to reach cell  (x,y) or not starting from (0,0).
 *
 * Sample Input 
 * 2 3 1 1 
 * 2
 * 3
 * Sample Output
 * NO
 */

module.exports = { 
    //param A : integer
    //param B : integer
    //param C : integer
    //param D : integer
    //param E : array of integers
    //param F : array of integers
    //return a strings
    solve : function(A, B, C, D, E, F){
        return 'NO';
    }
};

var A = 2;
var B = 3;
var C = 1;
var D = 1;
var E = [2];
var F = [3];
console.log('Input  : ');
console.log('Output : ' + module.exports.solve(A,B,C,D,E,F));  // NO
