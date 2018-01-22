/**
 * Justified Text
 * 
 * Given an array of words and a length L, format the text such that each line has exactly L characters and is fully (left and right) justified.
 * You should pack your words in a greedy approach; that is, pack as many words as you can in each line.
 * 
 * Pad extra spaces ‘ ‘ when necessary so that each line has exactly L characters.
 * Extra spaces between words should be distributed as evenly as possible.
 * If the number of spaces on a line do not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right.
 * For the last line of text, it should be left justified and no extra space is inserted between words.
 * 
 * Your program should return a list of strings, where each string represents a single line.
 * 
 * Example:
 *   words: ["This", "is", "an", "example", "of", "text", "justification."]
 *   L: 16.
 * Return the formatted lines as:
 *   [
 *      "This    is    an",
 *      "example  of text",
 *      "justification.  "
 *   ]
 * 
 * Note: Each word is guaranteed not to exceed L in length.
 */

module.exports = { 
    //param A : array of strings
    //param B : integer
    //return a array of strings
    fullJustify : function(A, B){
        var output = [];
        var line = [];
        
        var i = 0;
        while (i < A.length) {
            var word = A[i];
            if (line.join(' ').length + word.length + 1 > B) {
                // flush line
                var num_spaces = Math.floor((B - line.join('').length) / (line.length - 1));
                var num_extra_spaces = (B - line.join('').length) % (line.length - 1);
                var str = line[0];
                for (var j = 1; j < line.length; j++) {
                    for (var k = 0; k < num_spaces; k++) {
                        str += ' ';
                    }
                    if (num_extra_spaces > 0) {
                        str += ' ';
                        num_extra_spaces--;
                    }
                    str += line[j];
                }
                // pad trailing spaces, for single-word line
                for (var t = str.length; t < B; t++) {
                    str += ' ';
                }
                output.push(str);
                line = [];
            }
            line.push(word);
            i++;
        }
        // flush last line
        if (line.length > 0) {
            var str = line.join(' ');
            // pad trailing spaces
            for (var t = str.length; t < B; t++) {
                str += ' ';
            }
            output.push(str);
        }
        return output;
    }
};

function printArray(arr){
    return arr.reduce(function (all, item) {
        return all + '"' + item + '"' + '\n';
    }, '');
}

var words1 = ["This", "is", "an", "example", "of", "text", "justification."];
var len1 = 16;
console.log('Words: [' + words1 + ']');
console.log('L: ' + len1);
console.log('Output:\n' + printArray(module.exports.fullJustify(words1, len1)));

var words2 = [ "am", "fasgoprn", "lvqsrjylg", "rzuslwan", "xlaui", "tnzegzuzn", "kuiwdc", "fofjkkkm", "ssqjig", "tcmejefj", "uixgzm", "lyuxeaxsg", "iqiyip", "msv", "uurcazjc", "earsrvrq", "qlq", "lxrtzkjpg", "jkxymjus", "mvornwza", "zty", "q", "nsecqphjy" ];
var len2 = 14;
console.log('Words: [' + words2 + ']');
console.log('L: ' + len2);
console.log('Output:\n' + printArray(module.exports.fullJustify(words2, len2)));
