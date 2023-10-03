const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    database:'Todo_SCHM',
    password: "123Seguro&"
})

module.exports = connection;
