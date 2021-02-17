/**
 * Started: ~ 3:20pm
 * Ended: ~4:30pm
 * Ended:
 * Biggest Issues
 *    - Had a really stupid mistake where i confused lwindow and rwindow (wasted 20 min)
 *    - Wanted to not run 2 seperate functions for even and odd length palindromes (baab vs bab)
 *       - Ended up having to do it
 *
 * Given a string s, return the longest palindromic substring in s
 *
 * Example:
 * Input: s = 'babad'
 * Output: 'bab'
 * Note: 'aba' is also a valid answer
 *
 * @param s the inputted string
 */
function longestPalindrome(s) {
    let longest = '';
    for (let [i, c] of [...s].entries()) {
        let curPalindrome;
        let lWindow = i - 1;
        let rWindow = i + 1;
        let p1 = palindrome(s, lWindow, rWindow);
        let p2 = palindrome(s, lWindow, rWindow + 1);
        console.log('p1: ' + p1 + ' p2: ' + p2);
        if (p1.length > p2.length) {
            curPalindrome = p1;
        }
        else {
            curPalindrome = p2;
        }
        if (curPalindrome.length > longest.length) {
            longest = curPalindrome;
        }
    }
    return longest;
}
;
function palindrome(s, lWindow, rWindow) {
    let curPalindrome = s.slice(lWindow + 1, rWindow);
    if (curPalindrome.length == 2 && curPalindrome[0] != curPalindrome[1]) {
        return '';
    }
    while (true) {
        /* If window boundries are greater than the string */
        if (lWindow < 0 || rWindow > s.length - 1) {
            break;
        }
        let cl = s[lWindow];
        let cr = s[rWindow];
        if (cl == cr) {
            curPalindrome = cl + curPalindrome + cr;
        }
        else {
            break;
        }
        --lWindow;
        ++rWindow;
    }
    return curPalindrome;
}
let s = 'cbbd';
let result = longestPalindrome(s);
console.log(result);
//# sourceMappingURL=index.js.map