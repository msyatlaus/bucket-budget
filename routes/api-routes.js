const controller = require("../controllers/bucket-budget-controller.js");

module.exports = function (app) {
    
    app.get('/api/budgetItems', (req, res) => {
        controller.getFromBudgetItems(data => {
            console.log(data[0].dataValues);
            res.json(data[0].dataValues);
        });
    });

    app.post('/api/budgetItems', (req, res) => {
        controller.createBudgetItems(req.body, data => {
            console.log(data[0].dataValues);
            res.json(data[0].dataValues);
        });
    });

    app.put('/api/budgetItems', (req, res) => {
        controller.updateBudgetItems(req.body, data => {
            console.log(data[0].dataValues);
            res.json(data[0].dataValues);
        });
    });

    app.delete('/api/budgetItems/:id', (req, res) => {

        controller.deleteBudgetItems(req.params.id, data => {
            console.log(data[0].dataValues);
            res.json(data[0].dataValues);
        });
    });
}