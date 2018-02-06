#
# Implement Power Function
#
# Implement pow(x, n) % d.
#
# In other words, given x, n and d,
#
# find (x^n % d)
#
# Note that remainders on division cannot be negative.
# In other words, make sure the answer you return is non negative.
#
#  Input : x = 2, n = 3, d = 3
#  Output : 2
#
#  2^3 % 3 = 8 % 3 = 2.
#

class Solution:
    # @param x : integer
    # @param n : integer
    # @param d : integer
    # @return an integer
    def pow(self, x, n, d):
        if x == 0 or x == 1:
            return x
        elif n == 0:
            return 1
            
        result = 1
        while n > 0:
            if n % 2 == 1:
                result = (result * x) % d
            n = n / 2
            x = (x * x) % d

        return result % d

if __name__ == '__main__':
    x = 2
    n = 3
    d = 3
    print 'Input: x=' + str(x) + ', n=' + str(n) + ', d=' + str(d)
    print 'Return: ' + str(Solution().pow(x, n, d))  # 2

    x = 71045970
    n = 41535484
    d = 64735492
    print 'Input: x=' + str(x) + ', n=' + str(n) + ', d=' + str(d)
    print 'Return: ' + str(Solution().pow(x, n, d))  # 20805472
