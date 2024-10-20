function bubbleSort(array) {
  let iterationCount = 0;
  let didWeSwap = true;
  const length = array.length - 1;

  while (iterationCount < length && didWeSwap) {
    const innerForLength = length - iterationCount;
    for (let i = 0; i < innerForLength; i++) {
      const nextIndex = i + 1;
      if (nextIndex > innerForLength) {
        continue;
      }

      if (array[i] > array[nextIndex]) {
        const temp = array[i];
        array[i] = array[nextIndex];
        array[nextIndex] = temp;
        didWeSwap = true;
      }
    }
    iterationCount++;
    didWeSwap = false;
  }

  return array;
}

// console.log(bubbleSort([1, 2, 3, 5, 4, 6, 7]));
// console.log(bubbleSort([8, 7, 3, 2, 1, 5, 9, 6]));

function mergeArray(firstArray, secondArray) {
  const result = [];
  let firstArrayIndex = 0;
  let secondArrayIndex = 0;

  while (firstArrayIndex < firstArray.length && secondArrayIndex < secondArray.length) {
    if (secondArray[secondArrayIndex] > firstArray[firstArrayIndex]) {
      result.push(firstArray[firstArrayIndex]);
      firstArrayIndex++;
    } else {
      result.push(secondArray[secondArrayIndex]);
      secondArrayIndex++;
    }
  }

  if (firstArrayIndex < firstArray.length) {
    for (let i = firstArrayIndex; i < firstArray.length; i++) {
      result.push(firstArray[i]);
    }
  }

  if (secondArrayIndex < secondArray.length) {
    for (let i = secondArrayIndex; i < secondArray.length; i++) {
      result.push(secondArray[i]);
    }
  }

  return result;
}

// console.log(mergeArray([1, 3, 5, 7, 9], [2, 4, 6, 8]));

function mergeSort(array) {
  if (array.length <= 1) return array;
  const middle = Math.floor(array.length / 2);
  let left = mergeSort(array.slice(0, middle));
  let right = mergeSort(array.slice(middle));

  return mergeArray(left, right);
}

// console.log(mergeSort([10, 76, 24, 73, 6, 20, 51, 22, 99, 1]));

// console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]));

function quickSort(array, start = 0, end = array.length - 1) {
  if (start < end) {
    const pivotIndex = pivot(array, start, end);
    quickSort(array, start, pivotIndex - 1);
    quickSort(array, pivotIndex + 1, end);
  }

  return array;
}

// console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]));

// RADIX SORT

function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function getDigitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;

  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, getDigitCount(nums[i]));
  }

  return maxDigits;
}

// JUST WORKS FOR POSITIVE NUMBERS
function radixSort(nums) {
  const totalIterations = mostDigits(nums);
  let iterationsCounter = 0;

  while (iterationsCounter < totalIterations) {
    let digitBuckets = Array.from({ length: 10 }, () => []);

    for (let i = 0; i < nums.length; i++) {
      const number = nums[i];
      const digit = getDigit(number, iterationsCounter);
      digitBuckets[digit].push(number);
    }

    nums = digitBuckets.flat();
    iterationsCounter++;
  }

  return nums;
}

console.log(radixSort([1, 20, 222, 3, 234, 54, 2, 5, 335453, 65, 76, 7, 2342]));
