const isValidAnagram = (firstString, secondString) => {
  if (firstString.length !== secondString.length) {
    return false;
  }

  const letters = {};
  for (let char of firstString) {
    letters[char] = (letters[char] || 0) + 1;
  }

  for (let char of secondString) {
    if (!letters[char]) {
      return false;
    } else {
      letters[char]--;
    }
  }

  return true;
};

console.log(isValidAnagram('', '') === true);
console.log(isValidAnagram('listen', 'silent') === true);
console.log(isValidAnagram('triangle', 'integral') === true);
console.log(isValidAnagram('apple', 'pale') === false);
console.log(isValidAnagram('rat', 'car') === false);
console.log(isValidAnagram('aabbcc', 'abcabc') === true);
console.log(isValidAnagram('abcd', 'dcba') === true);
console.log(isValidAnagram('abcd', 'abcc') === false);
console.log(isValidAnagram('aaz', 'zza') === false);
console.log(isValidAnagram('anagram', 'nagaram') === true);
console.log(isValidAnagram('awesome', 'awesom') === false);
console.log(isValidAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') === false);
console.log(isValidAnagram('qwerty', 'qeywrt') === true);
console.log(isValidAnagram('texttwisttime', 'timetwisttext') === true);
