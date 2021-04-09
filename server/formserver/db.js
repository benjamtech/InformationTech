var mysql = require('mysql');
require("dotenv").config();

const db_config = {
    host: "mysqldb",
    user: "root",
    connectionLimit: 100,
    waitForConnection: true,
    queueLimit: 0,
    password: process.env.MYSQL_ROOT_PWD,
    database: process.env.MYSQL_DATABASE,
    wait_timeout: 28800,
    connect_timeout: 10,
}

var connection = mysql.createPool(db_config);



module.exports = connection;