module.exports = function (app, rootDirectory) {
    // Welcome Page
    app.get('/', (req, res) => {
        res.sendFile(rootDirectory + '/public/welcome.html');
    });

    // Sign Up Page
    app.get('/signup', (req, res) => {
        res.sendFile(rootDirectory + '/public/signup.html')
    });

    // Sign In Page
    app.get('/signin', (req, res) => {
        res.sendFile(rootDirectory + '/public/signin.html')
    });

    // Planning Page
    app.get('/planning', (req, res) => {
        res.sendFile(rootDirectory + '/public/planning.html')
    });
}