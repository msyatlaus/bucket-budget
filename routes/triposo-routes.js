const axios = require('axios');

let credentials = {};

try {
    // Development Credentials
    const config = require('../config/config.js');
    credentials.apiId = config.triposo.apiId;
    credentials.apiKey = config.triposo.apiKey;
}
catch {
    // Deployment Credentials
    credentials.apiId = process.env.triposo_id;
    credentials.apiKey = process.env.triposo_key;
}

const triposoUrl = `https://www.triposo.com/api/20200803`;
const accountParams = `account=${credentials.apiId}&token=${credentials.apiKey}`;

module.exports = function (app) {
    // Get articles and summaries on specific locations
    app.get('/triposo/article/:location', (req, res) => {
        let location = req.params.location;

        axios.get(`${triposoUrl}/article.json?location_ids=${location}&count=10&${accountParams}`).then(data => {
            res.json(data.data.results);
        });
    });

    // Get recommended cities from two letter country code
    app.get('/triposo/findcities/:countryCode', (req, res) => {
        let countryCode = req.params.countryCode;

        axios.get(`${triposoUrl}/location.json?countrycode=${countryCode}&type=city&${accountParams}`).then(data => {
            res.json(data.data.results);
        });
    });

    // Get all points of interest at specific latitude and longitude
    app.get('/triposo/highlights/coords/:lat/:lon', (req, res) => {
        let lat = req.params.lat;
        let lon = req.params.lon;

        axios.get(`${triposoUrl}/local_highlights.json?latitude=${lat}&longitude=${lon}&${accountParams}`).then(data => {
            res.json(data.data.results);
        });
    });

    // Get all points of interest by city name
    app.get('/triposo/highlights/:city', (req, res) => {
        let city = req.params.city;

        axios.get(`${triposoUrl}/poi.json?location_id=${city}&${accountParams}`).then(data => {
            res.json(data.data.results);
        });
    });

    // Get hotel points of interest by city name
    app.get('/triposo/highlights/hotels/:city', (req, res) => {
        let city = req.params.city;

        axios.get(`${triposoUrl}/poi.json?location_id=${city}&tag_labels=hotels&${accountParams}`).then(data => {
            res.json(data.data.results);
        });
    });

    // Get dining points of interest by city name
    app.get('/triposo/highlights/dining/:city', (req, res) => {
        let city = req.params.city;

        axios.get(`${triposoUrl}/poi.json?location_id=${city}&tag_labels=eatingout&${accountParams}`).then(data => {
            res.json(data.data.results);
        });
    });

    // Get shopping points of interest by city name
    app.get('/triposo/highlights/shopping/:city', (req, res) => {
        let city = req.params.city;

        axios.get(`${triposoUrl}/poi.json?location_id=${city}&tag_labels=shopping&${accountParams}`).then(data => {
            res.json(data.data.results);
        });
    });

    // Get nightlife points of interest by city name
    app.get('/triposo/highlights/nightlife/:city', (req, res) => {
        let city = req.params.city;

        axios.get(`${triposoUrl}/poi.json?location_id=${city}&tag_labels=nightlife&${accountParams}`).then(data => {
            res.json(data.data.results);
        });
    });

    // Get points of interest by city name using custom tags
    app.get('/triposo/highlights/tag/:city/:tag', (req, res) => {
        let city = req.params.city;
        let tag = req.params.tag;

        axios.get(`${triposoUrl}/poi.json?location_id=${city}&tag_labels=${tag}&${accountParams}`).then(data => {
            res.json(data.data.results);
        });
    });

    // Get detailed information on single points of interest
    app.get('/triposo/poi/:poiId', (req, res) => {
        let poiId = req.params.poiId;

        axios.get(`${triposoUrl}/poi.json?id=${poiId}&${accountParams}`).then(data => {
            res.json(data.data.results);
        });
    });

    // Get event information on a tour
    app.get('/triposo/tour/:city', (req, res) => {
        let city = req.params.city;

        axios.get(`${triposoUrl}/tour.json?location_ids=${city}&${accountParams}`).then(data => {
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

// Triposo Endpoints:

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
