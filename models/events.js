const Sequelize = require('sequelize');
const connection = require('../config/connection');

const events = connection.define('events', {
    name: Sequelize.STRING,
    description: Sequelize.TEXT,
    date_time: Sequelize.DATE
});

module.exports = events;