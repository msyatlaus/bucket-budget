const Sequelize = require('sequelize');
const connection = require('../config/connection');

const users = connection.define('users', {
    profileId: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING,
    imgUrl: Sequelize.STRING,
    email: Sequelize.STRING
});

module.exports = users;