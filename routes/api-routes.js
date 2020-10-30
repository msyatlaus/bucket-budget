const controller = require("../controllers/bucket-budget-controller.js");

module.exports = function (app) {

    // Budget Items
    app.get('/api/budgetItems', (req, res) => {
        controller.getFromBudgetItems(data => {
            res.json(data[0].dataValues);
        });
    });

    app.post('/api/budgetItems', (req, res) => {
        controller.createBudgetItems(req.body, data => {
            res.json(data[0].dataValues);
        });
    });

    app.put('/api/budgetItems', (req, res) => {
        controller.updateBudgetItems(req.body, data => {
            res.json(data[0].dataValues);
        });
    });

    app.delete('/api/budgetItems/:id', (req, res) => {

        controller.deleteBudgetItems(req.params.id, data => {
            res.json(data[0].dataValues);
        });
    });


    // Events
    app.get('/api/events', (req, res) => {
        controller.getFromEvents(data => {
            res.json(data[0].dataValues);
        });
    });

    app.post('/api/events', (req, res) => {
        controller.createEvents(req.body, data => {
            res.json(data[0].dataValues);
        });
    });

    app.put('/api/events', (req, res) => {
        controller.updateEvents(req.body, data => {
            res.json(data[0].dataValues);
        });
    });

    app.delete('/api/events/:id', (req, res) => {

        controller.deleteEvents(req.params.id, data => {
            res.json(data[0].dataValues);
        });
    });


    // Users
    app.get('/api/users', (req, res) => {
        controller.getFromUsers(data => {
            res.json(data[0].dataValues);
        });
    });

    app.post('/api/users', (req, res) => {
        // Search for existing user
        controller.getUserFromProfileId(req.body.userId, data => {
            if (data !== null) {
                // Found existing user
                console.log(data.dataValues);
            } else {
                // Create new user
                console.log("Could not find user");
            }
        });
    });

    app.put('/api/users', (req, res) => {
        controller.updateUsers(req.body, data => {
            res.json(data[0].dataValues);
        });
    });

    app.delete('/api/users/:id', (req, res) => {

        controller.deleteUsers(req.params.id, data => {
            res.json(data[0].dataValues);
        });
    });

}