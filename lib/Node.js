//Node.js
export default class Node {
  constructor(data = null, lastLetter = false, children) {
    this.data = data;
    this.children = {} || children;
    this.lastLetter = lastLetter; // done looping change last letter to true
    this.word;
  }
}