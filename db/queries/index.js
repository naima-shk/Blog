const { db } = require("../index");

const getAllPosts = (req, res, next) => {
  db.any("SELECT * FROM posts")
    .then(data => {
      res.status(200).json({
        status: "sucess",
        data: data,
        message: "successfully fetched all posts"
      });
    })
    .catch(err => {
      next(err);
    });
};

const addPost = data => {
  db.none(
    "INSERT INTO post (markdown_text) VALUES (${markdown})",
    { markdown: data.markdown_text }
  ).catch(err => {
    throw err;
  });
};

module.exports = {
  getAllPosts,
  addPost
};