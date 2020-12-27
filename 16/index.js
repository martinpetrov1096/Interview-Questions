/**
 * 3Sum Closest
 *
 * Given an array nums of n integers and an integer target, find three integers
 * in nums such that the sum is closest to target. Return the sum of the three
 * integers. You may assume that each input would have exactly one solution.
 *
 * Example 1
 * Input: nums = [-1,2,1,-4], target = 1
 * Output: 2
 * Explanation: The sum that is closest to the target is 2. (-1+2+1 = 2)
 */
function threeSumClosest(nums, target) {
    /**
     * Sort the numbers first
     */
    let sortedNums = nums.sort((a, b) => {
        return a - b;
    });
    let bestSum = Infinity;
    for (const [i, num1] of sortedNums.entries()) {
        for (const [j, num2] of sortedNums.entries()) {
            /* Make sure you're not using the same number */
            if (i == j) {
                continue;
            }
            const curSum = closestSum(sortedNums, target, num1, num2, i, j);
            if (Math.abs(curSum - target) < Math.abs(bestSum - target)) {
                bestSum = curSum;
            }
        }
    }
    return bestSum;
};
function closestSum(sortedNums, target, num1, num2, i, j) {
    /* num3Target represents the ideal number */
    let num3Target = target - num1 - num2;
    /* Randomly set num3 to be a certain value */
    let num3 = sortedNums[getRandIdx(i, j, sortedNums.length)];
    let l = 0;
    let r = sortedNums.length - 1;
    let m;
    while (l <= r) {
        m = Math.floor((l + r) / 2);
        if (Math.abs(sortedNums[m] - num3Target) < Math.abs(num3 - num3Target) && m != i && m != j) {
            num3 = sortedNums[m];
        }
        if (sortedNums[m] < num3Target) {
            l = m + 1;
            console.log('yo');
        }
        else {
            r = m - 1;
            console.log('hey');
        }
    }
    return num1 + num2 + num3;
    ;
}
function getRandIdx(i, j, size) {
    let curIdx;
    do {
        curIdx = Math.floor(Math.random() * size);
    } while (curIdx == i || curIdx == j);
    return curIdx;
}
let nums = [0, 5, -1, -2, 4, -1, 0, -3, 4, -5];
let target = 1;
let answer = threeSumClosest(nums, target);
console.log(answer);
//# sourceMappingURL=index.js.map