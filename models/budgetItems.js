const Sequelize = require('sequelize');
const connection = require('../config/connection');

const budgetItems = connection.define('budget_items', {
    name: Sequelize.STRING,
    quantity: Sequelize.INTEGER,
    price: Sequelize.INTEGER,
    event_id: Sequelize.STRING
});

module.exports = budgetItems;