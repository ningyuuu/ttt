import React from 'react';
import Row from './row';
import io from 'socket.io-client';

const attachSocketEvents = (socket, that) => {
  socket.on('connect', () => {
    console.log('Sup game');
    socket.emit('getSymbol');
  });

  socket.on('symbol', (data) => {
    that.setState({
      mySymbol: data.symbol
    }, () => {
      socket.emit('confirmSymbol', that.state.symbol);
    });
  });

  socket.on('')
};


export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ],
      next: 1,
      player: 0,
      myTurn: false,
    }
    this.setSymbol = this.setSymbol.bind(this);
  }

  componentDidMount() {
    const socket = io('/');
    attachSocketEvents(socket, this);
  }

  setSymbol(row) {
    return ((col) => {
      return (() => {
        console.log(this.state.player, row, col);
        const tempBoard = this.state.board.slice();
        if (!(this.state.myTurn) || tempBoard[row][col] !== 0) {
          console.log('Invalid');
          return;
        }
        // tempBoard[row][col] = this.state.next;
        // this.setState({
        //     board: tempBoard,
        //     next: (3 - this.state.next)
        // });
        this.state.socket.emit('play', this.state.player, row, col);
        this.setState({
          myTurn: false
        });
      });
    });
  }

  render() {

    const rows = [];
    let key = 0;

    for (let row of this.state.board) {
      rows.push(<Row row={row}
                     key={key}
                     click={this.setSymbol(key)}
        />
      );
      key++;
    }
    return (
      <div className='filler'>
        {rows}
      </div>
    );
  }
}
