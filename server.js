// const axios = require('axios');
// const config = require('./config/config');
const express = require('express');

const app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// const db = {
//     budgetItems: require('./models/budgetItems'),
//     users: require('./models/users'),
//     events: require('./models/events'),
//     synchronize: function () {
//         this.budgetItems.sequelize.sync();
//         this.users.sequelize.sync();
//         this.events.sequelize.sync();
//     }
// }

// db.synchronize();

// require('./routes/api-routes')(app);

app.listen(PORT, () => {
    console.log("server running on localhost: ", PORT);
});

// axios.get(`https://www.triposo.com/api/20200803/location.json?id=Tokyo&account=${config.tripsoApiId}&token=${config.tripsoApiKey}`)
//     .then(data => {
//         console.log(data.data.results[0]);
//     });

// axios.get(`https://www.triposo.com/api/20200803/tour.json?location_ids=San_Francisco&count=10&account=${config.tripsoApiId}&token=${config.tripsoApiKey}`)
//     .then(data => {
//         console.log(data.data.results);
//     });