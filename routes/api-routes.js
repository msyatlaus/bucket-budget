const controller = require("../controllers/bucket-budget-controller.js");

module.exports = function (app) {
    app.get('/api/budgetItems', (req, res) =>{
        res.send("hello world!");
    });
}