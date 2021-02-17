/**
 * Time Started Reading: 6:23pm
 * Time Started Coding: 6:30pm
 * Time "Finished" 6:44pm - Pretty slow
 *    - Ran into dumb leetcode error
 * Time Optizized: 6:52pm - 6:58pm
 *    - Beat 100% of other solutions
 *
 *
 * Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.
 * Return the quotient after dividing divident by divisor
 * The integer division should truncate towards 0, which means losing its fracitonal part
 *
 * @param dividend
 * @param divisor
 */
function divide(dividend, divisor) {
    /* See if answer should be negative */
    let neg = false;
    dividend < 0 ? neg = !neg : null;
    divisor < 0 ? neg = !neg : null;
    /* Make sure numbers are positive */
    let quotient = 0;
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);
    while ((dividend - divisor) >= 0) {
        let value = divisor;
        let multiple = 1;
        while (value + value <= dividend) {
            value += value;
            multiple += multiple;
        }
        dividend -= value;
        quotient += multiple;
    }
    return neg ? -quotient : quotient;
}
;
let tests29 = new Map();
tests29.set([10, 3], 3);
tests29.set([7, -3], -2);
tests29.set([0, 1], 0);
tests29.set([1, 1], 1);
tests29.set([-2147483648, 1], -2147483648);
tests29.forEach((answer, [dividend, divisor]) => {
    let output = divide(dividend, divisor);
    if (output != answer) {
        console.log('Error: Output: ' + output + ' Expected Output: ' + answer);
    }
    else {
        console.log('Test Case Passed');
    }
});
//# sourceMappingURL=index.js.map