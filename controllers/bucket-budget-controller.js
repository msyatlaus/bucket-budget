const db = {
  budgetItems: require('../models/budgetItems'),
  users: require('../models/users'),
  events: require('../models/events'),
  shoppingItems: require('../models/shoppingItems'),
  setAssociations: function () {
    db.users.hasMany(db.budgetItems);
    db.users.hasMany(db.events);
    db.budgetItems.belongsTo(db.users);
    db.events.belongsTo(db.users);

  },
  synchronize: function () {
    this.budgetItems.sequelize.sync();
    this.users.sequelize.sync();
    this.events.sequelize.sync();
    this.shoppingItems.sequelize.sync();
  }
}

// db.setAssociations();
db.users.hasMany(db.budgetItems);
db.users.hasMany(db.events);
db.budgetItems.belongsTo(db.users);
db.events.belongsTo(db.users);
db.synchronize();

const Controller = function () { }

// Budget Items
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
    listItem,
    {
      where: {
        id: parseInt(listItem.id)
      }
    }).then(data => {
      console.log(data);
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


// Events
Controller.prototype.getFromEvents = function (cb) {
  db.events.findAll().then(data => {
    cb(data);
  });
}

Controller.prototype.createEvents = function (listItem, cb) {
  db.events.create(listItem).then(data => {
    cb(data);
  });
}

Controller.prototype.updateEvents = function (listItem, cb) {
  db.events.update(
    listItem.body,
    {
      where: {
        id: listItem.id
      }
    }).then(data => {
      cb(data);
    });
}

Controller.prototype.deleteEvents = function (listItem, cb) {
  db.events.destroy({
    where: {
      id: listItem
    }
  }).then(data => {
    cb(data);
  });
}


// Users
Controller.prototype.getFromUsers = function (cb) {
  db.users.findAll().then(data => {
    cb(data);
  }).catch(err => {
    if (err) throw err;
  });
}

Controller.prototype.getUserFromProfileId = function (checkProfileId, cb) {
  db.users.findOne({
    where: { profileId: checkProfileId }
  }).then(data => {
    if (data === null) {
      cb(null);
    } else {
      cb(data);
    }
  }).catch(err => {
    if (err) throw err;
  });
}

Controller.prototype.createUsers = function (listItem, cb) {
  db.users.create(listItem).then(data => {
    cb(data);
  }).catch(err => {
    if (err) throw err;
  });
}

Controller.prototype.updateUsers = function (listItem, cb) {
  db.users.update(
    listItem.body,
    {
      where: {
        id: listItem.id
      }
    }).then(data => {
      cb(data);
    }).catch(err => {
      if (err) throw err;
    });
}

Controller.prototype.deleteUsers = function (listItem, cb) {
  db.users.destroy({
    where: {
      id: listItem
    }
  }).then(data => {
    cb(data);
  }).catch(err => {
    if (err) throw err;
  });
}

// Shopping Items
Controller.prototype.getFromShoppingItems = function (cb) {
  db.shoppingItems.findAll().then(data => {
    cb(data);
  });
}

Controller.prototype.getBudgetItemsFromUser = function (userProfileId, cb) {
  db.users.findAll(
    {
      where: {
        profileId: userProfileId
      },
      include: [{
        model: db.budgetItems
      }]
    }
  ).then(data => {
    cb(data);
  });
}

Controller.prototype.getEventsFromUser = function (userProfileId, cb) {
  db.users.findAll(
    {
      where: {
        profileId: userProfileId
      },
      include: [{
        model: db.events
      }]
    }
  ).then(data => {
    cb(data);
  });
}

const controller = new Controller();

// Export routes for server.js to use.
module.exports = controller;