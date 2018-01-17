#
# Reverse the String
#
# Given an input string, reverse the string word by word.
#
# Example:
#   Given s = "the sky is blue",
#   return "blue is sky the". 
#
#  "
#    * A sequence of non-space characters constitutes a word.
#    * Your reversed string should not contain leading or trailing spaces, even if it is present in the input string.
#    * If there are multiple spaces between words, reduce them to a single space in the reversed string.
#  "

class Solution:
    # @param A : string
    # @return string
    def reverseWords(self, A):
        list = []
        word = ''
        for c in A:
            if c != ' ':
                word += c
            elif word != '':
                list.insert(0, word)
                word = ''
        if word != '':
            list.insert(0, word)
        return ' '.join(list)
