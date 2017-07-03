let _id = 0;

class Board {
  constructor() {
    this.id = _id;
    _id++;
    this.board = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];
    this.winner = null;
    this.x = false;
    this.o = false;
  }

  getId() {
    return this.id;
  }

  getFreeSymbol() {
    if (this.x) {
      if (this.o) {
        return null;
      }

      return 'o';
    }
    return 'x';
  }

  takeSymbol(s) {
    if (s === 'x' && !this.x) {
      this.x = true;
      return true;
    } else if (s === 'o' && !this.o) {
      this.o = true;
      return true;
    } else {
      return false;
    }
  }

  readyToStart() {
    return (this.x && this.o);
  }

  play(row, col, symbol) {
    if (this.checkWinner()) {
      return;
    }
    this.board[row][col] = symbol;
  }

  getBoard() {
    return this.board;
  }

  reset() {
    for (let row of this.board) {
      row = [0, 0, 0];
    }

    this.winner = null;
  }

  setWinner(symbol) {
    this.winner = symbol;
  }

  checkWinner() {
    return this.winner;
  }

  checkWin() {
    if (this.board[0][0] === this.board[0][1] === this.board[0][2] && this.board[0][0] !== 0) {
      this.setWinner(this.board[0][0]);
    } else if (this.board[1][0] === this.board[1][1] === this.board[1][2] && this.board[1][0] !== 0) {
      this.setWinner(this.board[1][0]);
    } else if (this.board[2][0] === this.board[2][1] === this.board[2][2] && this.board[2][0] !== 0) {
      this.setWinner(this.board[2][0]);
    } else if (this.board[0][0] === this.board[1][0] === this.board[2][0] && this.board[0][0] !== 0) {
      this.setWinner(this.board[0][0]);
    } else if (this.board[0][1] === this.board[1][1] === this.board[2][1] && this.board[0][1] !== 0) {
      this.setWinner(this.board[0][1]);
    } else if (this.board[0][2] === this.board[1][2] === this.board[2][2] && this.board[0][2] !== 0) {
      this.setWinner(this.board[0][2]);
    } else if (this.board[0][0] === this.board[1][1] === this.board[2][2] && this.board[0][0] !== 0) {
      this.setWinner(this.board[0][0]);
    } else if (this.board[0][2] === this.board[1][1] === this.board[2][0] && this.board[0][2] !== 0) {
      this.setWinner(this.board[0][2]);
    } else {
      return false;
    }
  }
}

module.exports = Board;
