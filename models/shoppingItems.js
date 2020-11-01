const Sequelize = require('sequelize');
const connection = require('../config/connection');

const shoppingItems = connection.define('shopping_items', {
    name: Sequelize.STRING,
    category: Sequelize.STRING,
    price: Sequelize.INTEGER
});

module.exports = shoppingItems;