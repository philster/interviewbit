/**
 * SUBTRACT
 * 
 * Given a singly linked list, modify the value of first half nodes such that :
 * - 1st node’s new value = the last node’s value - first node’s current value
 * - 2nd node’s new value = the second last node’s value - 2nd node’s current value,
 * and so on ...
 * 
 * NOTE:
 * - If the length L of linked list is odd, then the first half implies at first floor(L/2) nodes. So, if L = 5, the first half refers to first 2 nodes.
 * - If the length L of linked list is even, then the first half implies at first L/2 nodes. So, if L = 4, the first half refers to first 2 nodes.
 * 
 * Example:
 * Given linked list  1 -> 2 -> 3 -> 4 -> 5 ,
 * You should return  4 -> 2 -> 3 -> 4 -> 5
 * as
 *   for first node, 5 - 1 = 4
 *   for second node, 4 - 2 = 2
 * 
 * Try to solve the problem using constant extra space.
 */

// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

module.exports = { 
  //param A : head node of linked list
  //return the head node in the linked list
  subtract : function(A){
    if (A === null || A.next === null) {
      return A;
    }

    // split the list in half using a slow and a fast (twice the hops) pointer
    var fast = A;
    var slow = A;
    var mid;

    while (fast !== null && fast.next !== null) {
      fast = fast.next.next;
      mid = slow;
      slow = slow.next;
    }

    // detach the second half of the list from the first half
    mid.next = null;

    // reverse the second half of the list
    var reversed = null;
    var current = slow;
    while (current !== null) {
      var temp = current.next;
      current.next = reversed;
      reversed = current;
      current = temp;
    }

    // perform subtraction on first half
    var temp = reversed;
    current = A;
    while (current !== null) {
      current.data = temp.data - current.data;
      current = current.next;
      temp = temp.next;
    }

    // reverse the reversed list
    slow = null;
    current = reversed;
    while (current !== null) {
      var temp = current.next;
      current.next = slow;
      slow = current;
      current = temp;
    }

    // reattach to the first half of the list
    mid.next = slow;

    return A;
  }
};

function Node(data){
  this.data = data;
  this.next = null;
}

function SingleLinkedList(arr){
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

var A = new SingleLinkedList([1,2,3,4,5]);
console.log('Input  : ' + printList(A));
console.log('Output : ' + printList(module.exports.subtract(A)));

var B = new SingleLinkedList([95, 59, 26, 16, 31, 39, 29, 8, 74, 14, 41, 41, 64, 88, 34, 21, 67, 23, 17, 41, 3, 38, 4, 45, 93, 92, 99, 24]);
console.log('Input  : ' + printList(B));
console.log('Output : ' + printList(module.exports.subtract(B)));
