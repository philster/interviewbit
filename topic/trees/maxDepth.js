/**
 * Max Depth of Binary Tree
 * 
 * Given a binary tree, find its maximum depth.
 * 
 * The maximum depth of a binary tree is the number of nodes along the longest path from the root node down to the farthest leaf node.
 * 
 * NOTE : The path has to end on a leaf node.
 * 
 * Example:
 * 
 *          1
 *         /
 *        2
 * 
 * max depth = 2.
 */

module.exports = { 
    //param A : root node of tree
    //return an integer
    maxDepth : function(A){
	    if (A === null) {
	        return 0;
	    }
        
        // solution 1 (time limit exceeded)
	    var depth = function (root) {
	        if (root === null) {
	            return 0;
	        }
            return 1 + Math.max(depth(root.left), depth(root.right));
	    };

        return Math.max(0, depth(A));
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

function BinaryTree(arr){
    // TODO
    return [];
}

function printTree(tree){
    // TODO
    var str = '';
    return str;
}

//         1
//        /
//       2
var root = new TreeNode(1);
root.left = new TreeNode(2);
var bt = root; // fix this later
console.log('Input  : ' + printTree(bt));
console.log('Output : ' + module.exports.maxDepth(bt));

// input:
// 7 1 2 3 -1 -1 -1 -1
// expected output:
// 2
