let pgp = require("pg-promise")({});
let connectionString = "postgres://localhost/store";
let db = pgp(connectionString);

module.exports = {
    db
};
