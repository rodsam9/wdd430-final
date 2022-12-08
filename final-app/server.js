const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const index = require('./server/routes/index');
const todo = require('./server/routes/todo');

const app = express();
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})