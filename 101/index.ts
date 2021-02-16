import { TreeNode } from '../classes';

function isSymmetric(root: TreeNode | null): boolean {

   return isMirror(root, root);

};


function isMirror(left: TreeNode | null, right: TreeNode | null): boolean {

   if (left === null && right === null) {
      return true;
   } else if (left === null || right === null) {
      return false;
   }

   return left.val === right.val
      && isMirror(left.left, right.right)
      && isMirror(left.right, right.left);




}