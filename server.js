const express = require('express');

const app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// Routes
// require('./routes/api-routes')(app);
require('./routes/html-routes')(app, __dirname);
require('./routes/triposo-routes')(app);

app.listen(PORT, () => {
    console.log("server running on localhost:" + PORT);
});