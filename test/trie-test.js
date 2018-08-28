import { assert, expect } from 'chai';
import Trie from '../lib/Trie';
import Node from '../lib/Node';


describe('Trie', () => {
  let trie;

  beforeEach(() => {
    trie = new Trie();
  });

  it('should be a function', () => {
    assert.isFunction(Trie);
  });

  it('should set its default head to null', () => {
    expect(trie.head).to.eq(null);
  });

  // describe('insert', () => {
  //   it.skip('should take in a word as an argument', () => {
  //     // assert.equal(new Trie(data), )
  //   });
  //   it.skip('should change all words into lowercase', () => {

  //   });
  //   it.skip('should take the word and make an array', () => {

  //   });

  // });
});

  // insert method
    //take a word
    //lowercase it
    //split the word into letters
    //if letter is not node create a node and then shift off first letter
    //the letter is a node skip and check next one


});