#
# Clone Graph
#
# Clone an undirected graph. Each node in the graph contains a label and a list of its neighbors.
#

class Solution:
    # @param node, a undirected graph node
    # @return a undirected graph node
    def cloneGraph(self, node):
        oldToNewMapper = {}
        queue = []
        curr = UndirectedGraphNode(node.label)
        queue.append(node)
        oldToNewMapper[node] = curr
        while queue:
            temp = queue.pop(0)
            for child in temp.neighbors:
                if child not in oldToNewMapper:
                    clonedChild = UndirectedGraphNode(child.label)
                    oldToNewMapper[child] = clonedChild
                    queue.append(child)
                oldToNewMapper[temp].neighbors.append(oldToNewMapper[child])
        return curr
        
# Definition for a undirected graph node
# class UndirectedGraphNode:
#     def __init__(self, x):
#         self.label = x
#         self.neighbors = []
class UndirectedGraphNode:
    def __init__(self, x):
        self.label = x
        self.neighbors = []

if __name__ == '__main__':
    # The line starts with a number N representing the total number of nodes in the graph. The n numbers follow representing the label on each node. Then N^2 numbers follow representing the adjacency matrix ( i,jth number represents if an edge exists between ith and jth node. Edge exists if either of i,jth or j,ith number is 1 ). 
    # 3 703 279 43 1 0 0 1 1 1 1 1 0
    node = UndirectedGraphNode(703)
    node279 = UndirectedGraphNode(279)
    node43 = UndirectedGraphNode(43)
    node.neighbors.append(node43)
    node.neighbors.append(node279)
    node.neighbors.append(node)
    node43.neighbors.append(node279)
    node43.neighbors.append(node)
    node279.neighbors.append(node43)
    node279.neighbors.append(node279)
    node279.neighbors.append(node)
    print 'Input : ' + str(node)
    print 'Output : ' + str(Solution().cloneGraph(node))    
