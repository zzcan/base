const express = require('express');
const path = require('path');
const mime = require('mime');
const fs = require('fs');
const crypto = require('crypto');

const app = express();
const port = 3000;

app.use(express.static(path.resolve(__dirname, '../', 'dist')));

app.get('/auth', (req, res) => {
  res.json({ code: 10000, msg: err, data: null});
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))