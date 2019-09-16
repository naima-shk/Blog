let pgp = require("pg-promise")({});
let connectionString = "postgres://localhost/blog";
let db = pgp(connectionString);

module.exports = {
    db
};