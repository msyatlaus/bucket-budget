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

    app.post('/api/budgetItems', (req, res) => {
        controller.getFromBudgetItems(data => {
            console.log(data[0].dataValues);
            res.json(data[0].dataValues);
        });
    });

    app.put('/api/budgetItems', (req, res) => {
        controller.getFromBudgetItems(data => {
            console.log(data[0].dataValues);
            res.json(data[0].dataValues);
        });
    });

    app.delete('/api/budgetItems', (req, res) => {
        controller.getFromBudgetItems(data => {
            console.log(data[0].dataValues);
            res.json(data[0].dataValues);
        });
    });

    // USER TABLE
    app.post('/api/users', (req, res) => {
        // Search for existing user
        controller.getUserFromUserId(req.body.userId, data => {
            if (data !== null) {
                // Found existing user
                console.log(data.dataValues);
            } else {
                // Create new user
                console.log("Could not find user");
            }
        });
    });
}