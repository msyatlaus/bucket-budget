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

Controller.prototype.createBudgetItems = function (listItem, cb) {
  db.budgetItems.create(listItem).then(data => {
    cb(data);
  });
}

Controller.prototype.updateBudgetItems = function (listItem, cb) {
  db.budgetItems.update(
    listItem.body,
    {
      where: {
        id: listItem.id
      }
    }).then(data => {
    cb(data);
  });
}

Controller.prototype.deleteBudgetItems = function (listItem, cb) {
  db.budgetItems.destroy({
    where: {
      id: listItem
    }
  }).then(data => {
    cb(data);
  });
}

const controller = new Controller();

// Export routes for server.js to use.
module.exports = controller;