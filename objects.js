'use strict';

// 1. countWords
function countWords(phrase) {
  // Replace this with your code
  var dict = {};
  for (const word of phrase.split(" ")) {
    if (dict[word]) {
      dict[word] += 1
    } else {
      dict[word] = 1
    }
  }
console.log(dict)
}

// 2. getMelonsAtPrice
function getMelonsAtPrice(price) {
  // Replace this with your code
  const melon_prices = {
    2.50: ['Cantaloupe', 'Honeydew'],
    2.95: ['Watermelon'],
    3.25: ['Musk', 'Crenshaw'],
    14.25: ['Christmas']
}
if (melon_prices.hasOwnProperty(price)) {
  console.log(melon_prices[price].sort())
}

}
