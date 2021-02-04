/**
 * Time Started Reading: 3:46pm
 * Time Started Coding: 3:56pm
 * Time Finished: 4:15pm
 *    - Faster than 90.79% of Typescript Submissions
 * Time Optimized:
 * 
 Do not return anything, modify nums in-place instead.
 */
function permuteUnique(nums: number[]): number[][] {
  let perms = permute47(nums);

  let permsUnique = new Array<Array<number>>();

   for (let i = 0; i < perms.length; ++i) {
      let dup = false;
      for (let j = 0; j < perms.length; ++j) {

         if (arraysEqual47(perms[i], perms[j]) && j < i) {
            dup = true;
           // console.log(perms[i]);
          //  console.log(perms[j]);
         }

      }
      if (!dup) {
         permsUnique.push(perms[i]);
      }
   }

  return permsUnique;
};


function permute47(nums: number[]): number[][] {
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
         let curPerms = permute47(nums);
         for (let j = 0; j < curPerms.length; ++j) {
            perms.push([head, ...curPerms[j]]);
         }
         nums.push(head);
      }
   }
   return perms;
};
function arraysEqual47(a1: Array<number>,a2: Array<number>) {
   /* WARNING: arrays must not contain {objects} or behavior may be undefined */
   return JSON.stringify(a1)==JSON.stringify(a2);
}
let input = [1,1,2];
let output = permuteUnique(input);
console.log(output); 