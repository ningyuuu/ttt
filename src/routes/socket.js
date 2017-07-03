/**
 * Created by ningyu on 30/6/17.
 */
const socketio = require('socket.io');
const gameCtrl = require('../controllers/gameCtrl');

exports.initializeSocket = (server) => {
  const io = socketio.listen(server);
  io.sockets.on('connection', (socket) => {
    socket.on('getSymbol', () => {
      socket.join(gameCtrl.getId());
      socket.emit('symbol', { symbol: gameCtrl.getSymbol() });
    });

    socket.on('confirmSymbol', (symbol) => {
      gameCtrl.confirmSymbol(symbol);
    });

    socket.on('play', (step) => {
      gameCtrl.play(step.row, step.col, step.symbol);
      emits.confirmPlay(gameCtrl.getBoard());
    });

    socket.on('joingame', () => {
      console.log('not coded yet');
    });

    socket.on('leave', () => {
      console.log('not coded yet');
    });
  });

  exports.setPlay = (socket, board, turn) => {
    io.to(gameCtrl.getId()).emit('confirmPlay', { board, turn }); //........?????
  };

  exports.gameOver = (socket, winner) => {
    io.emit('gameOver', { winner });
  };
};


