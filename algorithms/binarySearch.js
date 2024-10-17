function binarySearch(sortedArray, expectedValue) {
  let left = 0;
  let right = sortedArray.length - 1;

  while (left <= right) {
    const floatMiddleValue = (left + right) / 2;
    const middle = Math.floor(floatMiddleValue);

    if (sortedArray[middle] === expectedValue) {
      return middle;
    } else if (expectedValue > sortedArray[middle]) {
      left = middle + 1;
    } else if (expectedValue < sortedArray[middle]) {
      right = middle - 1;
    }
  }

  return -1;
}

const sortedArray1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sortedArray2 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const sortedArray3 = [-10, -5, 0, 5, 10, 15, 20, 25, 30, 35];

console.log(binarySearch(sortedArray1, 5)); // Expected output: 4 (index of 5)
console.log(binarySearch(sortedArray1, 1)); // Expected output: 0 (index of 1)
console.log(binarySearch(sortedArray1, 10)); // Expected output: 9 (index of 10)
console.log(binarySearch(sortedArray1, 11)); // Expected output: -1 (11 is not in the array)

console.log(binarySearch(sortedArray2, 30)); // Expected output: 2 (index of 30)
console.log(binarySearch(sortedArray2, 100)); // Expected output: 9 (index of 100)
console.log(binarySearch(sortedArray2, 15)); // Expected output: -1 (15 is not in the array)

console.log(binarySearch(sortedArray3, 0)); // Expected output: 2 (index of 0)
console.log(binarySearch(sortedArray3, -10)); // Expected output: 0 (index of -10)
console.log(binarySearch(sortedArray3, 35)); // Expected output: 9 (index of 35)
console.log(binarySearch(sortedArray3, 40)); // Expected output: -1 (40 is not in the array)
