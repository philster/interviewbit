#
# Number of 1 Bits
# 
# Write a function that takes an unsigned integer and returns the number of 1 bits it has.
# 
# Example:
#
# The 32-bit integer 11 has binary representation
#
#   00000000000000000000000000001011
#
# so the function should return 3.
# 
# Note that since Java does not have unsigned int, use long for Java
#

class Solution:
    # @param A : integer
    # @return an integer
    def numSetBits(self, A):
        num = A
        result = 0
        while num > 0:
            if num & 1:
                result += 1
            num = num >> 1
        return result

if __name__ == '__main__':
    A = 32
    print 'Input: ' + str(A)
    print 'Return: ' + str(Solution().numSetBits(A))  # 3
