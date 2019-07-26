DROP DATABASE IF EXISTS store;
CREATE DATABASE store;

\c store;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR NOT NULL, 
  last_name VARCHAR NOT NULL, 
  username VARCHAR UNIQUE NOT NULL,
  password_digest VARCHAR NOT NULL,
  email VARCHAR UNIQUE NOT NULL,
  phone VARCHAR UNIQUE NOT NULL
);

INSERT INTO users (first_name, last_name, username, password_digest, email, phone) VALUES ('Nalma', 'Shaikh', 'naimiii', '$2a$10$q8//j/bkolUGfnNCMl66ge0xTOZiYTX4PQiAkVnwY4A6tk1WXdEVa', 'example@email.com', '5555555555');
