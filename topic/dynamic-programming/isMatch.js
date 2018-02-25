/**
 * Regular Expression Match
 * 
 * Implement wildcard pattern matching with support for '?' and '*'.
 *   '?' : Matches any single character.
 *   '*' : Matches any sequence of characters (including the empty sequence).
 * 
 * The matching should cover the entire input string (not partial).
 * 
 * The function prototype should be:
 * 
 *   int isMatch(const char *s, const char *p)
 * 
 * Examples :
 * 
 *   isMatch("aa","a") → 0
 *   isMatch("aa","aa") → 1
 *   isMatch("aaa","aa") → 0
 *   isMatch("aa", "*") → 1
 *   isMatch("aa", "a*") → 1
 *   isMatch("ab", "?*") → 1
 *   isMatch("aab", "c*a*b") → 0
 * 
 * Return 1/0 for this problem.
 */

module.exports = { 
    //param A : string
    //param B : string
    //return an integer
    isMatch : function(A, B){
        var aLen = A.length;
        var bLen = B.length;
        if (aLen === 0 || bLen === 0) {
            return 0;
        }
        var lookup = [];
        for (var i = 0; i <= aLen; i++) {
            lookup.push(i === 0);
        }
        for (var i = 0; i < bLen; i++) {
            if (B.charAt(i) === '*') {
                for (var j = 1; j <= aLen; j++) {
                    lookup[j] = lookup[j] || lookup[j - 1];
                }
            } else {
                for (var j = aLen - 1; j >= 0; j--) {
                    lookup[j + 1] = lookup[j] && (B.charAt(i) === '?' || A.charAt(j) === B.charAt(i));
                }
            }
            lookup[0] = lookup[0] && B.charAt(i) === '*';
        }
        return lookup[lookup.length - 1] ? 1 : 0;
    }
};

console.log('isMatch("aa","a") → ' + module.exports.isMatch("aa","a"));  // 0
console.log('isMatch("aa","aa") → ' + module.exports.isMatch("aa","aa"));  // 1
console.log('isMatch("aaa","aa") → ' + module.exports.isMatch("aaa","aa"));  // 0
console.log('isMatch("aa", "*") → ' + module.exports.isMatch("aa", "*"));  // 1
console.log('isMatch("aa", "a*") → ' + module.exports.isMatch("aa", "a*"));  // 1
console.log('isMatch("ab", "?*") → ' + module.exports.isMatch("ab", "?*"));  // 1
console.log('isMatch("aab", "c*a*b") → ' + module.exports.isMatch("aab", "c*a*b"));  // 0
