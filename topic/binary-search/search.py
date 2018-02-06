#
# Rotated Sorted Array Search
#
# Suppose a sorted array is rotated at some pivot unknown to you beforehand.
# 
# (i.e., 0 1 2 4 5 6 7  might become 4 5 6 7 0 1 2 ).
# 
# You are given a target value to search. If found in the array, return its index, otherwise return -1.
#
# You may assume no duplicate exists in the array.
#
#   Input : [4 5 6 7 0 1 2] and target = 4
#   Output : 0
#
# Note: Think about the case when there are duplicates. Does your current solution work? How does the time complexity change?
#

class Solution:
    # @param A : tuple of integers
    # @param B : integer
    # @return an integer
    def search(self, A, B):
        start = 0
        end = len(A) - 1

        pivot = self.findPivot(A, start, end)

        if pivot == -1:
            return self.binarySearch(A, start, end, B)

        if A[pivot] == B:
            return pivot
        if A[start] <= B:
            return self.binarySearch(A, start, pivot - 1, B)
        return self.binarySearch(A, pivot + 1, end, B)

    def findPivot(self, arr, lo, hi):
        if hi < lo:
            return -1
        if hi == lo:
            return lo
        mid = int((lo + hi) / 2)
        if mid < hi and arr[mid] > arr[mid + 1]:
            return mid
        if mid > lo and arr[mid] < arr[mid - 1]:
            return mid - 1
        if arr[lo] >= arr[mid]:
            return self.findPivot(arr, lo, mid - 1)
        return self.findPivot(arr, mid + 1, hi)

    def binarySearch(self, arr, lo, hi, key):
        if hi < lo:
            return -1
        mid = int((lo + hi) / 2)
        if key == arr[mid]:
            return mid
        if key > arr[mid]:
            return self.binarySearch(arr, mid + 1, hi, key)
        return self.binarySearch(arr, lo, mid - 1, key)

if __name__ == '__main__':
    arr = [4, 5, 6, 7, 0, 1, 2]
    target = 4
    print 'Input : [' + ' '.join(str(x) for x in arr) + '], target=' + str(target)
    print 'Output : ' + str(Solution().search(arr, target))  # 0

    arr = [ 101, 103, 106, 109, 158, 164, 182, 187, 202, 205, 2, 3, 32, 57, 69, 74, 81, 99, 100 ]
    target = 202
    print 'Input : [' + ' '.join(str(x) for x in arr) + '], target=' + str(target)
    print 'Output : ' + str(Solution().search(arr, target))  # 8
