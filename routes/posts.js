const express = require('express');
const router = express.Router();
let db = require("../db/queries");

/* GET users listing. */
router.get('/all', db.getAllPosts);

router.post('/:markdown', db.addPost)

module.exports = router;
