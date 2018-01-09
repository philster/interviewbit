module.exports = { 
  //param A : array of integers
  //return a array of array of integers
  permute : function(A){
    var n = A.length;
    var hash = {};
    var getAllPermutations = function (arr) {
      var results = [];

      if (arr.length === 1) {
        results.push(arr.slice());
        return results;
      }
  
      for (var i = 0; i < arr.length; i++) {
        var firstElem = arr[i];
        var elemsLeft = arr.filter(function (elem, idx) {
          return idx !== i;
        });
        var innerPermutations = getAllPermutations(elemsLeft);
        for (var j = 0; j < innerPermutations.length; j++) {
          var permu = [firstElem].concat(innerPermutations[j]);
          // hash and check duplicates
          if (permu.length < A.length) {
            results.push(permu);
          } else if (!hash[permu.join('|')]) {
            hash[permu.join('|')] = true;
            results.push(permu);
          }
        }
      }
      return results;
    };
    return getAllPermutations(A);
  }
};

function printArrayOfArrays(arr){
  return arr.reduce(function (all, item) {
    return all + '[' + item.join(',') + ']' + '\n';
  }, '');
}

var A = [1,1,2];
console.log('Input : [' + A.join(',') + ']');
console.log('Unique Permutations :\n' + printArrayOfArrays(module.exports.permute(A)));
