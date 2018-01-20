#
# Set Matrix Zeros
#
# Given an m x n matrix of 0s and 1s, if an element is 0, set its entire row and column to 0.
# Do it in place.
#
# Example
# Given array A as
#   1 0 1
#   1 1 1 
#   1 1 1
# On returning, the array A should be :
#   0 0 0
#   1 0 1 
#   1 0 1
#
# Note that this will be evaluated on the extra memory used. Try to minimize the space and time complexity.

class Solution:
    # @param A : list of list of integers
    # @return the same list modified
    def setZeroes(self, A):
        rows_to_mark = set()
        cols_to_mark = set()
        for i,row in enumerate(A):
            for j,val in enumerate(row):
                if val == 0:
                    rows_to_mark.add(i)
                    cols_to_mark.add(j)
        for i,row in enumerate(A):
            if i in rows_to_mark:
                A[i] = [0] * len(row)
            else:
                for j in cols_to_mark:
                    A[i][j] = 0
        return A

def printArray(arr):
    s = [[str(e) for e in row] for row in arr]
    lens = [max(map(len, col)) for col in zip(*s)]
    fmt = ' '.join('{{:{}}}'.format(x) for x in lens)
    table = [fmt.format(*row) for row in s]
    return '\n'.join(table)

if __name__ == '__main__':
    A = [[1,0,1], [1,1,1], [1,1,1]]
    print 'Input:\n' + printArray(A)
    print 'Output:\n' + printArray(Solution().setZeroes(A))
