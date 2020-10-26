const Sequelize = require('sequelize');
const connection = require('../config/connection');

const users = connection.define('users', {
    username: Sequelize.STRING,
    pin_hash: Sequelize.STRING,
    salt: Sequelize.STRING
});

module.exports = users;