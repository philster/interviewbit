/**
 * Palindrome String
 * 
 * Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
 * 
 * Example:
 *   "A man, a plan, a canal: Panama" is a palindrome.
 *   "race a car" is not a palindrome.
 * 
 * Return 0 / 1 ( 0 for false, 1 for true ) for this problem
 */

module.exports = { 
    //param A : string
    //return an integer
    isPalindrome : function(A){
        if (A.length < 2) {
            return 1;
        }
        var i = 0;
        var j = A.length - 1;
        var alphanum = /^[a-z0-9]$/i;
        while (i < j) {
            var ii = A.charAt(i).toLowerCase();
            var jj = A.charAt(j).toLowerCase();
            if (!alphanum.test(ii)) {
                i++;
            } else if (!alphanum.test(jj)) {
                j--;
            } else if (ii !== jj) {
                return 0;
            } else {
                i++;
                j--;
            }
        }
        return 1;
    }
};

var s1 = "A man, a plan, a canal: Panama";
console.log('Input:  ' + s1);
console.log('Output: ' + module.exports.isPalindrome(s1));

var s2 = "race a car";
console.log('Input:  ' + s2);
console.log('Output: ' + module.exports.isPalindrome(s2));
