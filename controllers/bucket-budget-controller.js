var express = require("express");

var router = express.Router();

// Import the model (budgetList.js) to use its database functions.
// var bucketListItems = require("../models/bucketListItems.js");
// var budget = require("../models/budget.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  bucketListItems.selectAll(function(data) {
    var hbsObject = {
      bucketListItems: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.get("/", function(req, res) {
  budget.selectAll(function(data) {
    var hbsObject = {
      budget: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/bucketListItems", function(req, res) {
  bucketListItems.insertOne([
    "item_name", "full"
  ], [
    req.body.name, req.body.full
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.post("/api/budget", function(req, res) {
  budget.insertOne([
    "item_name", "full"
  ], [
    req.body.name, req.body.full
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/bucketListItems/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  bucketListItems.updateOne({
    addItem: true
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.put("/api/budget/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  budget.updateOne({
    increasePrice: true
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/bucketListItems/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  bucketListItems.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/budget/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  budget.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// in case we need it
// app.listen(PORT, function() {
//   console.log("App listening on PORT " + PORT);
// });

// Export routes for server.js to use.
module.exports = router;