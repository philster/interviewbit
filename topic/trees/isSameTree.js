/**
 * Identical Binary Trees
 * 
 * Given two binary trees, write a function to check if they are equal or not.
 * 
 * Two binary trees are considered equal if they are structurally identical and the nodes have the same value.
 * 
 * Return 0 / 1 ( 0 for false, 1 for true ) for this problem
 * 
 * Example:
 * 
 * Input :
 * 
 *    1       1
 *   / \     / \
 *  2   3   2   3
 * 
 * Output :
 *   1 or True
 */

module.exports = { 
    //param A : root node of tree
    //param B : root node of tree
    //return an integer
    isSameTree : function(A, B){
        if (A === null && B === null) {
            return 1;
        }
        if (A === null || B === null) {
            return 0;
        }
        if (A.data !== B.data) {
            return 0;
        }
        return module.exports.isSameTree(A.left, B.left) & module.exports.isSameTree(A.right, B.right);
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

//    1       1
//   / \     / \
//  2   3   2   3
var treeA = new TreeNode(1);
treeA.left = new TreeNode(2);
treeA.right = new TreeNode(3);
var treeB = new TreeNode(1);
treeB.left = new TreeNode(2);
treeB.right = new TreeNode(3);
console.log('Input  :');
console.log('Output : ' + module.exports.isSameTree(treeA, treeB));  // 1
