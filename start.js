import express from 'express';
import http from 'http';
import path from 'path';
import socketio from 'socket.io';

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

io.on('connection', (socket) => {
    console.log('A connection!');
    let playerID;

    socket.on('requestPlayerID', () => {
        playerID = setPlayer();
        socket.emit('setPlayer', playerID);
    });
})

httpApp.listen(port, () => {
    console.log('Hello world server!');
});

const createSetPlayerFunction = function() {
    let one = false;
    let two = false;

    const setPlayer = function() {
        if (!one) {
            one = true;
            return 1;
        } else if (!two) {
            two = true;
            return 2;
        } else {
            return 0;
        }
    }

    const unsetPlayer = function(x) {
        if (x === 1) {
            one = false;
        }

        if (x === 2) {
            two = false;
        }
    }

    return {setPlayer, unsetPlayer};
}

const {setPlayer, unsetPlayer} = createSetPlayerFunction();