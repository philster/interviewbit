/**
 * Longest Substring Without Repeat
 * 
 * Given a string, 
 * find the length of the longest substring without repeating characters.
 * 
 * Example:
 * 
 * The longest substring without repeating letters for "abcabcbb" is "abc", which the length is 3.
 * 
 * For "bbbbb" the longest substring is "b", with the length of 1.
 */

module.exports = { 
    //param A : string
    //return an integer
    lengthOfLongestSubstring : function(A){
        var maxlen = 0;
        var hashmap = {};
        var left = 0;
        var right = 0;
        // optional: keep track of the substring
        // var substr = '';
  
        while (right < A.length) {
            var ch = A.charAt(right);
            if (hashmap[ch] === undefined) {
                // add character to map
                hashmap[ch] = 1;
                // increase the window
                right++;
                // optional: derive substring
                // if (right - left > maxlen) {
                //     substr = s.substring(left, right);
                // }
                // update maxlen
                maxlen = Math.max(maxlen, right - left);
            } else {
                // remove duplicate character from the map
                delete hashmap[A.charAt(left)];
                // shrink window
                left++;
            }
        }

        return maxlen;
    }
};

var str1 = 'abcabcbb';
console.log('Input: ' + str1);
console.log('Output: ' + module.exports.lengthOfLongestSubstring(str1));  // 3 ('abc')

var str2 = 'bbbbb';
console.log('Input: ' + str2);
console.log('Output: ' + module.exports.lengthOfLongestSubstring(str2));  // 1 ('b')
