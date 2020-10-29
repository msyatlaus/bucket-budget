const Sequelize = require('sequelize');
const connection = require('../config/connection');

const events = connection.define('events', {
    name: Sequelize.STRING,
    quantity: Sequelize.INTEGER,
    price: Sequelize.INTEGER,
    description: Sequelize.TEXT,
    date_time: Sequelize.DATE,
    event_id: Sequelize.STRING
});

module.exports = events;