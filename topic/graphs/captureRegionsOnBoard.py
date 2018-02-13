#
# Capture Regions on Board
#
# Given a 2D board containing 'X' and 'O', capture all regions surrounded by 'X'.
#
# A region is captured by flipping all 'O's into 'X's in that surrounded region.
#
# For example,
#
#   X X X X
#   X O O X
#   X X O X
#   X O X X
#
# After running your function, the board should be:
#
#   X X X X
#   X X X X
#   X X X X
#   X O X X
#

class Solution:
    # @param A : list of list of chars
    def solve(self, A):
        if A is None or len(A) == 0:
	        return None

        M = len(A)
        N = len(A[0])

        for j in range(N):
            if A[0][j] == 'O':
                self.bfs(A, 0, j)

        for i in range(M):
            if A[i][N-1] == 'O':
                self.bfs(A, i, N-1)

        for j in range(N):
            if A[M-1][j] == 'O':
                self.bfs(A, M-1, j)

        for i in range(M):
            if A[i][0] == 'O':
                self.bfs(A, i, 0)

        for i in range(M):
            for j in range(N):
                if A[i][j] == 'O':
                    A[i][j] = 'X'
                elif A[i][j] == '#':
                    A[i][j] = 'O'

        return A

    def bfs(self, A, row, col):
        M = len(A)
        N = len(A[0])

        ind = row*N + col
        queue = []
        queue.append(ind)
        A[row][col] = '#'

        while len(queue) > 0:
            ind = queue.pop(0)
            r = ind / N
            c = ind % N

            if r > 0 and A[r-1][c] == 'O':
                A[r-1][c] = '#'
                queue.append((r-1)*N + c)

            if c < N-1 and A[r][c+1] == 'O':
                A[r][c+1] = '#'
                queue.append(r*N + (c+1))

            if r < M-1 and A[r+1][c] == 'O':
                A[r+1][c] = '#'
                queue.append((r+1)*N + c)

            if c > 0 and A[r][c-1] == 'O':
                A[r][c-1] = '#'
                queue.append(r*N + (c-1))

if __name__ == '__main__':
    board= [['X', 'X', 'X', 'X'],
            ['X', 'O', 'O', 'X'],
            ['X', 'X', 'O', 'X'],
            ['X', 'O', 'X', 'X']]
    print 'Input: \n' + '\n'.join(' '.join(x) for x in board)
    print 'Output: \n' + '\n'.join(' '.join(x) for x in Solution().solve(board))
