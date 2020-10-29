const axios = require('axios');
const config = require('../config/config.js');

const triposoUrl = `https://www.triposo.com/api/20200803/`;
const accountParams = `account=${config.triposo.apiId}&token=${config.triposo.apiKey}`;

module.exports = function (app) {
    // Get location article
    app.get('/triposo/article/:location', (req, res) => {
        let location = req.params.location;

        axios.get(`${triposoUrl}article.json?location_ids=${location}&count=10&${accountParams}`).then(data => {
            res.json(data.data.results);
        });
    })

    // app.get('/api/triposo/:city', (req, res) => {
    //     let city = req.params.city;

    //     axios.get(`https://www.triposo.com/api/20200803/tour.json?location_ids=${city}&count=10&account=${config.triposo.apiId}&token=${config.triposo.apiKey}`)
    //         .then(data => {
    //             console.log(data.data.results);
    //             res.json(data.data.results);
    //         }).catch(err => {
    //             console.log(err);
    //         });
    // });
}

/*
    common Tag label >> categories of things
    Food, Hotel, Site Seeing
*/

// Endpoints:

// article - retrieve article about a subject
// city_walk - create a city walk for a certain city
// common_tag_labels - retrieves list of common tag labels that can be used to filter API responses
// day_planner - produce an itinerary for one or more days for a particular location
// local_highlights - create a optimized set of POIs centered around a coordinate, the resulting POIs are annotated with distance to the coordinate
// local_score - calculate local scores for a set of coordinates
// location - retrieve information about locations such as cities and countries
// poi - retrieve information about points of interest
// property - retrieve information about metadata relating to locations, POIs or tours
// source - retrieve information about sources and the way to attribute them
// tag - retrieve information about tags and the tag labels that correspond to POIs, tours and articles
// tour - retrieve information about bookable tours