const controller = require("../controllers/bucket-budget-controller.js");

module.exports = function (app) {
    // Budget Items
    app.get('/api/budgetItems', (req, res) => {
        controller.getFromBudgetItems(data => {
            res.json(data[0].dataValues);
        });
    });

    app.get('/api/budgetItemsOfUser', (req, res) => {
        console.log(req.session.profileId);
        controller.getBudgetItemsFromUser(req.session.profileId, data => {
            res.json(data[0].dataValues)
        });
    });

    app.post('/api/budgetItems', (req, res) => {
        req.body.userProfileId = req.session.profileId;
        controller.createBudgetItems(req.body, data => {
            res.json(data.dataValues);
        });
    });

    app.put('/api/budgetItems', (req, res) => {
        req.body.userProfileId = req.session.profileId;

        controller.updateBudgetItems(req.body, data => {
            res.json(data.dataValues);
        });
    });

    app.delete('/api/budgetItems/:id', (req, res) => {
        controller.deleteBudgetItems(req.params.id, data => {
            res.json(data.dataValues);
        });
    });

    // Events
    app.get('/api/events', (req, res) => {
        req.body.userProfileId = req.session.profileId;

        controller.getFromEvents(data => {
            res.json(data[0].dataValues);
        });
    });

    app.get('/api/eventsOfUser', (req, res) => {
        controller.getEventsFromUser(req.session.profileId, data => {
            res.json(data[0].dataValues)
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

    app.delete('/api/events', (req, res) => {
        controller.deleteEvents(req.session.profileId, data => {
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
        controller.getUserFromProfileId(req.body.profileId, data => {
            if (data !== null) {
                // Found existing user
                req.session.profileId = data.dataValues.profileId
                req.session.isLoggedIn = true;
                res.json(data.dataValues);
            } else {
                // Create new user
                controller.createUsers(req.body, data => {
                    req.session.profileId = data.dataValues.profileId
                    req.session.isLoggedIn = true;
                    res.json(data.dataValues);
                });
            }
        });
    });

    app.put('/api/users', (req, res) => {
        controller.updateUsers(req.body, data => {
            res.json(data[0].dataValues);
        });
    });

    app.delete('/api/users', (req, res) => {
        controller.deleteUsers(req.session.profileId, data => {
            res.json(data[0].dataValues);
        });
    });

    // Shopping Items
    app.get('/api/shoppingItems', (req, res) => {
        controller.getFromShoppingItems(data => {
            res.json(data);
        });
    });
}
// Trips
app.get('/api/trips', (req, res) => {
    controller.getFromtrips(data => {
        res.json(data[0].dataValues);
    });
});



app.post('/api/trips', (req, res) => {
    req.body.userProfileId = req.session.profileId;
    controller.createtrips(req.body, data => {
        res.json(data.dataValues);
    });
});

app.put('/api/trips', (req, res) => {
    req.body.userProfileId = req.session.profileId;

    controller.updatetrips(req.body, data => {
        res.json(data.dataValues);
    });
});

app.delete('/api/trips', (req, res) => {
    controller.deletetrips(req.session.profileId, data => {
        res.json(data[0].dataValues);
    });
});