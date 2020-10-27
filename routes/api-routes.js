const controller = require('../controllers/bucket-budget-controller.js');

module.exports = function (app) {
    app.get('/api/budgetItems', (res, req) => {
        controller.getFromBudgetItems(data => {
            console.log(data);
        });
    });
}