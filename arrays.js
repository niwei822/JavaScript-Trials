'use strict';

// 1. printIndices
function printIndices(items) {
  // Replace this with your code
let i = 0;
for (const item of items) {
  console.log(`${item} ${i}`)
  i += 1;
}
}

// 2. everyOtherItem
function everyOtherItem(items) {
  // Replace this with your code
  const evenItems = [];
  for (let i = 0; i < items.length; i ++) {
    if (i % 2 == 0) {
      evenItems.push(items[i]);
  }
}
  console.log(evenItems);
}

// 3. smallestNItems
function smallestNItems(items, n) {
  // Replace this with your code
    const sortedItems = items.sort((a, b) => a - b).slice(0, n);
    console.log(sortedItems.reverse());
  
}
//printIndices(["apple", "orange", "pear"])
//everyOtherItem([7, 8, 10, 1, 2, 2])
//[1,2,3,4,5] n=3
//[5,4,3]
smallestNItems([1,2,3,4,5,6], 4)