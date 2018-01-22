#
# Find Permutation
#
# Given a positive integer n and a string s consisting only of letters D or I, you have to find any permutation of first n positive integer that satisfy the given input string.
#
# D means the next number is smaller, while I means the next number is greater.
#
# Notes
# * Length of given string s will always equal to n - 1
# * Your solution should run in linear time and space.
#
# Example:
#   Input 1:
#   n = 3
#   s = ID
#   Return: [1, 3, 2]

class Solution:
    # @param A : string
    # @param B : integer
    # @return a list of integers
    def findPerm(self, A, B):
        min = 1
        max = B
        list = []
        for num in range(B-1):
            if A[num] == 'D':
                list.append(max)
                max -= 1
            elif A[num] == 'I':
                list.append(min)
                min += 1
        if min == max:
            list.append(min)
        return list

if __name__ == '__main__':
    n = 3
    s = 'ID'
    print 'n = ' + str(n)
    print 's = ' + s
    print 'Return:\n' + ','.join(str(x) for x in Solution().findPerm(s,n))
