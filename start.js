import express from 'express';
import path from 'path';

const app = express();
const port = process.env.PORT || 3000;

const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
// const webpackHotMiddleware = require('webpack-hot-middleware')
const config = require('./webpack.config.js')
const compiler = webpack(config)

// app.use(webpackHotMiddleware(compiler))
app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
}))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log('Hello world server!');
});