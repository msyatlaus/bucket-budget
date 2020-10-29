const axios = require('axios');
const config = require('../config/config.js');

const triposoUrl = `https://www.triposo.com/api/20200803`;
const accountParams = `account=${config.triposo.apiId}&token=${config.triposo.apiKey}`;

module.exports = function (app) {
    // Get location article
    app.get('/triposo/article/:location', (req, res) => {
        let location = req.params.location;

        axios.get(`${triposoUrl}/article.json?location_ids=${location}&count=10&${accountParams}`).then(data => {
            res.json(data.data.results);
        });
    });

    // Get recommended cities from country
    app.get('/triposo/findcities/:countryCode', (req, res) => {
        let countryCode = req.params.countryCode;

        axios.get(`${triposoUrl}/location.json?countrycode=${countryCode}&type=city&${accountParams}`).then(data => {
            res.json(data.data.results);
        });
    });

    // Get highlights at specific latitude and longitude
    app.get('/triposo/highlights/:lat/:lon', (req, res) => {
        let lat = req.params.lat;
        let lon = req.params.lon;

        axios.get(`${triposoUrl}/local_highlights.json?latitude=${lat}&longitude=${lon}&${accountParams}`).then(data => {
            res.json(data.data.results);
        });
    })

    // Get highlights by city name
    app.get('/triposo/highlights/:city', (req, res) => {
        let city = req.params.city;

        axios.get(`${triposoUrl}/poi.json?location_id=${city}&${accountParams}`).then(data => {
            res.json(data.data.results);
        });
    })

    // Get detailed information on single points of interest
    app.get('/triposo/poi/:poiId', (req, res) => {
        let poiId = req.params.poiId;

        axios.get(`${triposoUrl}/poi.json?id=${poiId}&${accountParams}`).then(data => {
            res.json(data.data.results);
        });
    });

    // Get common tag labels
    app.get('/triposo/tags', (req, res) => {

        axios.get(`${triposoUrl}/common_tag_labels.json?${accountParams}`).then(data => {
            res.json(data.data.results);
        });
    });
}

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