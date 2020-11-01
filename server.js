const express = require('express');
const session = require('express-session');

let credentials = {};

try {
    const config = require('./config/config.js');
    credentials.sessionSecret = config.sessionSecret;
}
catch {
    credentials.sessionSecret = process.env.session_secret;
}

console.log(credentials);

// Create Express application
const app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Sets up the Session for Google sign in reference
app.use(session({
    secret: credentials.sessionSecret,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 // Equals 1 day
    }
}));

// Static directory
app.use(express.static("public"));

// Routes
require('./routes/api-routes')(app);
require('./routes/html-routes')(app, __dirname);
require('./routes/triposo-routes')(app);

app.listen(PORT, () => {
    console.log("server running on http://localhost:" + PORT);
});