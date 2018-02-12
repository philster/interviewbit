#
# Sudoku
#
# Write a program to solve a Sudoku puzzle by filling the empty cells.
# Empty cells are indicated by the character '.' 
# You may assume that there will be only one unique solution.
#
# Image: http://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Sudoku-by-L2G-20050714.svg/250px-Sudoku-by-L2G-20050714.svg.png
#
# A sudoku puzzle,
#
# Image: http://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Sudoku-by-L2G-20050714_solution.svg/250px-Sudoku-by-L2G-20050714_solution.svg.png
#
# and its solution numbers marked in red.
#
# Example :
#
# For the above given diagrams, the corresponding input to your program will be
#
#   [[53..7....], [6..195...], [.98....6.], [8...6...3], [4..8.3..1], [7...2...6], [.6....28.], [...419..5], [....8..79]]
#
# and we would expect your program to modify the above array of array of characters to
#
#   [[534678912], [672195348], [198342567], [859761423], [426853791], [713924856], [961537284], [287419635], [345286179]]
#

class Solution:
    # @param A : list of list of chars
    # @return nothing
    def solveSudoku(self, A):
        loc = self.findEmpty(A)
        # if no unassigned location, we are done
        if loc is None:
            return True
        (row, col) = loc
        # digits 1 to 9
        for digit in range(1, 10):
            # check if digit can be assigned to cell on row,col
            if self.checkAllowed(A, row, col, str(digit)):
                # assign digit
                A[row][col] = str(digit)
                # return if success
                if self.solveSudoku(A):
                    return True
                # else undo
                print '>> row='+str(row)+', col='+str(col)
                print '\n' + '\n'.join(' '.join(x) for x in A)
                A[row][col] = '.'
                print '\n' + '\n'.join(' '.join(x) for x in A)
                return True
        # do backtracking
        return False
    def findEmpty(self, arr):
        for row in range(9):
            for col in range(9):
                if arr[row][col] == '.':
                    return [row, col]
        return None
    def checkRowAllowed(self, arr, row, val):
        for j in range(9):
            if arr[row][j] == val:
                return False
        return True
    def checkColAllowed(self, arr, col, val):
        for i in range(9):
            if arr[i][col] == val:
                return False
        return True
    def check3x3Allowed(self, arr, row, col, val):
        for i in range(3):
            for j in range(3):
                if arr[i+row-row%3][j+col-col%3] == val:
                    return False
        return True
    def checkAllowed(self, arr, row, col, val):
        return self.checkRowAllowed(arr, row, val) and self.checkColAllowed(arr, col, val) and self.check3x3Allowed(arr, row, col, val)

def printGrid(A):
    return '\n'.join(' '.join(x) for x in A)

if __name__ == '__main__':
    # Input:  [[53..7....], [6..195...], [.98....6.], [8...6...3], [4..8.3..1], [7...2...6], [.6....28.], [...419..5], [....8..79]]
    board= [['5', '3', '.', '.', '7', '.', '.', '.', '.'],
            ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
            ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
            ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
            ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
            ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
            ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
            ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
            ['.', '.', '.', '.', '8', '.', '.', '7', '9']]
    print 'Input : \n' + printGrid(board)
    print 'Output : \n' + (printGrid(board) if Solution().solveSudoku(board) else 'No solution')  # [['534678912'], ['672195348'], ['198342567'], ['859761423'], ['426853791'], ['713924856'], ['961537284'], ['287419635'], ['345286179']]
