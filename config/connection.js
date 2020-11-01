const Sequelize = require('sequelize');

let credentials = {};

try {
    const config = require('./config.js');
    credentials.database = config.database.db;
    credentials.user = config.database.user;
    credentials.password = config.database.password;
    credentials.host = 'localhost';
}
catch {
    credentials.database = process.env.db_database;
    credentials.user = process.env.db_user;
    credentials.password = process.env.db_password;
    credentials.host = process.env.db_host;
}

console.log(credentials);

const seqConnection = new Sequelize(credentials.database, credentials.user, credentials.password, {
    host: credentials.host,
    port: 3306,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

module.exports = seqConnection;