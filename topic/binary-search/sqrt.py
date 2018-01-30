#
# Square Root of Integer
#
# Implement int sqrt(int x).
#
# Compute and return the square root of x.
#
# If x is not a perfect square, return floor(sqrt(x))
#
# Example:
#
#   Input : 11
#   Output : 3
#
# DO NOT USE SQRT FUNCTION FROM STANDARD LIBRARY

class Solution:
    # @param A : integer
    # @return an integer
    def sqrt(self, A):
        if A == 0 or A == 1:
            return A
            
        lo = 1
        hi = A

        while lo <= hi:
            num = (lo + hi) / 2
            
            if num * num == A:
                return num

            if num * num < A:
                lo = num + 1
                result = num
            else:
                hi = num - 1
                
        return result

if __name__ == '__main__':
    A = 11
    print 'Input: ' + str(A)
    print 'Return: ' + str(Solution().sqrt(A))  # 3

    A = 930675566
    print 'Input: ' + str(A)
    print 'Return: ' + str(Solution().sqrt(A))  # 30506
