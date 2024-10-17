// TODO: IMPROVE THIS CLASS

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
    this.size = size;
  }

  _hash(key, arrayLength) {
    let total = 0;
    let PRIME = 8191;
    const length = Math.min(key.length, 50);

    for (let i = 0; i < length; i++) {
      let value = key[0].charCodeAt(0) - 96;
      total = (total * PRIME + value) % arrayLength;
    }

    return total;
  }
  set(key, value) {
    const hashedKey = this._hash(key, this.size);
    const currentPositionValue = this.keyMap[hashedKey];

    if (!currentPositionValue) {
      this.keyMap[hashedKey] = [];
    }
    this.keyMap[hashedKey].push([key, value]);
  }

  get(key) {
    const hashedKey = this._hash(key, this.size);
    const currentPositionValue = this.keyMap[hashedKey];
    let value;

    if (!currentPositionValue) {
      return undefined;
    }

    for (let i = 0; i < currentPositionValue.length; i++) {
      if (currentPositionValue[i][0] === key) {
        value = currentPositionValue[i][1];
        break;
      }
    }

    return value;
  }

  keys() {
    const result = [];

    for (let i = 0; i < this.keyMap.length; i++) {
      const itemArray = this.keyMap[i];
      if (itemArray) {
        for (let j = 0; j < itemArray.length; j++) {
          // TODO: DO NOT ALLOW TO REPEAT KEY
          if (!result.includes(itemArray[j][0])) {
            result.push(itemArray[j][0]);
          }
        }
      }
    }

    return result;
  }

  values() {
    const result = [];

    for (let i = 0; i < this.keyMap.length; i++) {
      const itemArray = this.keyMap[i];
      if (itemArray) {
        for (let j = 0; j < itemArray.length; j++) {
          if (!result.includes(itemArray[j][1])) {
            result.push(itemArray[j][1]);
          }
        }
      }
    }

    return result;
  }
}

const hashTable = new HashTable();

hashTable.set('hola', 'holaValue');
hashTable.set('blue', 'blueValue');
hashTable.set('red', 'redValue');
hashTable.set('gray', 'grayValue');
hashTable.set('pink', 'pinkValue');
hashTable.set('orange', 'orangeValue');
hashTable.set('brown', 'brownValue');
hashTable.set('black', 'blackValue');
hashTable.set('white', 'whiteValue');
// console.log(hashTable.get('white'));
// console.log(hashTable.get('black'));
// console.log(hashTable.get('orange'));
console.log(hashTable.keys());
console.log(hashTable.values());
console.log(hashTable.get('cat'));
