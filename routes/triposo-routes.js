const axios = require('axios');

module.exports = function (app) {
    app.get('/api/triposo/:city', (req, res) => {
        let city = req.params.city;

        axios.get(`https://www.triposo.com/api/20200803/tour.json?location_ids=${city}&count=10&account=${config.tripsoApiId}&token=${config.tripsoApiKey}`)
            .then(data => {
                console.log(data.data.results);
                res.json(data.data.results);
            });
    });
}

// AXIOS TESTING
// const axios = require('axios');

// axios.get(`https://www.triposo.com/api/20200803/location.json?id=Tokyo&account=${config.tripsoApiId}&token=${config.tripsoApiKey}`)
//     .then(data => {
//         console.log(data.data.results[0]);
//     });

