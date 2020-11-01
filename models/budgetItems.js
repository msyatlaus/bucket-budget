const Sequelize = require('sequelize');
const connection = require('../config/connection');

const budgetItems = connection.define('budget_items', {
    name: Sequelize.STRING,
    quantity: Sequelize.INTEGER,
    price: Sequelize.INTEGER
});

module.exports = budgetItems;