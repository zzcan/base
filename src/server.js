const express = require('express');
const path = require('path');
const mime = require('mime');
const fs = require('fs');
const crypto = require('crypto');

const app = express();
const port = 3000;

// app.use(express.static(path.resolve(__dirname, '../', 'dist')));

app.get('/', (req, res) => {
  const filePath = path.resolve(__dirname, '../dist', './index.html');
  fs.stat(filePath, (err, stat) => {
    if(err) {
      res.json({ code: 10000, msg: err, data: null});
      return;
    }
    res.sendFile(filePath)
  })
})

app.get('/index.js', (req, res) => {
  const filePath = path.resolve(__dirname, `../dist/${req.url}`);
  fs.stat(filePath, (err, stat) => {
    if(err) {
      res.json({ code: 10000, msg: err, data: null});
      return;
    }
    const match = req.headers['if-none-match'];
    const etag = crypto.createHash('sha1').update(stat.ctime.toGMTString() + stat.size).digest('hex')
    console.log('---etag == match---', etag == match)
    console.log('---etag---', etag)
    console.log('---match---', match)
    if(match == etag) {
      res.status(304).end();
    } else {
      res.set({
        'Etag': etag,
      })
      res.sendFile(filePath)
    }
  })
})

app.get('/vendors.js', (req, res) => {
  const filePath = path.resolve(__dirname, `../dist/${req.url}`);
  console.log(filePath);
  fs.stat(filePath, (err, stat) => {
    if(err) {
      res.json({ code: 10000, msg: err, data: null});
      return;
    }
    res.sendFile(filePath);
  })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))