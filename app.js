global._root = __dirname;
const cluster = require('cluster');
const http = require('http');
const os = require('os');
const util = require('util');
const routes = require('./routes/index');
const express = require('express');
const multiProcess = require(`${_root}/server/multi-process.js`);
// 全局配置

let app = new express();
app.use(function(req, res, next) {
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Expires', '0');
  res.setHeader('anthor', 'tao.zhu');

  next();
});

app.get('*', routes);
multiProcess.listen(app);
