/**
 * Ways to Decode
 * 
 * A message containing letters from A-Z is being encoded to numbers using the following mapping:
 * 
 *  'A' -> 1
 *  'B' -> 2
 *  ...
 *  'Z' -> 26
 * 
 * Given an encoded message containing digits, determine the total number of ways to decode it.
 * 
 * Example :
 * 
 * Given encoded message "12", it could be decoded as "AB" (1 2) or "L" (12).
 * 
 * The number of ways decoding "12" is 2.
 */

module.exports = { 
    //param A : string
    //return an integer
    numDecodings : function(A){
        if (A.charAt(0) === '0') {
            return 0;
        }
        var count = [1,1];
        for (var i = 2; i <= A.length; i++) {
            count.push(0);
            if (A.charAt(i - 1) > '0') {
                count[i] = count[i - 1];
            }
            if (A.charAt(i - 2) === '1' || (A.charAt(i - 2) === '2' && A.charAt(i - 1) < '7')) {
                count[i] += count[i - 2];
            }
        }
        return count[A.length];
    }
};

var msg = '12';
console.log('Input : "' + msg + '"');
console.log('Output : ' + module.exports.numDecodings(msg));  // 2

var msg = '0';
console.log('Input : "' + msg + '"');
console.log('Output : ' + module.exports.numDecodings(msg));  // 0

var msg = '0799733';
console.log('Input : "' + msg + '"');
console.log('Output : ' + module.exports.numDecodings(msg));  // 0

var msg = '10';
console.log('Input : "' + msg + '"');
console.log('Output : ' + module.exports.numDecodings(msg));  // 1
