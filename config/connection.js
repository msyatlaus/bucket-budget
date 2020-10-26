const Sequelize = require('sequelize');
const config = require('./config.js');

const seqConnection = new Sequelize('budget_bucket_db', config.database.user, config.database.password, {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

module.exports = seqConnection;