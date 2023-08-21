/* eslint no-undef: "off" */
/* eslint jasmine/no-spec-dupes: "off" */
import {describe, it,beforeEach} from 'node:test';
import assert from 'node:assert/strict';
import { MemoryGame } from '../src/memory.js';

let memoryGame;
describe('MemoryGame constructor', function () {
  beforeEach(function () {
    memoryGame = new MemoryGame([]);
  });

  it('Create MemoryGame object', function () {
    assert.strictEqual(typeof MemoryGame,'function');
  });

  it('MemoryGame should receive `cards` as a parameter and create it own `cards` property', function () {
    assert.strictEqual(MemoryGame.length,1);
  });

  it('MemoryGame should have a pickedCards property', function () {
    assert(typeof memoryGame.pickedCards,'object')
  });

  it('pickedCards property should be an array', function () {
    assert.strictEqual(Array.isArray(memoryGame.pickedCards),true);
  });

  // it('MemoryGame should have a pairsClicked property', function () {
  //   assert.strictEqual(memoryGame.pairsClicked).toBeDefined();
  // });

  it('pairsClicked property should be an array', function () {
    assert.strictEqual(typeof memoryGame.pairsClicked,'number');
  });

  // it('MemoryGame should have a pairsClicked property', function () {
  //   assert.strictEqual(memoryGame.pairsGuessed).toBeDefined();
  // });

  it('pairsClicked property should be an array', function () {
    assert.strictEqual(typeof memoryGame.pairsGuessed,'number');
  });
});

describe('shuffleCard method', function () {
  beforeEach(function () {
    var cardsArray = [{ name: 'aquaman',         img: 'aquaman.jpg' },
    { name: 'batman',          img: 'batman.jpg' },
    { name: 'captain america', img: 'captain-america.jpg' },
    { name: 'fantastic four',  img: 'fantastic-four.jpg' },
    { name: 'flash',           img: 'flash.jpg' },
    { name: 'green arrow',     img: 'green-arrow.jpg' },
    { name: 'green lantern',   img: 'green-lantern.jpg' },
    { name: 'ironman',         img: 'ironman.jpg' },
    ]
    memoryGame = new MemoryGame(cardsArray.concat(cardsArray));
  });

  it('Should be declare', function () {
    assert.strictEqual(typeof memoryGame.shuffleCard,'function');
  });

  it('Should return an array', function () {
    assert.strictEqual(Array.isArray(memoryGame.shuffleCard(memoryGame.cards)),true);
  });

  it('Should mixed the array and return a different one from the original', function () {
    const firstArray = memoryGame.shuffleCard([1,2,3,4,5,6,7,8,9])
    const secondArray = memoryGame.shuffleCard([1,2,3,4,5,6,7,8,9])
    assert.notStrictEqual(firstArray,secondArray);
  });
});

describe('checkIfPair method', function () {
  it('Should be declare', function () {
    assert.strictEqual(typeof memoryGame.checkIfPair,'function');
  });

  it('It should add 1 to `pairsClicked` when we call it', function () {
    memoryGame.checkIfPair(1, 2);
    assert.strictEqual(memoryGame.pairsClicked,1);
  });

  it('It should return true when the comparing cards are the same', function () {
    assert.strictEqual(memoryGame.checkIfPair(2,2),true);
  });

  it('It should return false when the comparing cards are the same', function () {
    assert.strictEqual(memoryGame.checkIfPair(2,3),false);
  });

  it('It should add 1 to pairsGuessed if they are the same card', function () {
    memoryGame.pairsGuessed = 0;
    memoryGame.checkIfPair(2,2)
    assert.strictEqual(memoryGame.pairsGuessed,1);
  });

  it('It should not add anything to pairsGuessed if the not the same card', function () {
    memoryGame.pairsGuessed = 0;
    memoryGame.checkIfPair(2,4)
    assert.strictEqual(memoryGame.pairsGuessed,0);
  });
});

describe('finished method', function () {
  it('Should be declare', function () {
    assert.strictEqual(typeof memoryGame.finished,'function');
  });

  it('It should return false at the beggining of the game', function () {
    let memoryGame = new MemoryGame([])
    assert.strictEqual(memoryGame.finished(),false);
  });

  it('It should return false if there still some pairs to be guessed', function () {
    memoryGame.pairsGuessed = 6;
    assert.strictEqual(memoryGame.finished(),false);
  });

  it('It should return true if all pairs were guessed', function () {
    memoryGame.pairsGuessed = 8;
    assert.strictEqual(memoryGame.finished(),true);
  });

});

