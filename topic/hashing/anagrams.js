/**
 * Anagrams
 * 
 * Given an array of strings, return all groups of strings that are anagrams. Represent a group by a list of integers representing the index in the original list. Look at the sample case for clarification.
 * 
 * Anagram : a word, phrase, or name formed by rearranging the letters of another, such as 'spar', formed from 'rasp'
 * 
 * Note: All inputs will be in lower-case.
 * 
 * Example:
 *   Input : cat dog god tca
 *   Output : [[1, 4], [2, 3]]
 *
 * cat and tca are anagrams which correspond to index 1 and 4. 
 * dog and god are another set of anagrams which correspond to index 2 and 3.
 * The indices are 1 based ( the first element has index 1 instead of index 0).
 * 
 * Ordering of the result : You should not change the relative ordering of the words / phrases within the group. Within a group containing A[i] and A[j], A[i] comes before A[j] if i < j.
 */

module.exports = { 
    //param A : array of strings
    //return a array of array of integers
    anagrams : function(A){
        var lookup = {};
        for (var i=0; i<A.length; i++) {
            var curValue = A[i];
            // generate hash string
            var hash = {};
            for (var j=0; j<curValue.length; j++) {
                var ch = curValue.charAt(j);
                if (hash[ch] === undefined) {
                    hash[ch] = 1;
                } else {
                    hash[ch] += 1;
                }
            }
            var hashstr = Object.keys(hash)
                .sort()
                .reduce(function (s, k) {
                    return s + k + hash[k];
                }, '');
            console.log('i=' + i + ', curValue=' + curValue +', hashstr=' + hashstr +', lookup[hashstr]=' + lookup[hashstr]);
            // validate hash string against lookup
            if (lookup[hashstr] === undefined) {
                lookup[hashstr] = [i + 1];
            } else {  // match
                lookup[hashstr].push(i + 1);
            }
        }
        return Object.keys(lookup).map(function (key) {
            return lookup[key];
        });
    }
};
   
function print2DArray(arr) {
    return '[' + arr.map(function (a) {
        return '[' + a.join(', ') + ']';
    }).join(', ') + ']';
}

var arr1 = ['cat', 'dog', 'god', 'tca'];
console.log('Input : ' + arr1.join(' '));
console.log('Output : ' + print2DArray(module.exports.anagrams(arr1)));  // [[1, 4], [2, 3]]

var arr2 = [ "abbbaabbbabbbbabababbbbbbbaabaaabbaaababbabbabbaababbbaaabbabaabbaabbabbbbbababbbababbbbaabababba", "abaaabbbabaaabbbbabaabbabaaaababbbbabbbaaaabaababbbbaaaabbbaaaabaabbaaabbaabaaabbabbaaaababbabbaa", "babbabbaaabbbbabaaaabaabaabbbabaabaaabbbbbbabbabababbbabaabaabbaabaabaabbaabbbabaabbbabaaaabbbbab", "bbbabaaabaaaaabaabaaaaaaabbabaaaabbababbabbabbaabbabaaabaabbbabbaabaabaabaaaabbabbabaaababbaababb", "abbbbbbbbbbbbabaabbbbabababaabaabbbababbabbabaaaabaabbabbaaabbaaaabbaabbbbbaaaabaaaaababababaabab", "aabbbbaaabbaabbbbabbbbbaabbababbbbababbbabaabbbbbbababaaaabbbabaabbbbabbbababbbaaabbabaaaabaaaaba", "abbaaababbbabbbbabababbbababbbaaaaabbbbbbaaaabbaaabbbbbbabbabbabbaabbbbaabaabbababbbaabbbaababbaa", "aabaaabaaaaaabbbbaabbabaaaabbaababaaabbabbaaaaababaaabaabbbabbababaabababbaabaababbaabbabbbaaabbb" ];
console.log('Input : ' + arr2.join(' '));
console.log('Output : ' + print2DArray(module.exports.anagrams(arr2)));  // [ [1 ], [2 ], [3, 5 ], [4 ], [6 ], [7 ], [8 ] ]

var arr3 = [ "caat", "taac", "dog", "god", "acta" ];
console.log('Input : ' + arr3.join(' '));
console.log('Output : ' + print2DArray(module.exports.anagrams(arr3)));  // [ [1, 2, 5 ], [3, 4 ] ]
