const db = {
  budgetItems: require('./models/budgetItems'),
  users: require('./models/users'),
  events: require('./models/events'),
  synchronize: function () {
      this.budgetItems.sequelize.sync();
      this.users.sequelize.sync();
      this.events.sequelize.sync();
  }
}

db.synchronize();

const Controller = function () {  }

Controller.prototype.getFromBudgetItems = function (cb) {
  db.budgetItems.findAll().then(data => {
    cb(data);
  });
}

const controller = new Controller();

controller.getFromBudgetItems(data => {
  console.log(data);
})


// Export routes for server.js to use.
module.exports = router;