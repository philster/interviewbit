/**
 * Magician and Chocolates
 * 
 * Given N bags, each bag contains A[i] chocolates. There is a kid and a magician. In one unit of time, kid chooses a random bag i, eats A[i] chocolates, then the magician fills the ith bag with floor(A[i]/2) chocolates.
 * 
 * Given A[i] for 1 <= i <= N, find the maximum number of chocolates kid can eat in K units of time.
 * 
 * For example,
 * 
 *   K = 3
 *   N = 2
 *   A = 6 5
 * 
 *   Return: 14
 * 
 * At t = 1 kid eats 6 chocolates from bag 0, and the bag gets filled by 3 chocolates
 * At t = 2 kid eats 5 chocolates from bag 1, and the bag gets filled by 2 chocolates
 * At t = 3 kid eats 3 chocolates from bag 0, and the bag gets filled by 1 chocolate
 * so, total number of chocolates eaten: 6 + 5 + 3 = 14
 * 
 * Note: Return your answer modulo 10^9+7
 */

module.exports = { 
    //param A : integer
    //param B : array of integers
    //return an integer
    nchoc : function(A, B){
        var heap = new Heap(B);
        heap.heapify();
        var result = 0;
        for (var i = 0; i < A; i++) {
            var top = heap.max();
            result = (result + top) % (Math.pow(10, 9) + 7);
            heap.updateMax(Math.floor(top / 2));
        }
        return result;
    }
};

var Heap = function (arr) {
    var data = arr;
    var size = arr.length;

    this.get = function(){
        return data;
    };
    this.max = function(){
        return data[0];
    };
    this.heapify = function(){
        for (var i = 0; i < size; i++) {
            bubbleUp(i);
        }
    };
    this.updateMax = function(value){
        data[0] = value;
        bubbleDown(0);
    };
    function bubbleUp(pos){
        if (pos < 1) {
            return;
        }
        var parent = Math.floor((pos - 1) / 2);  // get parent position
        if (data[parent] < data[pos]) {
            swap(parent, pos);
            bubbleUp(parent);
        }
    }
    function bubbleDown(pos){
        var right = (pos + 1) * 2;
        var left = right - 1;
        if (right < size && data[right] >= data[left] && data[pos] < data[right]) {
            swap(pos, right);
            bubbleDown(right);
        } else if (left < size && data[pos] < data[left]) {
            swap(pos, left);
            bubbleDown(left);
        }
    }
    function parentPos(pos){
        return Math.floor((pos - 1) / 2)
    }
    function swap(a, b){
        var temp = data[a];
        data[a] = data[b];
        data[b] = temp;
    }
};

var K = 3;
var A = [6, 5];
console.log('Input:\nK = ' + K + '\nN = ' + A.length + '\nA = [' + A.join(', ') + ']');
console.log('Return: ' + module.exports.nchoc(K, A));  // 14

var K = 34;
var A = [69, 61];
console.log('Input:\nK = ' + K + '\nN = ' + A.length + '\nA = [' + A.join(', ') + ']');
console.log('Return: ' + module.exports.nchoc(K, A));  // 252

var K = 10;
var A = [2147483647, 2000000014, 2147483647];
console.log('Input:\nK = ' + K + '\nN = ' + A.length + '\nA = [' + A.join(', ') + ']');
console.log('Return: ' + module.exports.nchoc(K, A));  // ?
