import Board from './board';

class Game {
  constructor(board) {
    this.gameBoard = new Board();
    this.players = ['filler', false, false];
  }

  setPlayer() {
    if (!this.players[1]) {
        this.players[1] = true;
        return 1;
    } else if (!this.players[2]) {
        this.players[2] = true;
        return 2;
    } else {
        return 0;
    }
  }

  unsetPlayer(x) {
    if (x === 1) {
        this.players[1] = false;
    }
    if (x === 2) {
        this.players[2] = false;
    }
  }

  resetBoard() {
    this.gameBoard.reset();
  }

  playBoard(row, col, player) {
    this.gameBoard.play(row, col, player);
    this.checkWin();
  }

  checkWin() {
    return this.gameBoard.checkWin();
  }
}

module.exports = Game;
