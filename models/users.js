const Sequelize = require('sequelize');
const connection = require('../config/connection');

const users = connection.define('users', {
    username: Sequelize.TEXT,
    pin_hash: Sequelize.TEXT,
    salt: Sequelize.TEXT
});

module.exports = users;