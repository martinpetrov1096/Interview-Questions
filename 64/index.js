/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
   
   /**
    * If either m or n is
    * 0, then the minPathSum
    * is 0.
    */
   if (grid.length === 0 || !grid[0].length) {
      return 0;
   }

   const numRows = grid.length;
   const numCols = grid[0].length;
   console.log('numCols: ' + numCols);
   console.log('numRows: ' + numRows);
   /**
    * Init 2d array
    */
   let minPath = Array(numRows).fill(Array(numCols));

   for (let i = 0; i < numRows; ++i) {

      for (let j = 0; j < numCols; ++j) {
 
         if (i === 0 && j === 0) {
            minPath[0][0] = grid[0][0];
            continue;
         }


         const pathLeft = (j - 1) < 0 ? Infinity : minPath[i][j-1];
         const pathAbove = (i - 1) < 0 ? Infinity : minPath[i-1][j];
      
         minPath[i][j] = Math.min(pathLeft, pathAbove) + grid[i][j];

        // console.log(minPath[i]);   
         console.log('i: ' + i + ' j: ' + j + ' grid[i][j]: ' + grid[i][j] +  ' left: ' + pathLeft + ' above: ' + pathAbove);
         console.log('i: ' + i + ' j: ' + j + ' minPath ' + minPath[i][j]);



      }
   }

   return minPath[numRows -1][numCols -1];

};


const input = [[1,2,3],[4,5,6]]
const output = minPathSum(input);

console.log(output);