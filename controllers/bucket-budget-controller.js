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

// Budget Items Model
Controller.prototype.getFromBudgetItems = function (cb) {
  db.budgetItems.findAll().then(data => {
    cb(data);
  });
}

// Users Model
Controller.prototype.getUserFromUserId = function (checkUserId, cb) {
  db.users.findOne({
    where: { userId: checkUserId }
  }).then(data => {
    cb(data);
  });
}

const controller = new Controller();

// Export routes for server.js to use.
module.exports = controller;