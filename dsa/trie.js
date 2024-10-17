class TrieNode {
  constructor() {
    this.children = {};
    this.count = 0;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
      node.count++;
    }
  }

  count_prefix(prefix) {
    let node = this.root;
    for (let char of prefix) {
      if (!node.children[char]) {
        return 0;
      }
      node = node.children[char];
    }
    return node.count;
  }
}

function contacts(queries) {
  const trie = new Trie();
  const found = [];

  for (let query of queries) {
    const [instruction, name] = query.split(' ');
    if (instruction === 'add') {
      trie.insert(name);
    } else if (instruction === 'find') {
      found.push(trie.count_prefix(name));
    }
  }

  return found;
}

// console.log(contacts(['add hack', 'add hackerrank', 'find hac', 'find hak'])); // [2, 0]
