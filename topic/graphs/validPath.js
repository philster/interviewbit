/**
 * Valid Path
 * Problem Setter: glowing_glare 
 * Problem Tester: dhruvi
 * 
 * There is a rectangle with left bottom as (0, 0) and right up as (x, y). There are N circles such that their centers are inside the rectangle. Radius of each circle is R. Now we need to find out if it is possible that we can move from (0, 0) to (x, y) without touching any circle.
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
        var top = B;
        var bottom = 0;
        var left = 0;
        var right = A;
        var num = C;
        var R = D;
        var circles = {};
        var topSet = {};
        var bottomSet = {};
        var leftSet = {};
        var rightSet = {};

        for (var i=0; i<num; i++) {
            var center = (E[i] + '|' + F[i]);
            circles[center] = {};
        }

        for (var i = 0; i < num; i++) {
            var center = (E[i] + '|' + F[i]);
            if (E[i]-R <= left && F[i]-R <= bottom) {
                return 'NO';  // blocking entrance left and bottom
            }
            if (E[i]+R >= right && F[i]+R >= top) {
                return 'NO';  // blocking exit top and right
            }
            if (E[i]-R <= left) {
                leftSet[center] = 1;
            }
            if (E[i]+R >= right) {
                rightSet[center] = 1;
                if (center in leftSet) {
                    return 'NO';
                }
            }
            if (F[i]-R <= bottom) {
                bottomSet[center] = 1;
            }
            if (F[i]+R >= top) {
                topSet[center] = 1;
                if (center in bottomSet) {
                    return 'NO';
                }
            }
            for (var j=i+1; j<num; j++) {
                if (i === j) {
                    continue;
                }
                var center2 = (E[j] + '|' + F[j]);
                d = Math.pow(E[i]-E[j], 2) + Math.pow(F[i]-F[j], 2);
                r = Math.pow(R*2, 2);
                if (0 <= d && d <= r) {
                    // x and y overlap
                    circles[center][center2] = 1;
                    circles[center2][center] = 1;
                }
            }
        }

        if (Object.keys(topSet).length == 0 && Object.keys(bottomSet).length == 0 && Object.keys(leftSet).length == 0 && Object.keys(rightSet).length == 0) {
            return 'YES';
        }
        var visited = {};
        var myQ = [];
        for (var c in topSet) {
            if (!topSet.hasOwnProperty(c)) continue;
            if (c in visited) continue;
            myQ.push(c);
            visited[c] = 1;
            while (myQ.length > 0) {
                var v = myQ.shift();
                for (var n in circles[v]) {
                    if (!circles[v].hasOwnProperty(n)) continue;
                    if (c in visited) continue;
                    visited[n] = 1;
                    myQ.push(n);
                    if (n in rightSet || n in bottomSet) {
                        return 'NO';
                    }
                }
            }
        }

        myQ = [];
        for (var c in leftSet) {
            if (!leftSet.hasOwnProperty(c)) continue;
            if (c in visited) continue;
            myQ.push(c);
            visited[c] = 1;
            while (myQ.length > 0) {
                var v = myQ.shift();
                for (var n in circles[v]) {
                    if (!circles[v].hasOwnProperty(n)) continue;
                    if (c in visited) continue;
                    visited[n] = 1;
                    myQ.push(n);
                    if (n in rightSet || n in bottomSet) {
                        return 'NO';
                    }
                }
            }
        }

        return 'YES';
    }
};

var x = 2;
var y = 3;
var N = 1;
var R = 1;
var xCenters = [2];
var yCenters = [3];
console.log('Input : x=' + x + ', y=' + y + ', N=' + N + ', R=' + R + ', xCenters=[' + xCenters.join(',') + '], yCenters=[' + yCenters.join(',') + ']');
console.log('Output : ' + module.exports.solve(x,y,N,R,xCenters,yCenters));  // NO
