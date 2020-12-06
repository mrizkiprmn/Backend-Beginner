const {Pool} = require("pg");

const db = new Pool({
    user: process.env.DBUSER,
    password: process.env.DBPASSWORD,
    database: process.env.DBNAME,
    host: "localhost",
    port: process.env.DBPORT,
    
})

module.exports = db;