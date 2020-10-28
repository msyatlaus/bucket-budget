const Sequelize = require('sequelize');
const connection = require('../config/connection');

const budgetItems = connection.define('budget_items', {
    name: Sequelize.STRING,
    category: Sequelize.STRING,
    price: Sequelize.INTEGER,
});

module.exports = budgetItems;