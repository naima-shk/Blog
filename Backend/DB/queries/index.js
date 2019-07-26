const { db } = require("../index");

// get single user data
const getUser = (id) => 
{
    db.one('SELECT * FROM users WHERE active = $1', id)
    .then(data => {
        console.log('our user data:', data);
        return data.json();
    })
    .catch(error => {
        console.log('failed fetching user');
        throw error;
    });
// new function //
    const createUser =(id) =>
    {
        db.none('INSERT INTO  user (id,first_name, last_name,username,password_digest,email,phone)  VALUES (${id,first_name, last_name,username,password_digest,email,phone}, ${this})'),{

        }
    }
};

module.exports = {
    getUser
}