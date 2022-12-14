var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, 'dist/final-app/index.html'));
});

module.exports = router;