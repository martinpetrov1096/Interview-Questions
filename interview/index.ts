

/**
 *  #4: read the string as a stream
 * if cur char == [, then reset curCount,
 * if cur char == ], then compare curCount with max
 * if cur char == , then increment curCount
 * 
 */

function recursivelyRemove(s: string): string {

   const sArr = s.split(' ');

   if (sArr.length == 1) {
      return sArr.join(' ');
   }
   const res = recursivelyRemove(sArr.splice(1, sArr.length).join(' ')).split(' ');
   
   if (res.includes(sArr[0])) {
      return res.join(' ');
   } else {
      return [ sArr[0], ...res].join(' ');
   }
}


function removeDups(s: string): string {

   const sArr = s.split(' ');

   const sSet = new Set(sArr);

   return [...sSet].join(' ');

}


const input_interview = 'test string string etst test string';
const output_interview = recursivelyRemove(input_interview);

console.log(output_interview);