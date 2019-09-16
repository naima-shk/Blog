const { db } = require("../index");

const getBlogComments = (req, res, next) => {
  db.any("SELECT * FROM comments WHERE blog_id=${blog_id}", {
    blog_id: req.params.blog_id
  })
    .then(data => {
      res.status(200).json({
        status: ":)",
        data: data,
        message: `got all comments for ${req.params.blog_id} from database.`
      });
    })
    .catch(err => {
      res.status(500).json({
        status: ":(",
        data: err,
        message: `couldn't get all comments for ${req.params.blog_id} from database.`
      });
    });
  next();
};

const addComment = (req, res, next) => {
  db.none(
    "INSERT INTO comments (users_name, comment, blog_id) VALUES (${users_name}, ${comment}, ${blog_id})",
    {
      users_name: req.body.users_name,
      comment: req.body.comment,
      blog_id: req.body.blog_id
    }
  )
    .then(data => {
      res.status(200).json({
        status: ":)",
        data: data,
        message: "added comment to the database."
      });
    })
    .catch(err => {
      res.status(500).json({
        status: ":(",
        data: err,
        message: "could not add comment to the database."
      });
    });
  next();
};

module.exports = {
  getBlogComments,
  addComment
};
