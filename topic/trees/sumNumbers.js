/**
 * Sum Root to Leaf Numbers
 * 
 * Given a binary tree containing digits from 0-9 only, each root-to-leaf path could represent a number.
 * 
 * An example is the root-to-leaf path 1->2->3 which represents the number 123.
 * 
 * Find the total sum of all root-to-leaf numbers % 1003.
 * 
 * Example :
 * 
 *       1
 *      / \
 *     2   3
 * 
 * The root-to-leaf path 1->2 represents the number 12.
 * The root-to-leaf path 1->3 represents the number 13.
 * 
 * Return the sum = (12 + 13) % 1003 = 25 % 1003 = 25.
 */

module.exports = { 
    //param A : root node of tree
    //return an integer
    sumNumbers : function(A){
        // solution 1 -- time limit exceeded?
        var sumHelper = function(root, oldNum) {
            if (root === null) {
                return 0;
            }
            var newNum = (oldNum * 10 + root.data) % 1003;
            if (root.left === null && root.right === null) {
                return newNum;
            }
            return (sumHelper(root.left, newNum) + sumHelper(root.right, newNum)) % 1003;
        };
        return sumHelper(A, 0);
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

//    1
//   / \
//  2   3
var root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
console.log('Input  :');
console.log('Output : ' + module.exports.sumNumbers(root));  // 25

// 17 1 2 3 4 5 -1 6 7 8 -1 -1 -1 -1 -1 -1 -1 -1
var root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.right = new TreeNode(6);
root.left.left.left = new TreeNode(7);
root.left.left.right = new TreeNode(8);
console.log('Input  :');
console.log('Output : ' + module.exports.sumNumbers(root));  // 750

// 763 3 7 9 9 0 -1 -1 2 1 4 3 2 5 2 2 4 8 1 1 4 9 0 -1 8 3 5 2 5 -1 1 6 2 8 1 0 7 3 -1 7 -1 6 6 1 7 1 5 9 4 7 -1 7 -1 -1 -1 6 2 8 7 8 1 5 9 0 4 6 -1 -1 5 6 -1 2 1 8 2 5 5 -1 4 -1 1 9 1 4 3 5 7 4 -1 -1 0 6 7 5 -1 2 1 7 1 9 0 2 5 4 -1 -1 -1 -1 -1 8 2 2 -1 -1 -1 -1 -1 2 -1 3 9 4 8 8 6 4 7 2 5 7 1 -1 9 5 3 8 0 4 -1 -1 5 5 7 2 -1 -1 -1 8 0 4 4 5 5 7 -1 -1 5 6 3 -1 9 1 9 -1 8 -1 -1 9 -1 -1 8 -1 -1 -1 -1 -1 -1 -1 -1 -1 6 7 3 -1 1 8 -1 -1 1 8 -1 -1 -1 8 0 0 5 6 -1 -1 0 -1 9 -1 5 -1 6 6 -1 6 2 6 5 -1 -1 7 3 1 6 -1 7 6 -1 -1 6 -1 3 9 -1 -1 -1 0 -1 2 -1 0 -1 7 3 5 -1 8 2 0 6 8 7 3 9 0 1 0 -1 -1 -1 0 8 7 2 9 -1 6 6 6 -1 2 3 2 -1 -1 1 1 4 8 -1 2 0 -1 -1 -1 -1 -1 -1 1 3 6 -1 -1 -1 -1 5 4 1 7 7 -1 -1 -1 -1 -1 -1 0 8 0 -1 5 5 -1 7 3 -1 -1 1 -1 -1 -1 7 9 4 -1 4 -1 -1 -1 -1 -1 -1 -1 -1 -1 0 0 5 5 -1 -1 -1 2 6 8 1 -1 0 -1 6 -1 0 -1 -1 -1 -1 -1 -1 6 8 2 -1 4 2 -1 1 -1 -1 -1 2 1 0 2 7 8 -1 1 -1 -1 3 4 -1 -1 -1 -1 -1 5 -1 -1 8 2 -1 -1 -1 -1 2 8 -1 3 -1 8 6 3 -1 -1 -1 8 6 4 -1 -1 -1 -1 5 -1 -1 -1 -1 -1 -1 9 4 -1 -1 -1 -1 -1 -1 -1 2 2 7 3 9 -1 -1 9 -1 -1 -1 -1 6 -1 3 8 -1 -1 -1 -1 -1 -1 -1 3 -1 -1 -1 -1 -1 -1 -1 -1 4 -1 2 -1 -1 -1 -1 2 -1 -1 1 9 1 -1 -1 2 5 1 -1 -1 4 2 -1 -1 -1 7 6 3 8 2 8 -1 -1 0 -1 -1 3 1 -1 -1 5 -1 -1 9 -1 2 -1 0 -1 -1 -1 8 -1 -1 8 -1 -1 0 -1 0 -1 7 -1 -1 1 4 -1 9 5 3 -1 -1 -1 2 3 -1 -1 -1 6 7 -1 0 6 -1 -1 -1 -1 -1 5 -1 -1 -1 5 -1 -1 -1 -1 -1 4 8 3 -1 -1 9 5 -1 -1 -1 9 0 -1 -1 -1 -1 -1 -1 -1 -1 4 -1 7 -1 -1 -1 -1 -1 -1 -1 4 0 -1 8 1 -1 5 -1 0 -1 -1 -1 -1 -1 1 1 0 -1 8 6 -1 -1 -1 -1 -1 -1 3 5 9 4 1 9 -1 -1 -1 -1 -1 6 -1 -1 -1 -1 -1 -1 5 -1 -1 9 -1 -1 0 -1 -1 -1 -1 0 1 -1 3 -1 8 -1 1 -1 -1 -1 -1 2 5 6 2 6 -1 6 6 4 -1 9 -1 -1 -1 -1 5 8 -1 -1 -1 -1 -1 1 -1 -1 -1 -1 5 -1 7 -1 -1 -1 -1 9 4 2 1 8 -1 -1 -1 3 4 -1 -1 -1 -1 -1 -1 -1 5 -1 -1 -1 -1 -1 4 -1 9 -1 -1 -1 3 -1 -1 3 -1 -1 7 4 1 -1 -1 -1 -1 -1 -1 -1 -1 7 8 -1 9 0 -1 -1 -1 2 6 -1 8 -1 -1 -1 -1 -1 2 -1 4 2 -1 -1 6 8 -1 -1 -1 -1 -1 4 -1 -1
// var root = new TreeNode(1);
// root.left = new TreeNode(2);
// root.right = new TreeNode(3);
// root.left.left = new TreeNode(4);
// root.left.right = new TreeNode(5);
// root.right.right = new TreeNode(6);
// root.left.left.left = new TreeNode(7);
// root.left.left.right = new TreeNode(8);
// console.log('Input  :');
// console.log('Output : ' + module.exports.sumNumbers(root));  // 790
