/**
 * Balanced Binary Tree
 * 
 * Given a binary tree, determine if it is height-balanced.
 * 
 *   Height-balanced binary tree : is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.
 * 
 * Return 0 / 1 ( 0 for false, 1 for true ) for this problem
 * 
 * Example :
 * 
 * Input : 
 *           1
 *          / \
 *         2   3
 * 
 * Return : True or 1 
 * 
 * Input 2 : 
 *          3
 *         /
 *        2
 *       /
 *      1
 * 
 * Return : False or 0 
 *          Because for the root node, left subtree has depth 2 and right subtree has depth 0. 
 *          Difference = 2 > 1.
 */

module.exports = { 
    //param A : root node of tree
    //return an integer
    isBalanced : function(A){
	    if (A === null) {
	        return 1;
        }
        // solution 1 -- time limit exceeded?
	    // var depth = function(root){
	    //     if (root === null) {
	    //         return 0;
	    //     }
	    //     return 1 + Math.max(depth(root.left), depth(root.right));
	    // };
        // return (Math.abs(depth(A.left) - depth(A.right)) <= 1 && module.exports.isBalanced(A.left) && module.exports.isBalanced(A.right)) ? 1 : 0;

        // solution 2 -- time limit exceeded?
        var isBal = function(root){
            if (root === null) {
                return {
                    isBalanced: 1,
                    depth: 0
                };
            }
            var l = isBal(root.left);
            var r = isBal(root.right);
            var depth = 1 + Math.max(l.depth, r.depth);
            if (Math.abs(l.depth - r.depth) > 1) {
                return {
                    isBalanced: 0,
                    depth: depth
                };
            } else {
                return {
                    isBalanced: l.isBalanced & r.isBalanced,
                    depth: depth
                };
            }
        };
        return isBal(A).isBalanced;

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

//       1
//     /   \
//    2     3
var root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
console.log('Input  : ');
console.log('Return : ' + module.exports.isBalanced(root));  // 1

//        3
//      /
//     2
//   /
//  1
var root = new TreeNode(3);
root.left = new TreeNode(2);
root.left.left = new TreeNode(1);
console.log('Input  : ');
console.log('Return : ' + module.exports.isBalanced(root));  // 0
