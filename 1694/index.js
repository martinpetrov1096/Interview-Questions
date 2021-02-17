function reformatNumber(number) {

   number = number.replace(/-/g, '').replace(/ /g, '');
   let i = 0;
   let numArr = [...number]; 
   if (numArr.length <= 3) {
      return numArr.join('');
   }
   /* Break into blocks of length 3 */
   if (numArr.length % 3 == 0) {
     
      let s = breakEveryThree(numArr, numArr.length).join('');
      return s.substring(0, s.length -1);

   }
   /* Break into 3 until last 4 chars,
    * then break into 2 2 chars 
    */
   else if (numArr.length % 3 == 1) {

      let t = [
         ...breakEveryThree(numArr, numArr.length - 4),
         numArr[numArr.length- 4],
         numArr[numArr.length-3],
         '-',
         numArr[numArr.length-2],
         numArr[numArr.length-1]
      ];
      console.log(t.join(''));
      return t.join('');
   } 
   /** Break into 3 until last 2 chars
    * then break into 1 2 chars
    */
   else {
      let t = [
         ...breakEveryThree(numArr, numArr.length - 2),
         numArr[numArr.length-2],
         numArr[numArr.length-1]
      ];
      console.log(t.join(''));
      return t.join('');
   }


};

function breakEveryThree(number, max) {

   let numFormat = [];
   let j = 0;
   for (let i  = 0; i < max; ++i) {

      if (i % 3 === 0 && i != 0) {
         numFormat[j] = '-';
         ++j;
      }
      numFormat[j] = number[i];  
      ++j;

      if (i == max - 1) {
         numFormat[j] = '-';
      }
   }
   return numFormat;
}


console.log(reformatNumber('1-23-45 6'));