/**
 * Time Started Reading: 6:48pm
 * Time Started Coding: 6:58pm
 * Time Finished: 8:20pm
 * Time Optimized:
 *
 * THANKS LEETCODE SPENT 2 HOURS TRYING TO DEBUG UR SITE
 * Debugging Random TS error: 7:10pm - 7:21pm
 *
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

// class ListNode {
//      val: number
//      next: ListNode | null
//      constructor(val?: number, next?: ListNode | null) {
//          this.val = (val===undefined ? 0 : val)
//          this.next = (next===undefined ? null : next)
//      }
// }



function swapPairs(head: ListNode | null): ListNode | null {

   let curNode = head;
   let listArr = new Array<ListNode>();

   let bufNode: ListNode | null;
   bufNode = null;

   while (curNode != null) {

      if (curNode.next != null) {
         bufNode = curNode.next.next;
         curNode.next.next = curNode;
         listArr.push(curNode.next);
         curNode = bufNode;
      } else {
         break;
      }
   }

   for (let i = 0; i < listArr.length; ++i) {
      if (listArr[i].next == null) {
         break
      }
      let tmp: ListNode | null;
      tmp = listArr[i].next;
      if (tmp == null) {
         break;
      } else {
         tmp.next = listArr[i+1];

      }
   }
   return listArr[0];
};

function PrintList(list: ListNode | null): string {
   if (list == null) {
      return 'null';
   }
   return list.val + ' -> ' + PrintList(list.next);
}

//let input24 = null;
let input24: ListNode | null;
input24  = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));
//input24 = null;

let output24 = swapPairs(input24);
console.log(PrintList(output24));
