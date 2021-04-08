var mysql = require('mysql');
require("dotenv").config();

var connection = mysql.createConnection({
    host: "mysqldb",
    user: "root",
    password: process.env.mysql_root_pwd,
    database: process.env.mysql_db
});



connection.connect(function (error) {
    if (!!error) {
        console.log(error);
    } else {
        console.log('Connected!');
    }
});

module.exports = connection;