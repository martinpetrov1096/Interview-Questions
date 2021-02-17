
/**
 * Time Started Reading: 5:20pm
 * Time Started Coding: 5:24pm
 * Time Finished: 5:32pm
 * Time Optimized: n/a
 * 
 * Results: Faster than 98.29%
 * 
 * Given an array nums and a value val, remove all instances of that 
 * value in place and return the new length
 * @param nums 
 * @param val 
 */
function removeElement(nums: number[], val: number): number {
   let shift = 0;
   let len = 0;
   for (let i = 0; i < nums.length; ++i) {
      if (nums[i] == val) {
         ++shift;
      } else {
         nums[i - shift] = nums[i];
         ++len;
      }
   } 
   return len;
};

let nums27 = [0,1,2,2,3,0,4,2];
let val27 = 2;

let answer27 = removeElement(nums27, val27);
console.log(answer27);
console.log(nums27);
