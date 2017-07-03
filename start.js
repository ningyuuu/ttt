const express = require('express');
const http = require('http');
const path = require('path');

const attachSocket = require('./src/routes/socket').initializeSocket;
const attachEventsToSocket = require('./src/routes/events');

const app = express();
const port = process.env.PORT || 3000;

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config.js');
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
  log: console.log,
  publicPath: config.output.publicPath,
  hot: true
}));
app.use(webpackHotMiddleware(compiler));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const httpApp = http.createServer(app);

attachSocket(httpApp);

httpApp.listen(port, () => {
  console.log('Hello world game!');
});
