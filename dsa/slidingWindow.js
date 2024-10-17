// function maxSubArraySum(array, numberOfElements) {
//   if (!array.length || numberOfElements > array.length || numberOfElements <= 0) return null;
//   let previousSum = array[0];
//   let biggerSum = 0;

//   for (let i = 0; i < array.length - 1; i++) {
//     const sumWithOutFirstItem = previousSum - array[i];
//     const currentSum = sumWithOutFirstItem + array[i + 1];

//     if (currentSum > biggerSum) {
//       biggerSum = currentSum;
//     }
//     previousSum = currentSum;
//   }

//   return biggerSum;
// }
function maxSubArraySum(array, numberOfElements) {
  if (!array.length || numberOfElements > array.length || numberOfElements <= 0) return null;

  let currentSum = 0;
  for (let i = 0; i < numberOfElements; i++) {
    currentSum += array[i];
  }

  let biggerSum = currentSum;

  for (let i = numberOfElements; i < array.length; i++) {
    currentSum = currentSum - array[i - numberOfElements] + array[i];
    if (currentSum > biggerSum) {
      biggerSum = currentSum;
    }
  }

  return biggerSum;
}

console.log(maxSubArraySum([1, 2, 3, 4, 5, 1], 2)); // Expected output: 9 (4 + 5)
console.log(maxSubArraySum([1, 2, 3, 4, 5], 3)); // Expected output: 12 (3 + 4 + 5)
console.log(maxSubArraySum([1, -2, 3, 4, -5, 6], 2)); // Expected output: 7 (3 + 4)
console.log(maxSubArraySum([1, -2, 3, 4, -5, 6], 3)); // Expected output: 8 (3 + 4 + 1)
console.log(maxSubArraySum([1, 2, 3, 4, 5], 5)); // Expected output: 15 (1 + 2 + 3 + 4 + 5)
console.log(maxSubArraySum([], 3)); // Expected output: null (empty array)
console.log(maxSubArraySum([1, 2, 3], 0)); // Expected output: null (numberOfElements is 0)
console.log(maxSubArraySum([1, 2, 3], 4)); // Expected output: null
