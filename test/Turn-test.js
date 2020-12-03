const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function() {

  let turn, card;

  beforeEach(function() {
    card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    turn = new Turn('object', card);
  });

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    expect(turn).to.be.an.instanceOf(Turn);
  });

  it('should store a guess', function() {
    expect(turn.guess).to.deep.equal('object');
  });

  it('should store a card', function() {
    expect(turn.card).to.deep.equal({
      id: 1, 
      question: 'What allows you to define a set of related information using key-value pairs?', 
      answers: ['object', 'array', 'function'], 
      correctAnswer: 'object'
    });
  });

  it('should return the user\'s guess', function() {
    expect(turn.returnGuess()).to.deep.equal('object');
  });

  it('should return the user\'s card', function() {
    expect(turn.returnCard()).to.deep.equal({
      id: 1, 
      question: 'What allows you to define a set of related information using key-value pairs?', 
      answers: ['object', 'array', 'function'], 
      correctAnswer: 'object'
    });
  });

  it('should evaluate the user\'s guess', function() {
    expect(turn.evaluateGuess()).to.deep.equal(true);
  });

  it('should give feedback on the user\'s guess', function() {
    expect(turn.giveFeedback()).to.deep.equal('correct!');
  });
});