const Sequelize = require('sequelize');
const connection = require('../config/connection');

const users = connection.define('users', {
    userId: Sequelize.STRING,
    email: Sequelize.STRING,
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING,
    imgUrl: Sequelize.STRING
});

module.exports = users;