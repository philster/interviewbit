/**
 * Insertion Sort List
 * 
 * Sort a linked list using insertion sort.
 * 
 * We have explained Insertion Sort at Slide 7 of Arrays (http://www.interviewbit.com/courses/programming/topics/arrays/)
 * 
 * Insertion Sort Wiki (http://en.wikipedia.org/wiki/Insertion_sort#Algorithm) has some details on Insertion Sort as well.
 * 
 * Example:
 *   Input : 1 -> 3 -> 2
 *   Return 1 -> 2 -> 3
 */

// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

module.exports = { 
    //param A : head node of linked list
    //return the head node in the linked list
    insertionSortList : function(A){
	    var result = null;
	    var current = A;
	    while (current !== null) {
	        var next = current.next;
	        var temp = current;
	        if (result === null || result.data >= temp.data) {
	            temp.next = result;
	            result = temp;
	        } else {
	            var p = result;
	            while (p.next !== null && p.next.data < temp.data) {
	                p = p.next;
	            }
	            temp.next = p.next;
	            p.next = temp;
	        }
	        current = next;
	    }
        return result;
    }
};
   
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
  
var ll1 = new LinkedList([1,3,2]);
console.log('Input  : ' + printList(ll1));
console.log('Output : ' + printList(module.exports.insertionSortList(ll1)));
