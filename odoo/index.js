
function packItem(itemName, numItems) {
   const boxes = Object.entries(products[itemName]);

   /**
    * Return early if there 
    * is nothing to pack
    */
   if (boxes.length == 0) {
      return {
         [itemName]: {
            'packs': [],
            'quantity': numItems
         }  
      };
   }
   const sortedBoxes = boxes.sort(([, aSize],[, bSize]) => aSize - bSize);
   let numItemsLeft = numItems;
   let packedBoxes = [];

   while (numItemsLeft > 0) {
      let smallestBoxIdx = sortedBoxes.findIndex(([, size]) => size > numItemsLeft);

      /**
       * Means that we have more items to pack
       * than even the biggest box has capacity
       * for. Therefore, we can safely grab the 
       * biggest box.
       */
      if (smallestBoxIdx == -1) {
         smallestBoxIdx = sortedBoxes.length - 1;
      }
      /**
       * The number of items in the box is either
       * the max capacity of the box if numItemsLeft
       * is greater than the capacity of the box, or 
       * is just numItemsLeft
       */
      const itemsInBox = Math.min(sortedBoxes[smallestBoxIdx][1], numItemsLeft);
      packedBoxes.push([sortedBoxes[smallestBoxIdx][0], itemsInBox]);
      numItemsLeft -= itemsInBox;
   }
   return {
      [itemName]: {
         'packs': packedBoxes,
         'quantity': numItems
      }  
   };
}

function packOrder(items) {
   let packedOrder = {};
   for(itemName in items) {
      packedOrder = { 
         ...packedOrder,
         ...packItem(itemName, items[itemName])
      };
   }
   return packedOrder;
}

function packOrders(orders) {
   let packedOrders = {};
   for (orderNum in orders) {
      packedOrders[orderNum] = packOrder(orders[orderNum]);
   }
   return packedOrders;
}



const output = packOrders(orders);
const formatedOutput = JSON.stringify(output, null, 4);

console.log(formatedOutput);