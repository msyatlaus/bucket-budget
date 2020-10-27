const db = {
  budgetItems: require('../models/budgetItems'),
  users: require('../models/users'),
  events: require('../models/events'),
  synchronize: function () {
    this.budgetItems.sequelize.sync();
    this.users.sequelize.sync();
    this.events.sequelize.sync();
  }
}

db.synchronize();

const Controller = function () { }

Controller.prototype.getFromBudgetItems = function (cb) {
  db.budgetItems.findAll().then(data => {
    cb(data);
  });
}

const controller = new Controller();

controller.getFromBudgetItems(data => {
  console.log(data);
});


// Create all our routes and set up logic within those routes where required.
// router.get("/", function (req, res) {
//   budgetItems.selectAll(function (data) {
//     var hbsObject = {
//       budgetItems: data
//     };
//     console.log(hbsObject);
//     res.render("index", hbsObject);
//   });
// });

// router.get("/", function (req, res) {
//   events.selectAll(function (data) {
//     var hbsObject = {
//       events: data
//     };
//     console.log(hbsObject);
//     res.render("index", hbsObject);
//   });
// });

// router.get("/", function (req, res) {
//   users.selectAll(function (data) {
//     var hbsObject = {
//       users: data
//     };
//     console.log(hbsObject);
//     res.render("index", hbsObject);
//   });
// });

// router.post("/api/budgetItems", function (req, res) {
//   budgetItems.insertOne([
//     "item_name", "full"
//   ], [
//     req.body.name, req.body.full
//   ], function (result) {
//     // Send back the ID of the new quote
//     res.json({ id: result.insertId });
//   });
// });

// router.post("/api/events", function (req, res) {
//   events.insertOne([
//     "item_name", "full"
//   ], [
//     req.body.name, req.body.full
//   ], function (result) {
//     // Send back the ID of the new quote
//     res.json({ id: result.insertId });
//   });
// });

// router.post("/api/users", function (req, res) {
//   users.insertOne([
//     "item_name", "full"
//   ], [
//     req.body.name, req.body.full
//   ], function (result) {
//     // Send back the ID of the new quote
//     res.json({ id: result.insertId });
//   });
// });

// router.put("/api/budgetItems/:id", function (req, res) {
//   var condition = "id = " + req.params.id;

//   console.log("condition", condition);

//   budgetItems.updateOne({
//     addItem: true
//   }, condition, function (result) {
//     if (result.changedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

// router.put("/api/events/:id", function (req, res) {
//   var condition = "id = " + req.params.id;

//   console.log("condition", condition);

//   events.updateOne({
//     increasePrice: true
//   }, condition, function (result) {
//     if (result.changedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

// router.put("/api/users/:id", function (req, res) {
//   var condition = "id = " + req.params.id;

//   console.log("condition", condition);

//   users.updateOne({
//     increasePrice: true
//   }, condition, function (result) {
//     if (result.changedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

// router.delete("/api/budgetItems/:id", function (req, res) {
//   var condition = "id = " + req.params.id;

//   budgetItems.delete(condition, function (result) {
//     if (result.affectedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

// router.delete("/api/events/:id", function (req, res) {
//   var condition = "id = " + req.params.id;

//   events.delete(condition, function (result) {
//     if (result.affectedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

// router.delete("/api/users/:id", function (req, res) {
//   var condition = "id = " + req.params.id;

//   users.delete(condition, function (result) {
//     if (result.affectedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

// in case we need it
// app.listen(PORT, function() {
//   console.log("App listening on PORT " + PORT);
// });

// Export routes for server.js to use.
module.exports = controller;