DROP DATABASE IF EXISTS blog;
CREATE DATABASE blog;

\c blog;

CREATE TABLE comments
(
  id SERIAL PRIMARY KEY,
  users_name VARCHAR NOT NULL,
  comment VARCHAR NOT NULL,
  blog_id VARCHAR NOT NULL,
  time_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- INSERTING SEED COMMENT MAPPED TO FIRST BLOG POST
INSERT INTO comments
  (users_name, comment, blog_id)
VALUES
  ('Ruben', 'Great job!', 'first-post');