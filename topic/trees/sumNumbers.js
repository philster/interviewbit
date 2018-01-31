/**
 * 
 */

module.exports = { 
    //param A : root node of tree
    //return an integer
    sumNumbers : function(A){
        var sumHelper = function(root, carry) {
            if (root === null) {
                return 0;
            }
            if (root.left === null && root.right === null) {
                console.log('>> leaf='+root.data+'\n');
                return carry * 10 + root.data;
            }
            console.log('>> node='+root.data);
            var sum = 0;
            if (root.left !== null) {
                console.log('>>  go left');
                sum += sumHelper(root.left, carry * 10 + root.data);
            }
            if (root.right !== null) {
                console.log('>>  go right');
                sum += sumHelper(root.right, carry * 10 + root.data);
            }
            return sum;
        };

        return sumHelper(A, 0) % 1003;

        /*
        var sum = 0;

	    if (A === null) {
	        return 0;
        }
	    if (A.left === null && A.right === null) {
            console.log('>> leaf='+A.data);
	        return A.data;
	    }
	    var sum = 0;
        console.log('>> node val='+A.data);
	    if (A.left !== null) {
            var z = module.exports.sumNumbers(A.left);
            sum += A.data * 10 + z;
	        // sum += A.data * 10 + module.exports.sumNumbers(A.left);
            console.log('>> left z=' + z + ', sum=' + sum);
	    }
	    if (A.right !== null) {
            var z = module.exports.sumNumbers(A.right);
            sum += A.data * 10 + z;
	        // sum += A.data * 10 + module.exports.sumNumbers(A.right);
            console.log('>> right z=' + z + ', sum=' + sum);
        }
        // console.log('>> sum='+sum);
        return sum % 1003;
        */
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

//    1
//   / \
//  2   3
var root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
console.log('Input  :');
console.log('Output : ' + module.exports.sumNumbers(root));  // 25
return;

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

// failing here :-(
// 763 3 7 9 9 0 -1 -1 2 1 4 3 2 5 2 2 4 8 1 1 4 9 0 -1 8 3 5 2 5 -1 1 6 2 8 1 0 7 3 -1 7 -1 6 6 1 7 1 5 9 4 7 -1 7 -1 -1 -1 6 2 8 7 8 1 5 9 0 4 6 -1 -1 5 6 -1 2 1 8 2 5 5 -1 4 -1 1 9 1 4 3 5 7 4 -1 -1 0 6 7 5 -1 2 1 7 1 9 0 2 5 4 -1 -1 -1 -1 -1 8 2 2 -1 -1 -1 -1 -1 2 -1 3 9 4 8 8 6 4 7 2 5 7 1 -1 9 5 3 8 0 4 -1 -1 5 5 7 2 -1 -1 -1 8 0 4 4 5 5 7 -1 -1 5 6 3 -1 9 1 9 -1 8 -1 -1 9 -1 -1 8 -1 -1 -1 -1 -1 -1 -1 -1 -1 6 7 3 -1 1 8 -1 -1 1 8 -1 -1 -1 8 0 0 5 6 -1 -1 0 -1 9 -1 5 -1 6 6 -1 6 2 6 5 -1 -1 7 3 1 6 -1 7 6 -1 -1 6 -1 3 9 -1 -1 -1 0 -1 2 -1 0 -1 7 3 5 -1 8 2 0 6 8 7 3 9 0 1 0 -1 -1 -1 0 8 7 2 9 -1 6 6 6 -1 2 3 2 -1 -1 1 1 4 8 -1 2 0 -1 -1 -1 -1 -1 -1 1 3 6 -1 -1 -1 -1 5 4 1 7 7 -1 -1 -1 -1 -1 -1 0 8 0 -1 5 5 -1 7 3 -1 -1 1 -1 -1 -1 7 9 4 -1 4 -1 -1 -1 -1 -1 -1 -1 -1 -1 0 0 5 5 -1 -1 -1 2 6 8 1 -1 0 -1 6 -1 0 -1 -1 -1 -1 -1 -1 6 8 2 -1 4 2 -1 1 -1 -1 -1 2 1 0 2 7 8 -1 1 -1 -1 3 4 -1 -1 -1 -1 -1 5 -1 -1 8 2 -1 -1 -1 -1 2 8 -1 3 -1 8 6 3 -1 -1 -1 8 6 4 -1 -1 -1 -1 5 -1 -1 -1 -1 -1 -1 9 4 -1 -1 -1 -1 -1 -1 -1 2 2 7 3 9 -1 -1 9 -1 -1 -1 -1 6 -1 3 8 -1 -1 -1 -1 -1 -1 -1 3 -1 -1 -1 -1 -1 -1 -1 -1 4 -1 2 -1 -1 -1 -1 2 -1 -1 1 9 1 -1 -1 2 5 1 -1 -1 4 2 -1 -1 -1 7 6 3 8 2 8 -1 -1 0 -1 -1 3 1 -1 -1 5 -1 -1 9 -1 2 -1 0 -1 -1 -1 8 -1 -1 8 -1 -1 0 -1 0 -1 7 -1 -1 1 4 -1 9 5 3 -1 -1 -1 2 3 -1 -1 -1 6 7 -1 0 6 -1 -1 -1 -1 -1 5 -1 -1 -1 5 -1 -1 -1 -1 -1 4 8 3 -1 -1 9 5 -1 -1 -1 9 0 -1 -1 -1 -1 -1 -1 -1 -1 4 -1 7 -1 -1 -1 -1 -1 -1 -1 4 0 -1 8 1 -1 5 -1 0 -1 -1 -1 -1 -1 1 1 0 -1 8 6 -1 -1 -1 -1 -1 -1 3 5 9 4 1 9 -1 -1 -1 -1 -1 6 -1 -1 -1 -1 -1 -1 5 -1 -1 9 -1 -1 0 -1 -1 -1 -1 0 1 -1 3 -1 8 -1 1 -1 -1 -1 -1 2 5 6 2 6 -1 6 6 4 -1 9 -1 -1 -1 -1 5 8 -1 -1 -1 -1 -1 1 -1 -1 -1 -1 5 -1 7 -1 -1 -1 -1 9 4 2 1 8 -1 -1 -1 3 4 -1 -1 -1 -1 -1 -1 -1 5 -1 -1 -1 -1 -1 4 -1 9 -1 -1 -1 3 -1 -1 3 -1 -1 7 4 1 -1 -1 -1 -1 -1 -1 -1 -1 7 8 -1 9 0 -1 -1 -1 2 6 -1 8 -1 -1 -1 -1 -1 2 -1 4 2 -1 -1 6 8 -1 -1 -1 -1 -1 4 -1 -1
// var root = new TreeNode(1);
// root.left = new TreeNode(2);
// root.right = new TreeNode(3);
// root.left.left = new TreeNode(4);
// root.left.right = new TreeNode(5);
// root.right.right = new TreeNode(6);
// root.left.left.left = new TreeNode(7);
// root.left.left.right = new TreeNode(8);
console.log('Input  :');
console.log('Output : ' + module.exports.sumNumbers(root));  // 790
