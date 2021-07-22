const db = require("../db");

//GET ALL
const find = async () => {
    return db.promise().query("SELECT * from aliments");
};

//POST
const create = async ({name, autorisation, description}) => {
    return db
    .promise()
    .query("INSERT INTO aliments (name, autorisation, description) VALUES (?,?,?)", [
        name, 
        autorisation,
        description,
    ]);
};

module.exports = {find, create}