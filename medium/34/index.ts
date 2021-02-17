function searchRange(nums: number[], target: number): number[] {

   if (nums.length == 0) {
      return [-1,-1];
   }
   let min = findMin(nums,target);

   if (nums[min] != target) {
      return [-1,-1];
   }
   let max = findMax(nums, target);

   return [min,max];
   
};

function findMin(arr: Array<number>, target): number {

   let left = 0;
   let right = arr.length - 1;
   while (left < right) {

      let i = Math.floor((left + right) / 2);
      if (arr[i] > target || target == arr[i]) {
         right = i;
      } else {
         left = i +1;
      }
   }
   return left;
}

function findMax(arr: Array<number>, target): number {

   let left = 0;
   let right = arr.length - 1;

   while (left < right) {

      let i = Math.floor((left + right) / 2);
      if (arr[i] > target) {
         right = i;
      } else {
         left = i +1;
      }
   }
   return left -1;
}


let nums34 = [1,2,3,3,3,4,4];
const target34 = 3;

console.log(searchRange(nums34,target34));

