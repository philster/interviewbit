/**
 * Root to Leaf Paths With Sum
 * 
 * Given a binary tree and a sum, find all root-to-leaf paths where each path’s sum equals the given sum.
 * 
 * For example:
 * Given the below binary tree and sum = 22,
 * 
 *               5
 *              / \
 *             4   8
 *            /   / \
 *           11  13  4
 *          /  \    / \
 *         7    2  5   1
 * 
 * return
 * 
 *    [
 *        [5,4,11,2],
 *        [5,8,4,5]
 *    ]
 */

module.exports = { 
    //param A : root node of tree
    //param B : integer
    //return a array of array of integers
    pathSum : function(A, B){
        if (A === null || A.data > B) {
            return [];
        }

        // solution 1 -- time limit exceeded?
        var result = [];
        var pathSumHelper = function(root, sum, arr){
            if (root === null) {
                return;
            }
            var partial = sum - root.data;
            var newArr = arr.concat(root.data);
            if (root.left === null && root.right === null) {
                if (partial === 0) {
                    result.push(newArr);
                }
            } else {
                pathSumHelper(root.left, partial, newArr);
                pathSumHelper(root.right, partial, newArr);
            }
        };
        pathSumHelper(A, B, []);
        return result;
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

//              5
//             / \
//            4   8
//           /   / \
//          11  13  4
//         /  \    / \
//        7    2  5   1
var root = new TreeNode(5);
root.left = new TreeNode(4);
root.right = new TreeNode(8);
root.left.left = new TreeNode(11);
root.right.left = new TreeNode(13);
root.right.right = new TreeNode(4);
root.left.left.left = new TreeNode(7);
root.left.left.right = new TreeNode(2);
root.right.right.left = new TreeNode(5);
root.right.right.right = new TreeNode(1);
var sum = 22;
console.log('Input  :');
console.log('Output : [\n' + module.exports.pathSum(root, sum).join('\n') + '\n]');  // [ [5,4,11,2], [5,8,4,5] ]

// tree:  543 0 2 0 1 0 2 2 1 0 0 1 2 1 1 2 1 2 1 0 0 2 0 2 2 -1 1 0 1 -1 1 2 2 2 1 1 -1 1 2 1 0 1 1 0 2 2 2 2 2 0 2 0 1 2 -1 -1 0 1 0 2 -1 2 1 0 -1 -1 2 1 0 -1 0 2 -1 -1 1 2 -1 -1 0 2 1 -1 1 0 0 -1 2 -1 -1 1 2 0 -1 -1 2 1 2 -1 1 1 0 2 2 0 -1 1 1 0 1 0 0 1 2 2 0 -1 1 2 0 -1 -1 -1 0 -1 2 2 -1 -1 0 -1 1 0 -1 -1 0 -1 1 -1 0 1 -1 1 0 0 -1 2 1 -1 0 0 0 0 -1 -1 -1 -1 2 1 -1 1 2 -1 0 1 1 2 0 -1 -1 0 -1 0 2 0 -1 1 -1 2 1 -1 0 -1 0 2 -1 0 2 0 1 0 -1 -1 -1 0 -1 -1 -1 -1 -1 2 -1 1 0 -1 1 0 -1 -1 -1 -1 -1 -1 -1 -1 0 -1 1 1 -1 -1 -1 -1 -1 -1 -1 -1 1 0 -1 -1 -1 2 1 1 2 1 -1 -1 -1 1 -1 -1 -1 -1 -1 0 2 2 0 -1 -1 1 0 -1 1 1 1 -1 2 1 0 2 -1 1 2 -1 -1 -1 -1 2 2 1 1 -1 2 0 2 -1 -1 -1 1 2 -1 -1 -1 -1 0 1 1 -1 -1 -1 2 2 -1 -1 2 2 -1 -1 -1 1 0 -1 -1 2 -1 -1 -1 -1 -1 -1 0 -1 -1 1 -1 -1 1 2 -1 1 2 2 -1 -1 -1 2 -1 0 -1 0 2 2 0 2 -1 0 2 1 -1 0 -1 -1 2 -1 -1 -1 -1 -1 2 1 -1 0 2 -1 -1 -1 -1 -1 -1 1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 2 -1 -1 -1 0 2 1 0 -1 -1 2 0 -1 -1 -1 1 1 -1 -1 -1 0 1 -1 -1 -1 -1 1 0 -1 0 0 -1 1 1 1 2 -1 -1 -1 1 1 -1 0 -1 -1 -1 2 -1 -1 -1 0 2 0 -1 -1 -1 -1 -1 1 -1 -1 -1 -1 -1 -1 -1 -1 0 0 2 2 -1 -1 -1 -1 -1 -1 -1 0 -1 -1 2 -1 -1 1 -1 -1 1 2 1 0 -1 -1 0 -1 2 -1 -1 -1 -1 -1 -1 -1 2 -1 -1 2 -1 -1 2 -1 1 -1 -1 2 -1 -1 -1 -1 -1 -1 0 -1 -1 -1 1 1 -1 -1 1 -1 -1 -1 -1 -1 -1 -1 0 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 1 -1 -1 -1 -1 -1 -1 -1 1 0 0 1 1 0 -1 -1 -1 -1 -1 -1 -1 -1
// sum: 10
// var root = new TreeNode(0);
// root.left = new TreeNode(2);
// root.right = new TreeNode(0);
// var sum = 10;
// console.log('Input  :');
// console.log('Output : [\n' + module.exports.pathSum(root, sum).join('\n') + '\n]');  // [  [0 0 2 1 0 1 1 2 1 2 0 ] [0 0 2 2 1 1 1 0 1 2 ] [0 0 2 2 1 1 1 0 1 2 0 ] [0 0 2 2 2 2 0 2 0 0 ] [0 2 0 1 2 2 1 2 ] [0 2 0 1 2 2 2 0 1 ] [0 2 1 1 1 2 1 2 0 ] [0 2 1 1 2 1 2 1 0 ]  ]
