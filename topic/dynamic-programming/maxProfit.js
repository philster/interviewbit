/**
 * Best Time to Buy and Sell Stocks I
 * 
 * Say you have an array for which the ith element is the price of a given stock on day i.
 * 
 * If you were only permitted to complete at most one transaction (ie, buy one and sell one share of the stock), design an algorithm to find the maximum profit.
 * 
 * Example :
 * 
 *   Input : [1 2]
 *   Return :  1
 */

module.exports = { 
    //param A : array of integers
    //return an integer
    maxProfit : function(A){
        var aLen = A.length;
        if (aLen < 2) {
            return 0;
        }
        // Create profit array, initialize with 0s
        var profit = [];
        for (var i = 0; i < aLen; i++) {
            profit.push(0);
        }
        // Get maximum profit with only one transaction allowed.
        // After this loop, profit[i] will contain max profit
        // from price[i..n-1] using at most one transaction.
        var maxPrice = A[aLen - 1];
        for (var i = aLen - 2; i >= 0; i--) {
            maxPrice = Math.max(maxPrice, A[i]);
            profit[i] = Math.max(profit[i + 1], maxPrice - A[i]);
        }
        return profit[0];
    }
};

var stockPrices = [1, 2];
console.log('Input : [' + stockPrices.join(', ') + ']');
console.log('Return : ' + module.exports.maxProfit(stockPrices));  // 1
