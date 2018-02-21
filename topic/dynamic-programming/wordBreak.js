/**
 * Word Break
 * 
 * Given a string s and a dictionary of words dict, determine if s can be segmented into a space-separated sequence of one or more dictionary words.
 * 
 * For example, given
 * 
 *  s = "myinterviewtrainer",
 *  dict = ["trainer", "my", "interview"].
 * 
 * Return 1 ( corresponding to true ) because "myinterviewtrainer" can be segmented as "my interview trainer".
 * 
 * Return 0 / 1 ( 0 for false, 1 for true ) for this problem
 */

module.exports = { 
    //param A : string
    //param B : array of strings
    //return an integer
    wordBreak : function(A, B){
        if (A.length === 0) {
            return 1;
        }
        var wordDict = {};
        B.forEach(function (word) {
            // add word to dictionary
            wordDict[word] = 1;
        });
        var pos = [];
        for (var i = 0; i < A.length; i++) {
            pos.push(0);
        }
        for (var end = 0; end < A.length; end++) {
            for (var begin = end; begin >= 0; begin--) {
                if ((!begin || pos[begin - 1]) && wordDict[A.substring(begin, end + 1)] === 1) {
                    pos[end] = 1;
                    break;
                }
            }
        }
        return pos[A.length - 1];
    }
};

var s = "myinterviewtrainer";
var dct = ["trainer", "my", "interview"];
console.log('Input : s = "' + s + '", dict = ["' + dct.join('", "') + '"]');
console.log('Output : ' + module.exports.wordBreak(s, dct));  // 1

var s = "a";
var dct = [ "aaa" ];
console.log('Input : s = "' + s + '", dict = ["' + dct.join('", "') + '"]');
console.log('Output : ' + module.exports.wordBreak(s, dct));  // 0

var s = "aababaaabaaababbbabbbaabababaaabbaabaabbabbaabbbbbbbabbbbabaaabaabaabbaaaaabbabaababbbabbbbbbaaaabbbaaaaaabaaaaaabbbbbbbabbbbbbbbaaabaaababbbaaaabaaaabaaaabbabbbabaabbabbabaaaabbabaaabbabbabbbabbabbaabbbabaabaabbbbbbbaabababbbbbbababbbaabaabbbabababbbbbaaaababbbabaaabaabbaababbbabbbbbaabbaaaaabbbbbaaaaaaaaaaaabbabbbabbaaabaaaaaabaabababaabaaaabaaabbbbbaaabbaabbababbabbbbaabaabaabaaaabbbaababbaabbbbbabaaababbabbbabbbbbabaababbbbbaabbbbabaabbabbababaaaabbbbabbbaaaabaabbbbaaaaababaaabaabbabaababbabbbababaaababbaabbbaaabaabbbaabbbbbbaaabaabbbbbabaaababaaabbbbbbaaaabababaaabbbbbbaabbaaabbbabaabbabababbabaabbaaabbaaabbaabbbbbababbaabbabbb";
var dct = [ "baaaaaabba", "babbaababb", "abb", "bababaabab", "baaa", "ab", "ab", "bb", "abbaaaa", "bbababa", "bbbbbbab", "abbaaabba", "aaaabbab", "abaaab", "babab", "aabaaab", "aabaabbabb", "aa", "bb", "ab", "a", "a", "bbaaab", "aba", "ba", "bbabbaabab", "aaabbbbbb", "abbaaaabbb", "aabaabbaa", "bbba", "abbabbba", "abbbbabb", "bbaaba", "abbbbaab", "bba", "bbbbaabba", "ababbabaab", "baabba", "ababbaabb", "bbaab", "a", "bbba", "aaaa", "aaabbbabba", "bab", "baaaabaa", "ab", "aaabbaab", "bab", "aa", "ababababab", "aabbaaaba", "abbaaba", "bbaabaa" ];
console.log('Input : s = "' + s + '", dict = ["' + dct.join('", "') + '"]');
console.log('Output : ' + module.exports.wordBreak(s, dct));  // 1

var s = "abababababaaaabaabbbabbbabbababbb";
var dct = [ "abbbabaa", "baabaaaab", "babaaaaaba", "b", "b", "bbaaaab", "aaabbb", "aabbbbbab", "abbb", "abaa", "aaababaab", "aabbabaa", "bab", "bbbbaabbb" ];
console.log('Input : s = "' + s + '", dict = ["' + dct.join('", "') + '"]');
console.log('Output : ' + module.exports.wordBreak(s, dct));  // 0
