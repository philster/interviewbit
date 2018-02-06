#
# Flatten Binary Tree to Linked List
#
# Given a binary tree, flatten it to a linked list in-place.
#
# Example:
# Given
#
#          1
#         / \
#        2   5
#       / \   \
#      3   4   6
#
# The flattened tree should look like:
#
#    1
#     \
#      2
#       \
#        3
#         \
#          4
#           \
#            5
#             \
#              6
#
# Note that the left child of all nodes should be NULL.
#

class Solution:
    # @param A : root node of tree
    # @return the root node in the tree
    def flatten(self, A):
        curr = A
        while curr is not None:
            # print 'A.val: ' + str(A.val) + ', curr.val: ' + str(curr.val)
            if curr.left is None and curr.right is None:
                return A
            if curr.left is not None:
                temp = curr.right
                # flatten left and then assign to right
                curr.right = self.flatten(curr.left)
                # remove link to left
                curr.left = None
                # traverse to the leaf node of right
                while curr.right is not None:
                    curr = curr.right
                # attach temp to leaf node of right
                curr.right = temp
            # traverse right
            curr = curr.right
        return A

# Definition for a  binary tree node
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

def printList(tree):
    s = ''
    curr = tree
    while curr is not None:
        s += str(curr.val) + ' -> '
        if curr.left is not None:
            return s + '[LEFT NODE FOUND!]'
        curr = curr.right
    return s + 'NULL'

if __name__ == '__main__':
    #      1
    #     / \
    #    2   5
    #   / \   \
    #  3   4   6
    root = TreeNode(1)
    root.left = TreeNode(2)
    root.right = TreeNode(5)
    root.left.left = TreeNode(3)
    root.left.right = TreeNode(4)
    root.right.right = TreeNode(6)
    print 'Output : ' + printList(Solution().flatten(root))  # 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> NULL

    # input: 127 47 42 52 41 44 50 64 40 -1 43 45 49 51 63 77 -1 -1 -1 -1 -1 46 48 -1 -1 -1 55 -1 75 88 -1 -1 -1 -1 53 58 69 76 81 94 -1 54 56 60 68 73 -1 -1 79 87 92 100 -1 -1 -1 57 59 61 66 -1 72 74 78 80 85 -1 89 93 96 102 -1 -1 -1 -1 -1 62 65 67 71 -1 -1 -1 -1 -1 -1 -1 84 86 -1 90 -1 -1 95 99 101 -1 -1 -1 -1 -1 -1 -1 70 -1 83 -1 -1 -1 -1 91 -1 -1 98 -1 -1 -1 -1 -1 82 -1 -1 -1 97 -1 -1 -1 -1 -1
    # print 'Output : ' + printList(Solution().flatten(root))  # 47 42 41 40 44 43 45 46 52 50 49 48 51 64 63 55 53 54 58 56 57 60 59 61 62 77 75 69 68 66 65 67 73 72 71 70 74 76 88 81 79 78 80 87 85 84 83 82 86 94 92 89 90 91 93 100 96 95 99 98 97 102 101 
