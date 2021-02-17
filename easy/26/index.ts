/**
 * Given a sorted array nums, remove the duplicates in place 
 * such that each element appears only once and returns the new length
 * 
 * Time Started Reading: 7:07pm
 * Time Started Coding: 7:10pm
 * Time Finished: 7:32pm
 *    - Faster than 99.03% of submissions
 * Time optimized:
 * 
 */

function removeDuplicates(nums: number[]): number 
{
   if (nums.length == 0) return 0;
   let numUniqueVals = 1;

   for (let i = 1; i < nums.length; ++i) {

      if (nums[i] != nums[i-1]) {
         nums[numUniqueVals] = nums[i];
         ++numUniqueVals;
      }
   }
   return numUniqueVals;
};

let input26 = [1,1,2];

let answer26 = removeDuplicates(input26);

console.log(answer26);
console.log(input26);