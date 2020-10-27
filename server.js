const express = require('express');

const app = express();
const PORT = 3000;

require('./routes/api-routes')(app);

app.listen(PORT, () => {
    console.log("server running on localhost: ", PORT);
});

// const axios = require('axios');

// axios.get(`https://www.triposo.com/api/20200803/location.json?id=Tokyo&account=${config.tripsoApiId}&token=${config.tripsoApiKey}`)
//     .then(data => {
//         console.log(data.data.results[0]);
//     });

// axios.get(`https://www.triposo.com/api/20200803/tour.json?location_ids=San_Francisco&count=10&account=${config.tripsoApiId}&token=${config.tripsoApiKey}`)
//     .then(data => {
//         console.log(data.data.results);
//     });