/**
 * Path Sum
 * 
 * Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.
 * 
 * Example:
 * 
 * Given the below binary tree and sum = 22,
 * 
 *               5
 *              / \
 *             4   8
 *            /   / \
 *           11  13  4
 *          /  \      \
 *         7    2      1
 * 
 * return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.
 * 
 * Return 0 / 1 ( 0 for false, 1 for true ) for this problem
 */

module.exports = { 
    //param A : root node of tree
    //param B : integer
    //return an integer
    hasPathSum : function(A, B){
        if (A === null) {
            return B === 0 ? 1 : 0;
        }

        var result = 0;
        var partial = B - A.data;
        
        if (partial === 0 && A.left === null && A.right === null) {
            return 1;
        }
        if (A.left !== null) {
            result = result | module.exports.hasPathSum(A.left, partial);
        }
        if (A.right !== null) {
            result = result | module.exports.hasPathSum(A.right, partial);
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

//              5
//             / \
//            4   8
//           /   / \
//          11  13  4
//         /  \      \
//        7    2      1
var root = new TreeNode(5);
root.left = new TreeNode(4);
root.right = new TreeNode(8);
root.left.left = new TreeNode(11);
root.right.left = new TreeNode(13);
root.right.right = new TreeNode(4);
root.left.left.left = new TreeNode(7);
root.left.left.right = new TreeNode(2);
root.right.right.right = new TreeNode(1);
var sum = 22;
console.log('Input  :');
console.log('Output : ' + module.exports.hasPathSum(root, sum));  // 1
