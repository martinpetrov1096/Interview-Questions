function balanced(S) {

   let minBalance = -1;

   for (let i = 0; i < S.length; ++i) {

      let lowerCaseArr = new Array();
      let upperCaseArr = new Array();

      for (let j = i; j < S.length; ++j) {
         let curChar = S[j];

         if (isLowerCase(curChar)) {
            lowerCaseArr.push(curChar);
         } else {
            upperCaseArr.push(curChar);
         }
         if (checkBalance(lowerCaseArr, upperCaseArr)) {

            let curLen = lowerCaseArr.length + upperCaseArr.length;

            if (minBalance == -1 || curLen < minBalance) {
               minBalance = curLen;
            }
            break;
         }
      }
   }
   return minBalance;
}

/**
 * Just returns true if its lowerCase
 */
function isLowerCase(str) {
    return str == str.toLowerCase() && str != str.toUpperCase();
}

/**
 * Returns true if everything in the lower case
 * array is in the upper case array, and vice versa
 */
function checkBalance(lowerCaseArr, upperCaseArr) {
   let balanced = true;

   lowerCaseArr.forEach((l) => {
      if (!upperCaseArr.find((u) => u === l.toUpperCase())) {
         balanced = false;
      }
   });
   upperCaseArr.forEach((u) => {
      if (!lowerCaseArr.find((l) => u === l.toUpperCase())) {
         balanced = false;
      }
   });
   return balanced;
}






input = 'AbaBaaaaa';

console.log(balanced(input))