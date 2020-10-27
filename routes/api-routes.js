const controller = require("../controllers/bucket-budget-controller.js");

module.exports = function (app) {
    app.get('/api/budgetItems', (req, res) => {
        controller.getFromBudgetItems(data => {
            console.log(data[0].dataValues);
            res.json(data[0].dataValues);
        });
    });
}