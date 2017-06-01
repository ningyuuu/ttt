import express from 'express';
import http from 'http';
import path from 'path';
import socketio from 'socket.io';

import Game from './server/game'

const app = express()
const httpApp = http.createServer(app)
const port = process.env.PORT || 3000

const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const config = require('./webpack.config.js')
const compiler = webpack(config)

app.use(webpackDevMiddleware(compiler, {
    log: console.log,
    publicPath: config.output.publicPath,
    hot: true
}))

app.use(webpackHotMiddleware(compiler))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

const io = socketio(httpApp);
const game = new Game();

io.on('connection', (socket) => {
    console.log('A connection!');
    let playerID;

    socket.on('requestPlayerID', () => {
        playerID = game.setPlayer();
        socket.emit('setPlayer', playerID);
    });

    socket.on('disconnect', () => {
        game.unsetPlayer(playerID);
    })
})

httpApp.listen(port, () => {
    console.log('Hello world server!');
});
