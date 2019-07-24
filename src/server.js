const express = require('express');
const path = require('path');
const mime = require('mime');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(express.static(path.resolve(__dirname, '../', 'dist')));

app.get('/auth', (req, res) => {
  console.log(req.url);
  
  res.json({ code: 200, data: req.headers, msg: 'success' });
})

app.get('/file', (req, res) => {
  const filePath = path.resolve(__dirname, './index.html');
  fs.stat(filePath, (err, stat) => {
    if(err) {
      res.json({ code: 10000, msg: err, data: null});
      return;
    }
    res.json({ code: 200, msg: 'success', data: stat});
  })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))