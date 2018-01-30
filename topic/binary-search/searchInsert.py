#
# Sorted Insert Position
# 
# Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
#
# You may assume no duplicates in the array.
#
# Here are few examples.
#
#   [1,3,5,6], 5 -> 2
#   [1,3,5,6], 2 -> 1
#   [1,3,5,6], 7 -> 4
#   [1,3,5,6], 0 -> 0
#

class Solution:
    # @param A : list of integers
    # @param B : integer
    # @return an integer
    def searchInsert(self, A, B):
        lo = 0
        hi = len(A) - 1
        while lo <= hi:
            mid = (lo + hi) / 2
            if B == A[mid]:
                return mid
            if B < A[mid]:
                hi = mid - 1
                result = mid
            else:
                lo = mid + 1
        if lo > hi:
            return lo
        return result                

if __name__ == '__main__':
    A = [1,3,5,6]
    B = 7
    print 'Input: [' + ','.join(str(x) for x in A) + '], ' + str(B)
    print 'Return: ' + str(Solution().searchInsert(A, B))  # 4
