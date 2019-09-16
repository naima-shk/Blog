const express = require('express');
const router = express.Router();
let db = require("../db/queries");

/* GET comments for a blog post */
router.get('/:blog_id', db.getBlogComments);

/* POST comment */
router.post('/add', db.addComment)

module.exports = router;
