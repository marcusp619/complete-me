import Node from './Node';

export default class Trie {
  constructor(length, head = null) {
    this.length = length;
    this.head = head;
  }

  insert(word) {
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
        // console.log(testNode); // see line 44
        testNode = testNode.children[letter];
      }
    });
  }
}