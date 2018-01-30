#
# List Cycle
#
# Given a linked list, return the node where the cycle begins. If there is no cycle, return null.
#
# Try solving it using constant additional space.
#
# Example:
#
#   Input : 
# 
#                     ______
#                    |     |
#                    \/    |
#           1 -> 2 -> 3 -> 4
#
#   Return the node corresponding to node 3. 
# 

class Solution:
    # @param A : head node of linked list
    # @return the first node in the cycle in the linked list
    def detectCycle(self, A):
        slow = A
        fast = A
        
        while (fast is not None and fast.next is not None):
            # move the slow and fast pointers
            slow = slow.next
            fast = fast.next.next
            
            if slow == fast:
                slow = A
                while slow != fast:
                    slow = slow.next
                    fast = fast.next
                return fast

        return None

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

if __name__ == '__main__':
    list = ListNode(1)
    list.next = ListNode(2)
    list.next.next = ListNode(3)
    list.next.next.next = ListNode(4)
    list.next.next.next.next = list.next.next
    print 'Input:'
    print ' '
    print '                  ______'
    print '                 |     |'
    print '                 \/    |'
    print '        1 -> 2 -> 3 -> 4'
    print ' '
    print 'Return: node ' + str(Solution().detectCycle(list).val)  # node 3
