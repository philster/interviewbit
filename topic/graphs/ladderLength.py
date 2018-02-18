#
# Word Ladder I
#
# Given two words (start and end), and a dictionary, find the length of shortest transformation sequence from start to end, such that:
# - You must change exactly one character in every transformation
# - Each intermediate word must exist in the dictionary
#
# Example :
#
# Given:
#
#    start = "hit"
#    end = "cog"
#    dict = ["hot","dot","dog","lot","log"]
#
# As one shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog", return its length 5.
#
# Note that we account for the length of the transformation path instead of the number of transformation itself.
#
# Note:
# - Return 0 if there is no such transformation sequence.
# - All words have the same length.
# - All words contain only lowercase alphabetic characters.
#

class Solution:
    # @param start : string
    # @param end : string
    # @param dictV : list of strings
    # @return an integer
    def ladderLength(self, start, end, dictV):
        dictV.append(end)
        queue = []
        queue.append([start, 1])
        while queue:
            word, wordLen = queue.pop(0)
            if word == end:
                return wordLen
            for i in range(len(word)):
                for c in 'abcdefghijklmnopqrstuvwxyz':
                    next_word = word[:i] + c + word[i+1:]
                    if next_word in dictV:
                        dictV.remove(next_word)
                        queue.append([next_word, wordLen + 1])
        return 0

if __name__ == '__main__':
    start = "hit"
    end = "cog"
    dictV = ["hot","dot","dog","lot","log"]
    print 'Input: \nstart = ' + start + '\nend = ' + end + '\ndict = ["' + '","'.join(dictV) + '"]'
    print 'Output: ' + str(Solution().ladderLength(start, end, dictV))
