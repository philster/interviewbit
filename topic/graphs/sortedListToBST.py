#
# Convert Sorted List to Binary Search Tree
#
# Given a singly linked list where elements are sorted in ascending order, convert it to a height balanced BST.
#
# " A height balanced BST : a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1. "
#
# Example :
#
#   Given A : 1 -> 2 -> 3
#   A height balanced BST  :
#
#         2
#       /   \
#      1     3
#

class Solution:
    # @param A : head node of linked list
    # @return the root node in the tree
    def __init__(self):
        self.curr = None
    def sortedListToBST(self, A):
        # count nodes in linked list
        nodeCount = 0
        curr = A
        while curr is not None:
            curr = curr.next
            nodeCount += 1
        # build BST
        self.curr = A
        return self.sortedListToBSTHelper(nodeCount)

    def sortedListToBSTHelper(self, n):
        if n <= 0:
            return None
        left = self.sortedListToBSTHelper(n/2)
        root = TreeNode(self.curr.val)
        root.left = left
        self.curr = self.curr.next
        right = self.sortedListToBSTHelper(n - n/2 - 1)
        root.right = right
        return root

# Definition for a binary tree node
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

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

def inorder(root):
    if root is None:
        return ''
    return inorder(root.left) + ' ' + str(root.val) + ' ' + inorder(root.right)

if __name__ == '__main__':
    root = ListNode(1)
    root.next = ListNode(2)
    root.next.next = ListNode(3)
    print 'Input : 1 -> 2 -> 3'
    print 'Inorder Traversal : ' + str(inorder(Solution().sortedListToBST(root)))
