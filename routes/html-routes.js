module.exports = function (app, rootDirectory) {
    // Welcome Page
    app.get('/', (req, res) => {
        res.sendFile(rootDirectory + '/public/welcome.html');
    });
}