module.exports = function (app, rootDirectory) {
    // Welcome Page
    app.get('/', (req, res) => {
        res.sendFile(rootDirectory + '/public/welcome.html');
    });

    // Planning Page
    app.get('/planning', (req, res) => {
        if (req.session.isLoggedIn === true) {
            res.sendFile(rootDirectory + '/public/planning.html')
        }
        else {
            res.redirect('/');
        }
    });

    // Log out user and redirect to welcome page
    app.get('/logout', (req, res) => {
        req.session.profileId = null;
        req.session.isLoggedIn = false;
        res.redirect('/');
    });
}