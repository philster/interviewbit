/**
 * Substring Concatenation
 * 
 * You are given a string, S, and a list of words, L, that are all of the same length.
 * 
 * Find all starting indices of substring(s) in S that is a concatenation of each word in L exactly once and without any intervening characters.
 * 
 * Example:
 * 
 *   S: "barfoothefoobarman"
 *   L: ["foo", "bar"]
 * 
 * You should return the indices: [0,9].
 * (order does not matter).
 */

module.exports = { 
    //param A : string
    //param B : array of strings
    //return a array of integers
	findSubstring : function(A, B){
	    var n = B.length;  // number of words in list
        var x = B[0].length;  // word length
        var wordhash = B.reduce(function (list, word) {
            if (list[word] === undefined) {
                list[word] = 0;
            }
            list[word]++;
            return list;
        }, {});
        var result = [];

        var left = 0;
        while (left + x * n - 1 < A.length) {
            // check segment
            var s_left = left;
            var match = true;
            var segmenthash = {};
            while (match && s_left < left + x * n) {
                var substr = A.substring(s_left, s_left + x);
                if (wordhash[substr] === undefined) {
                    // substring doesn't match words in list
                    match = false;
                } else if (segmenthash[substr] !== undefined && segmenthash[substr] >= wordhash[substr]) {
                    // word already encountered in segment
                    match = false;
                } else {
                    // add index to segment map
                    if (segmenthash[substr] === undefined) {
                        segmenthash[substr] = 0;
                    }
                    segmenthash[substr]++;
                    // check next segment substring
                    s_left += x;
                }
            }
            // console.log('left='+left+', s_left='+s_left+', substr='+substr+', match? '+match+', segmenthash='+Object.keys(segmenthash).join(','));
            if (match) {
                result.push(left);
            }

            left++;
        }
        
        return result;
	}
};

// time complexity: O(N – K) * K 
// N : length of string S.
// K : total length of list L if all the words are concatenated. If L : ["ab", "cd"] then K = 4.

var S = 'barfoothefoobarman';
var L = ['foo', 'bar'];
console.log('S: "' + S + '"');
console.log('L: ["' + L.join('", "') + '"]');
console.log('Output: [' + module.exports.findSubstring(S, L).join(', ') + ']');  // [0, 9]

var S = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
var L = [ "aaa", "aaa", "aaa", "aaa", "aaa" ];
console.log('S: "' + S + '"');
console.log('L: ["' + L.join('", "') + '"]');
console.log('Output: [' + module.exports.findSubstring(S, L).join(', ') + ']');  // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98]

var S = "abbaccaaabcabbbccbabbccabbacabcacbbaabbbbbaaabaccaacbccabcbababbbabccabacbbcabbaacaccccbaabcabaabaaaabcaabcacabaa";
var L = [ "cac", "aaa", "aba", "aab", "abc" ];
console.log('S: "' + S + '"');
console.log('L: ["' + L.join('", "') + '"]');
console.log('Output: [' + module.exports.findSubstring(S, L).join(', ') + ']');  // [97]
