const axios = require('axios');
const config = require('./config/config');

// axios.get(`https://www.triposo.com/api/20200803/location.json?id=Tokyo&account=${config.tripsoApiId}&token=${config.tripsoApiKey}`)
//     .then(data => {
//         console.log(data.data.results[0]);
//     });

axios.get(`https://www.triposo.com/api/20200803/tour.json?location_ids=San_Francisco&count=10&account=${config.tripsoApiId}&token=${config.tripsoApiKey}`)
    .then(data => {
        console.log(data.data.results);
    });