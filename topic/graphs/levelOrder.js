/**
 * Level Order
 * 
 * Given a binary tree, return the level order traversal of its nodes’ values. (ie, from left to right, level by level).
 * 
 * Example :
 * Given binary tree
 * 
 *       3
 *      / \
 *     9  20
 *       /  \
 *      15   7
 * 
 * return its level order traversal as:
 * 
 *    [
 *      [3],
 *      [9,20],
 *      [15,7]
 *    ]
 * 
 * Also think about a version of the question where you are asked to do a level order traversal of the tree when depth of the tree is much greater than number of nodes on a level.
 */

module.exports = { 
    //param A : root node of tree
    //return a array of array of integers
    levelOrder : function(A){
        if (A === null) {
            return null;
        }
        var result = [];

        // create empty queue for level order traversal
        var queue = new Queue();
        queue.enqueue(A);

        while (true) {
            // number of nodes at current level
            var nodeCount = queue.size();
            if (nodeCount === 0) {
                break;
            }

            // dequeue all nodes at current level and enqueue all nodes of next level
            var line = [];
            while (nodeCount > 0) {
                var node = queue.dequeue();
                line.push(node.data);
                // enqueue left child
                if (node.left !== null) {
                    queue.enqueue(node.left);
                }
                // enqueue right child
                if (node.right !== null) {
                    queue.enqueue(node.right);
                }
                nodeCount--;
            }
            result.push(line);
        }

        return result;
    }
};

// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }
function TreeNode(data){
    this.data = data;
    this.left = null;
    this.right = null;
}

function Queue() {
    var _head = null;
    var _size = 0;

    this.enqueue = function (data) {
        var node = { data: data, next: null };
        if (_head === null) {
            _head = node;
        } else {
            var curr = _head;
            while (curr.next !== null) {
                curr = curr.next;
            }
            curr.next = node;
        }
        _size++;
        return _size;
    };
    this.dequeue = function () {
        if (_head === null) {
            return null;
        } else {
            var node = _head;
            _head = _head.next;
            _size--;
            return node.data;
        }
    };
    this.size = function () {
        return _size;
    };
}

//     3
//    / \
//   9  20
//     /  \
//    15   7
var root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);
console.log('Input  : ');
console.log('Output : [\n' + module.exports.levelOrder(root).map(function(level){ return '[' + level.join(',') + ']'; }).join('\n') + '\n]');  // [ [3], [9,20], [15,7] ]
