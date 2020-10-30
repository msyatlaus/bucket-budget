module.exports = function (app, rootDirectory) {
    // Welcome Page
    app.get('/', (req, res) => {
        console.log(req.session);

        res.sendFile(rootDirectory + '/public/welcome.html');
    });

    // Planning Page
    app.get('/planning', (req, res) => {
        console.log(req.session);

        res.sendFile(rootDirectory + '/public/planning.html')
    });
}