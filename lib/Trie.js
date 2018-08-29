import Node from './Node';
import fs from 'fs';

const text = "/usr/share/dict/words";
const dictionary = fs.readFileSync(text).toString().trim().split('\n');

export default class Trie {
  constructor(length, head) {
    this.length = length;
    this.head = head || null;
    this.total = 0;
    this.dictionary = dictionary;
  }

  insert(word) {
    this.total++;
    let splitWord = word.toLowerCase().split('');
    // console.log(splitWord);// [h, e, y];
    
    let testNode = this.head; 
    // console.log(testNode); //null
    
    if (!this.head) {
      this.head = new Node(); 
      testNode = this.head;
      // console.log(testNode); // Node { data: null, children: {}, lastLetter: false }
    }

    splitWord.forEach(letter => {  
      // console.log(letter);
      if (testNode.children[letter]) {
        testNode = testNode.children[letter];
      } else {
        testNode.children[letter] = new Node(letter);
        // console.log(testNode);
        testNode = testNode.children[letter];
      }
    });
  }

  count() {
    return this.total;
  }

  populate(dictionary) {
    dictionary.forEach(word => {
      this.insert(word);
    });
  }
}