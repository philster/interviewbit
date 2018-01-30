/**
 * Reverse Link List II
 * 
 * Reverse a linked list from position m to n. Do it in-place and in one-pass.
 * 
 * For example:
 * Given 1->2->3->4->5->NULL, m = 2 and n = 4,
 * return 1->4->3->2->5->NULL.
 * 
 * Note: Given m, n satisfy the following condition:  1 ≤ m ≤ n ≤ length of list.
 * Note 2: Usually the version often seen in the interviews is reversing the whole linked list which is obviously an easier version of this question.
 */

module.exports = { 
    //param A : head node of linked list
    //param B : integer
    //param C : integer
    //return the head node in the linked list
	reverseBetween : function(A, B, C){
        if (A === null || A.next === null) {
            return A;
        }
      
        // move current pointer to Bth node
	    var curr = A;
	    var prev = null;
        for (var i = 1; i < B; i++) {
            prev = curr;
            curr = curr.next;
        }

        // detach the subset to be reversed
        if (prev !== null) {
            prev.next = null;
        }
        
        // reverse the subset of the list
        var tail = curr;
        var reversed = null;
        for (var i = B; i <= C; i++) {
	        var temp = tail.next;
	        tail.next = reversed;
	        reversed = tail;
	        tail = temp;
        }

        // reattach the reversed subset
        curr.next = tail;  // reattach to tail segment
        if (prev !== null) {
            // reattach to head segment
            prev.next = reversed;
        } else {
            A = reversed;
        }

        // console.log('>> curr='+printList(curr)+', prev='+printList(prev)+', tail='+printList(tail)+', reversed='+printList(reversed));
        return A;
	}
};

// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }
function Node(data){
    this.data = data;
    this.next = null;
}
    
function LinkedList(arr){
    var head = new Node(arr[0] || null);
    var current = head;
    for (var i = 1; i < arr.length; i++) {
        current.next = new Node(arr[i]);
        current = current.next;
    }
    return head;
}
  
function printList(list){
    var str = '';
    var current = list;
    while (current !== null) {
        str += current.data;
        if (current.next !== null) {
            str += ' -> ';
        }
        current = current.next;
    }
    return str;
}

var ll = new LinkedList([1,2,3,4,5]);
var m = 2;
var n = 4;
console.log('Input  : ' + printList(ll));
console.log('Output : ' + printList(module.exports.reverseBetween(ll, m, n)));

var ll = new LinkedList([1]);
var m = 1;
var n = 1;
console.log('Input  : ' + printList(ll));
console.log('Output : ' + printList(module.exports.reverseBetween(ll, m, n)));

var ll = new LinkedList([1,2,3]);
var m = 1;
var n = 2;
console.log('Input  : ' + printList(ll));
console.log('Output : ' + printList(module.exports.reverseBetween(ll, m, n)));
