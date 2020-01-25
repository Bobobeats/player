const express = require('express');
const path = require('path');
const db = require('../database/db.js');


const app = express();
const port = 3000;

app.use(express.static(path.resolve(__dirname, '..', 'client', 'dist')));

app.listen(port, () => {
  db.init();
  console.log('Server listening on port', port);
});
