const Sequelize = require('sequelize');
const connection = require('../config/connection');

const trips = connection.define('trips', {
    name: Sequelize.STRING,
    budget: Sequelize.INTEGER
});

module.exports = trips;