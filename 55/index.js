/**
 * Time Started Reading: 4:46pm
 * Time Started Coding: 4:58pm
 * Time Finished: 5:05pm (Time limit exceeded on test case 72/75, but i think it works)
 * Time Optimized:
 *
 *
 *
 */
function canJump(nums) {
    console.log(nums);
    /**
     * This means we got to the end
     * of the list, so its good
     */
    if (nums.length === 1) {
        console.log('here?');
        return true;
    }
    /**
     * This is the maximum amount
     * of steps we are allowed to take
     */
    const curMaxSteps = nums.shift();
    /**
     * Basically means we can't move
     */
    if (curMaxSteps === 0) {
        return false;
    }
    if (curMaxSteps === undefined) {
        // console.log(nums);
        console.error('Yo there\'s an issue');
        return false;
    }
    for (let i = 0; i < curMaxSteps; ++i) {
        const childArr = nums.slice(i);
        // console.log(childArr);
        /**
         * If the head of the child array
         * is a value smaller than the current
         * top
         */
        if (childArr[0] < curMaxSteps - i && childArr.length >= curMaxSteps - i) {
            continue;
        }
        /**
         * If any of the recursive children
         * found a route, and returned true,
         * then return true
         */
        console.log(childArr);
        if (canJump(childArr)) {
            return true;
        }
    }
    /**
     * Should only return false after
     * all children have exhausted all
     * routes
     */
    return false;
}
;
const input55 = new Map();
input55.set([2, 0, 0], true);
input55.set([3, 2, 1, 0, 4], false);
console.log(canJump([1, 1, 0]));
if (0) {
    input55.forEach((output, input) => {
        if (canJump(input) != output) {
            console.error('Wrong output for: ' + input);
        }
    });
}
//# sourceMappingURL=index.js.map