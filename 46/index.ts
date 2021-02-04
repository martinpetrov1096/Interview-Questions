/**
 * Time Started Reading: 3:46pm
 * Time Started Coding: 3:56pm
 * Time Finished: 4:15pm
 *    - Faster than 90.79% of Typescript Submissions
 * Time Optimized:
 * 
 Do not return anything, modify nums in-place instead.
 */
function permute(nums: number[]): number[][] {
   const perms = new Array<Array<number>>();

   if (nums.length == 1) {
      perms.push(nums);
   }
   else if (nums.length == 2) {
      perms.push([nums[0], nums[1]], [nums[1], nums[0]]);
   } else {

      for (let i = 0; i < nums.length; ++i) {
         let head = nums.shift();
         if (head == undefined) {
            console.log('problem');
            return[[]];
         }
         let curPerms = permute(nums);
         for (let j = 0; j < curPerms.length; ++j) {
            perms.push([head, ...curPerms[j]]);
         }
         nums.push(head);
      }
   }
   return perms;
};



let testCases46 = new Map<Array<number>, Array<Array<number>>>()
testCases46.set([1,2,3], [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]);
testCases46.set([0,1], [[0,1], [1,0]]);
testCases46.set([1], [[1]]);

testCases46.forEach((sol, input) => {
 
   let output = permute(input);
   console.log(output);
   console.log(sol);
});

