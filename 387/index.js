/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
   
   let m = new Map();

   [...s].forEach((c,i) => {
      if (m.get(c) === undefined)  {
         m.set(c, i);
      } else {
         m.set(c, -1);
      }
   });

   let firstUnique = -1;
   m.forEach((i) => {
      if ((i != -1 && i < firstUnique) || (i != -1 && firstUnique == -1)) {
         firstUnique = i;
      }
   });
   return firstUnique;
};



let uniqChar = firstUniqChar('loveleetcode');
console.log(uniqChar);