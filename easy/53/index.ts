/**
 * Time Started Reading: 5:35pm
 * Time Started Coding: 5:35pm
 * Time Finished: 5:37pm
 *    - Faster than 17.00% of Typescript Submissions
 * Time Optimized: 5:55pm (looked at discussion)
 * 
 */

function maxSubArray(nums: number[]): number {

   let max = - Number.MAX_VALUE;
   let prev = 0;

   for (let i = 0; i < nums.length; ++i) {
      prev = Math.max(prev + nums[i], nums[i]);
      max = Math.max(prev, max);

   }

   return max;


};


const input47 = [-2,1,-3,4,-1,2,1,-5,4];
const output47 = maxSubArray(input47);

console.log(output47);
