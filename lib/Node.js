//Node.js
export default class Node {
  constructor(data = null, children = {}, lastLetter) {
    this.data = data;
    this.children = children;
    this.lastLetter = false; // done looping change last letter to true
  }
}