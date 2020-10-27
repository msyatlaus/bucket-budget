const controller = require("../controllers/bucket-budget-controller.js");

// refer to passport.js -- boiler plate code in case we go down the email/password authentication route rather than google sign-in
// const passport = require('../config/passport');

module.exports = function (app) {
    app.get('/api/budgetItems', (req, res) => {
        controller.getFromBudgetItems(data => {
            console.log(data[0].dataValues);
            res.json(data[0].dataValues);
        });
    });
}