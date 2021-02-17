/**
 * Runtime: 84ms, faster than 80.77%
 */
var flipAndInvertImage = function(A) {
   return A.map((a) => a.reverse().map((pixel) => pixel == 0 ? 1 : 0));
};

const input = [[1,1,0],[1,0,1],[0,0,0]];
const output = flipAndInvertImage(input);

console.log(output);