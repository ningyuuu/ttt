class Board {
  constructor() {
    this.board = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];
  }

  play(row, col, player) {
    board[row][col] = player;
  }

  reset() {
    for (let row of this.board) {
      row = [0, 0, 0];
    }
  }

  checkWin() {
    if (this.board[0][0] === this.board[0][1] === this.board[0][2] && this.board[0][0] !== 0) {
      return this.board[0][0];
    } else if (this.board[1][0] === this.board[1][1] === this.board[1][2] && this.board[1][0] !== 0) {
      return this.board[1][0];
    } else if (this.board[2][0] === this.board[2][1] === this.board[2][2] && this.board[2][0] !== 0) {
      return this.board[2][0];
    } else if (this.board[0][0] === this.board[1][0] === this.board[2][0] && this.board[0][0] !== 0) {
      return this.board[0][0];
    } else if (this.board[0][1] === this.board[1][1] === this.board[2][1] && this.board[0][1] !== 0) {
      return this.board[0][1];
    } else if (this.board[0][2] === this.board[1][2] === this.board[2][2] && this.board[0][2] !== 0) {
      return this.board[0][2];
    } else if (this.board[0][0] === this.board[1][1] === this.board[2][2] && this.board[0][0] !== 0) {
      return this.board[0][0];
    } else if (this.board[0][2] === this.board[1][1] === this.board[2][0] && this.board[0][2] !== 0) {
      return this.board[0][2];
    } else {
      return false;
    }
  }
}

module.exports = Board;
