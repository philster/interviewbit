/**
 * Preorder Traversal
 * 
 * Given a binary tree, return the preorder traversal of its nodes’ values.
 * 
 * Example:
 * Given binary tree
 * 
 *    1
 *     \
 *      2
 *     /
 *    3
 * 
 * return [1,2,3].
 * 
 * Using recursion is not allowed.
 */

module.exports = { 
    //param A : root node of tree
    //return a array of integers
    preorderTraversal : function(A){
	    var result = [];

        if (A === null) {
            return [];
        }

        // solution 1: use stack -- time limit exceeded?
        // create a stack
        var stack = [];
        // push root to stack
	    stack.push(A);
        
        // pop all items one by one, and for each item do the following:
        // 1) print result, 2) push right child, 3) push left child
	    while (stack.length > 0) {
	        var node = stack.pop();
	        if (node !== null) {
	            result.push(node.data);
	        }
	        if (node.right !== null) {
	            stack.push(node.right);
	        }
	        if (node.left !== null) {
	            stack.push(node.left);
	        }
        }

        /*
        // solution 2: no need of stack, but requires modifying the tree -- time limit exceeded?
        var curr = A;
        while (curr !== null) {
            // if left child is null, print current node data
            // then update current pointer to the right child
            if (curr.left === null) {
                result.push(curr.data);
                curr = curr.right;
            } else {
                // find the inorder predecessor
                var prev = curr.left;

                while (prev.right !== null && prev.right !== curr) {
                    prev = prev.right;
                }

                // if the right child of inorder predecessor already points to the current node,
                // update the current with it's right child
                if (prev.right === curr) {
                    prev.right = null;
                    curr = curr.right;
                } else {
                    // else if right child doesn't point to the current node,
                    // then print this node's data and update the right child pointer with the current node
                    // and update the current with it's left child
                    result.push(curr.data);
                    prev.right = curr;
                    curr = curr.left;
                }
            }
        }
        */
	    
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

function BinaryTree(arr){
    // TODO
    return [];
}

function printTree(tree){
    // TODO
    var str = '';
    return str;
}

//    1
//     \
//      2
//     /
//    3
var root = new TreeNode(1);
root.right = new TreeNode(2);
root.right.left = new TreeNode(3);
var bt = root; // fix this later
console.log('Input  : ' + printTree(bt));
console.log('Output : [' + module.exports.preorderTraversal(bt).join(', ') + ']');

// There are 1 lines in the input
//
// Line 1 ( Corresponds to arg 1 ) : First number represents the number of integers in input line. Then follows serialized representation of the tree. The serialization of a binary tree follows a level order description of left and right child of nodes, where -1 signifies a NULL child.
//     For example,
//          1
//         / \ 
//        2    3
//           /
//         4
//          \
//           5
//     will have representation as {1 2 3 -1 -1 4 -1 -1 5 -1 -1}
//     The first integer on the line indicates the number of integers to follow in the serialized representation of the tree.

// 359 129 97 98 93 106 27 61 -1 173 40 78 22 152 99 114 47 69 -1 -1 110 144 14 56 165 174 49 1 57 126 123 100 30 -1 -1 -1 161 13 139 2 85 128 119 177 -1 169 135 77 112 50 17 140 138 58 -1 -1 105 -1 -1 -1 -1 70 -1 -1 102 -1 -1 103 -1 176 -1 -1 115 132 154 125 5 -1 108 36 32 7 -1 -1 148 -1 153 16 130 72 -1 -1 95 116 48 104 -1 -1 20 156 -1 -1 88 -1 142 175 -1 64 133 83 94 -1 4 71 101 -1 -1 -1 -1 42 -1 -1 -1 -1 134 166 28 92 33 82 74 45 -1 -1 168 -1 9 -1 44 26 -1 -1 170 6 -1 -1 89 143 160 -1 68 178 111 167 -1 109 151 -1 -1 -1 81 23 -1 -1 -1 -1 -1 -1 66 11 10 179 15 96 -1 127 18 163 -1 -1 24 29 -1 -1 -1 -1 -1 34 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 21 118 -1 31 -1 35 -1 37 -1 122 162 3 -1 -1 -1 121 59 -1 -1 -1 19 158 157 -1 171 84 46 149 -1 -1 -1 -1 76 147 54 150 -1 -1 -1 -1 63 62 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 86 43 55 -1 -1 -1 -1 172 120 -1 -1 91 155 8 107 -1 -1 -1 164 -1 -1 113 -1 73 137 -1 -1 39 -1 -1 41 -1 -1 -1 75 146 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 90 -1 145 -1 -1 117 51 -1 -1 136 -1 79 80 -1 53 52 -1 -1 -1 159 -1 -1 -1 60 -1 -1 -1 131 -1 38 12 -1 -1 -1 -1 124 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 67 65 -1 87 -1 25 -1 141 -1 -1 -1 -1
// var bt = new BinaryTree([1,2,3,4,5]);
// console.log('Input  : ' + printTree(bt));
// console.log('Output : [' + module.exports.preorderTraversal(bt).join(', ') + ']');  // [129, 97, 93, 173, 47, 123, 100, 105, 48, 9, 104, 44, 34, 26, 69, 30, 106, 40, 78, 110, 144, 161, 70, 13, 98, 27, 22, 14, 139, 102, 20, 156, 170, 6, 2, 103, 56, 85, 176, 88, 128, 152, 165, 119, 115, 142, 89, 143, 175, 160, 132, 64, 68, 21, 63, 41, 53, 62, 118, 178, 31, 177, 154, 133, 111, 35, 167, 37, 83, 109, 122, 125, 94, 151, 162, 86, 75, 52, 124, 67, 87, 141, 65, 25, 146, 43, 3, 55, 174, 169, 5, 4, 71, 81, 23, 121, 61, 99, 49, 135, 108, 101, 36, 77, 32, 42, 7, 1, 112, 50, 148, 114, 57, 17, 153, 134, 166, 66, 59, 172, 11, 16, 28, 10, 19, 120, 158, 91, 179, 157, 155, 8, 90, 159, 92, 15, 171, 107, 145, 84, 96, 46, 164, 149, 113, 117, 60, 51, 140, 130, 33, 127, 82, 18, 163, 76, 73, 147, 137, 136, 131, 72, 74, 45, 24, 54, 39, 79, 38, 12, 80, 150, 29, 126, 138, 58, 95, 116, 168]
