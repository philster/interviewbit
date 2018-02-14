/**
 * Smallest sequence with given Primes
 * Problem Setter: RAMBO_tejasv 
 * Problem Tester: aayushkapadia
 * 
 * Given three prime number(p1, p2, p3) and an integer k. Find the first(smallest) k integers which have only p1, p2, p3 or a combination of them as their prime factors.
 * 
 * Example:
 * 
 * Input :
 * Prime numbers : [2,3,5]
 * k : 5
 * 
 * If primes are given as p1=2, p2=3 and p3=5 and k is given as 5, then the sequence of first 5 integers will be:
 * 
 * Output :
 * {2,3,4,5,6}
 * 
 * Explanation :
 * 4 = p1 * p1 ( 2 * 2 )
 * 6 = p1 * p2 ( 2 * 3 )
 * 
 * Note: The sequence should be sorted in ascending order
 */

module.exports = { 
    //param A : integer
    //param B : integer
    //param C : integer
    //param D : integer
    //return a array of integers
    solve : function(A, B, C, D){
        var baseList = [A, B, C];
        var usedValues = {};
        var intList = [];
        var results = [];
        var count = 0;

        for (var j = 0; j < baseList.length; j++) {
            if (!(baseList[j] in usedValues)) {
                usedValues[baseList[j]] = 1;
                intList.push(baseList[j]);
            }
        }

        baseList = [].concat(intList);

        while (count < D) {
            var minVal = Math.min.apply(null, baseList);
            var minIdx = baseList.indexOf(minVal);
            
            results.push(minVal);
            baseList.splice(minIdx, 1);

            for (var i = 0; i < intList.length; i++) {
                var newVal = minVal * intList[i];

                if (!(newVal in usedValues)) {
                    baseList.push(minVal * intList[i]);
                    usedValues[newVal] = 1;
                }
            }
            
            count++;
        }

        return results;
    }
};

var p1 = 2;
var p2 = 2;
var p3 = 5;
var k = 5;
console.log('Input : \nPrime numbers : [' + p1 + ',' + p2 + ',' + p3 + ']\nk : ' + k);
console.log('Output : {' + module.exports.solve(p1,p2,p3,k).join(',') + '}');  // {2,3,4,5,6}
