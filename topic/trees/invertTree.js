/**
 * Invert the Binary Tree
 * 
 * Given a binary tree, invert the binary tree and return it.
 * Look at the example for more details.
 * 
 * Example:
 * Given binary tree
 * 
 *      1
 *    /   \
 *   2     3
 *  / \   / \
 * 4   5 6   7
 * 
 * invert and return
 * 
 *      1
 *    /   \
 *   3     2
 *  / \   / \
 * 7   6 5   4
 * 
 */

module.exports = { 
    //param A : root node of tree
    //return the root node in the tree
    invertTree : function(A){
        if (A === null) {
            return null;
        }
        // solution 1 -- time limit exceeded?
        if (A.left !== null || A.right !== null) {
            var temp = A.left;
            A.left = A.right;
            A.right = temp;
        }
        if (A.left !== null) {
            A.left = module.exports.invertTree(A.left);
        }
        if (A.right !== null) {
            A.right = module.exports.invertTree(A.right);
        }
        return A;
    }
};

// Definition for a binary tree node
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

function preorder(root) {
    if (root === null) {
        return '';
    }
    return root.data + ' ' + preorder(root.left) + preorder(root.right);
}

function postorder(root) {
    if (root === null) {
        return '';
    }
    return postorder(root.left) + postorder(root.right) + root.data + ' ';
}

//       1
//     /   \
//    2     3
//   / \   / \
//  4   5 6   7
var root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);
console.log('Input  : ');
console.log('PreOrder traversal : [' + preorder(module.exports.invertTree(root)) + ']');  // [1 3 7 6 2 5 4]
console.log('PostOrder traversal : [' + postorder(module.exports.invertTree(root)) + ']');  // [4 5 2 6 7 3 1]
