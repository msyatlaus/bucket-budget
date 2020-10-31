const Sequelize = require('sequelize');
const connection = require('../config/connection');

const events = connection.define('events', {
    name: Sequelize.STRING,
    description: Sequelize.TEXT,
    date_time: Sequelize.DATE,
    user_profileId: Sequelize.STRING
});

module.exports = events;