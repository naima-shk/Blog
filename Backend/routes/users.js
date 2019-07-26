var express = require('express');
var router = express.Router();
var db = require('../db/queries');

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('Users API');
});

router.get('/:id', db.getUser);

module.exports = router;
