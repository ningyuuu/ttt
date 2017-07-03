const Board = require('../game/board.js');
const emits = require('../routes/emits');

const myBoard = new Board();

exports.getId = () => myBoard.getId();

exports.getSymbol = () => myBoard.getFreeSymbol();

exports.confirmSymbol = (s) => {
  myBoard.takeSymbol(s);
  if (myBoard.readyToStart()) {
    emits.hello = true;
  }
};

exports.getBoard = () => myBoard.getBoard();

exports.play = (step) => {
  myBoard.play(step.row, step.col, step.symbol);
};