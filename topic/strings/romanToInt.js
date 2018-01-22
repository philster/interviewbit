/**
 * Roman To Integer
 * 
 * Given a roman numeral, convert it to an integer.
 * 
 * Input is guaranteed to be within the range from 1 to 3999.
 * 
 * Read more details about roman numerals at Roman Numeric System (https://en.wikipedia.org/wiki/Roman_numerals#Roman_numeric_system)
 * 
 * Example:
 *   Input : "XIV"
 *   Return : 14
 * 
 *   Input : "XX"
 *   Return : 20
 */

module.exports = { 
    //param A : string
    //return an integer
    romanToInt : function(A){
        var output = 0;
        var i = 0;
        var ch, next;
        while (i < A.length) {
            ch = A.charAt(i);
            if (ch === 'I') {
                // get next char
                next = (i + 1) < A.length && A.charAt(i + 1);
                if (next === 'V') {
                    output += 4;
                    i++;
                } else if (next === 'X') {
                    output += 9;
                    i++;
                } else {
                    output += 1;
                }
            } else if (ch === 'V') {
                output += 5;
            } else if (ch === 'X') {
                next = (i + 1) < A.length && A.charAt(i + 1);
                if (next === 'L') {
                    output += 40;
                    i++;
                } else if (next === 'C') {
                    output += 90;
                    i++;
                } else {
                    output += 10;
                }
            } else if (ch === 'L') {
                output += 50;
            } else if (ch === 'C') {
                next = (i + 1) < A.length && A.charAt(i + 1);
                if (next === 'D') {
                    output += 400;
                    i++;
                } else if (next === 'M') {
                    output += 900;
                    i++;
                } else {
                    output += 100;
                }
            } else if (ch === 'D') {
                output += 500;
            } else if (ch === 'M') {
                output += 1000;
            }
            i++;
        }
        return output;
    }
};
   
var s1 = "XIV";
console.log('Input:  ' + s1);
console.log('Output: ' + module.exports.romanToInt(s1));

var s2 = "XX";
console.log('Input:  ' + s2);
console.log('Output: ' + module.exports.romanToInt(s2));
