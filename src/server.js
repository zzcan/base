const express = require('express');
const path = require('path');
const mime = require('mime');
const fs = require('fs');
const crypto = require('crypto');

const app = express();
const port = 3000;

// app.use(express.static(path.resolve(__dirname, '../', 'dist')));

app.use('*', (req, res, next) => {
  req.auth = req.headers['auth'];
  next();
})

app.get('/', (req, res) => {
  console.log(req.url)
  res.json({ code: 200, msg: 'success', data: { url: req.url, auth: req.auth }});
})

app.get('/auth', (req, res) => {
  console.log(req.url)  
  res.json({ code: 200, msg: 'success', data: { url: req.url, auth: req.auth }});
})

app.get('/hello', (req, res) => {
  console.log(req.url)
  res.json({ code: 200, msg: 'success', data: { url: req.url, auth: req.auth }});
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))