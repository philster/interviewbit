/** 
 * Letter Phone
 * 
 * Given a digit string, return all possible letter combinations that the number could represent.
 * 
 * A mapping of digit to letters (just like on the telephone buttons) is given below.
 * 
 * 
 * The digit 0 maps to 0 itself.
 * The digit 1 maps to 1 itself.
 * 
 * Input: Digit string "23"
 * Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
 * 
 * Make sure the returned strings are lexicographically sorted.
 */

module.exports = { 
    //param A : string
    //return a array of strings
    letterCombinations : function(A){
        if (A.length === 0) {
            return [];
        }
        var digitMap = {
            '0': ['0'],
            '1': ['1'],
            '2': ['a', 'b', 'c'],
            '3': ['d', 'e', 'f'],
            '4': ['g', 'h', 'i'],
            '5': ['j', 'k', 'l'],
            '6': ['m', 'n', 'o'],
            '7': ['p', 'q', 'r', 's'],
            '8': ['t', 'u', 'v'],
            '9': ['w', 'x', 'y', 'z']
        };
        
        var result = [];
        var chars = digitMap[A[0]];
        var suffixes = module.exports.letterCombinations(A.slice(1));
        chars.forEach(function (ch) {
            if (suffixes.length === 0) {
                result.push(ch);
            } else {
                suffixes.forEach(function (suffix){
                    result.push(ch + suffix);
                });
            }
        });
        return result;
    }
};

var S = '23';
console.log('Input : Digit string "' + S + '"');
console.log('Output : ["' + module.exports.letterCombinations(S).join('", "') + '"]');  // ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
