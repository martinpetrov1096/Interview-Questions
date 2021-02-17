/**
 * Time Started Reading: 4:10pm
 * Time Started Coding: 4:24pm
 * Time Finished: 4:28pm
 * Time Optimized: 5:19pm
 *
 * Notes:
 *   - Very Slow Solution (Only faster than 6.33%)
 *    - Removed let, and got it up to 36.71%
 *    - Looked at solution, implemented it
 * Time spent cleaning up test cases: 4:35pm - 4:45pm
 *
 * Input: height = [1,8,6,2,5,4,8,3,7]
 * Output: 49
 * Explanation: The above ver
 *
 */
function maxArea(height) {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;
    let curArea = 0;
    while (left != right) {
        curArea = Math.min(height[left], height[right]) * (right - left);
        if (maxArea < curArea) {
            maxArea = curArea;
        }
        if (height[right] < height[left]) {
            --right;
        }
        else {
            ++left;
        }
    }
    return maxArea;
}
;
// function maxArea(height: number[]): number {
//    let maxArea = 0;
//    let curArea = 0;
//    let waterHeight = 0;
//    let waterLength = 0;
//    for (let i = 0; i < height.length; ++i) {
//       let prevHeight: number;
//       for (let j = height.length - 1; j >= 0; --j) {
//          if (height[j] < prevHeight) {
//             continue;
//          }
//          waterHeight = Math.min(height[i], height[j]);
//          waterLength = j - i;
//          curArea = waterLength * waterHeight;
//          if (maxArea < curArea) {
//             maxArea = curArea;
//          }
//       }
//    }
//    return maxArea;
// };
let testCases11 = new Map();
testCases11.set([1, 8, 6, 2, 5, 4, 8, 3, 7], 49);
testCases11.set([4, 3, 2, 1, 4], 16);
testCases11.set([1, 2, 1], 2);
testCases11.forEach((sol, input) => {
    let output = maxArea(input);
    if (sol != output) {
        console.log('Error: Output: ' + output + ' Expected Output: ' + sol);
    }
    else {
        console.log('Test Case Passed!');
    }
});
//# sourceMappingURL=index.js.map