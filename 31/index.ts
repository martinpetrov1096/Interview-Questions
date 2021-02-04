/**
 * Time Started Reading: 7:55pm
 * Time Started Coding: 7:55pm
 * 
 * Misunderstood, so new times: 
 * Time Started Coding: 8:03pm
 * Time Finished: 9:15pm
 * Time Optimized:
 * 
 Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums: number[]): void {

   let firstDec: number | undefined;
   let i = nums.length -1;
   for (; i >= 0; --i) {
      /* Grab first descending num */
      if (i > 0 && nums[i-1] < nums[i]) {
         firstDec = nums[i-1];
         break;
      }
   }

   let firstDecLoc = i-1;
   if (firstDec == undefined) {
      sort(nums,0);
      return;
   }

   let nextBiggest = nums[i];
   let nextBiggestLoc = i;
   for (; i < nums.length; ++i) {
      if (nums[i] < nextBiggest && nums[i] > firstDec) {
         nextBiggest = nums[i];
         nextBiggestLoc = i;
      }
   }


   let tmp = nums[firstDecLoc];
   nums[firstDecLoc] = nums[nextBiggestLoc];
   nums[nextBiggestLoc] = tmp;

   sort(nums, firstDecLoc+1);
};

function sort(nums: Array<number>, j) {
   let notSorted = true;
   do{
      notSorted = false;
      for (let i = nums.length-1; i > j; --i) {

         if (i > 0 && nums[i-1] > nums[i]) {
            const bigger = nums[i-1];
            nums[i-1] = nums[i];
            nums[i] = bigger;
            notSorted = true;
         }
      }
   } while (notSorted);
}

let testCases31 = new Map<Array<number>, Array<number>>();
testCases31.set([1,2,3], [1,3,2]);
testCases31.set([3,2,1], [1,2,3]);
testCases31.set([1,1,5], [1,5,1]);
testCases31.set([1], [1]);


testCases31.forEach((sol, input) => {
   let output = nextPermutation(input);
   if (!arraysEqual(input, sol)) {
      console.log('Error: Output: ' + input + ' Expected Output: '  + sol);
   } else {
      console.log('Test Case Passed!');
   }
})
let arr = [1,5,8,4,7,6,5,3,1];

nextPermutation(arr);
console.log(arr);

function arraysEqual(a1: Array<number>,a2: Array<number>) {
   /* WARNING: arrays must not contain {objects} or behavior may be undefined */
   return JSON.stringify(a1)==JSON.stringify(a2);
}