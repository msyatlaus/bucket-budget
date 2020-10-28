$(document).ready(function () {
    // Google Initialization
    gapi.load('auth2', () => {
        gapi.auth2.init({
            client_id: '320381748790-3v1689ebkinvmndl34kjb07fu2nijvl7.apps.googleusercontent.com'
        }).then(() => {
            console.log("Google auth initialized");

            // Sign in button on click
            $('.g-signin2').click(() => {
                // console.log('test');

                console.log(gapi.auth2);
            })
        });
    });

    $("#signin").click(function () {
        var userName = $("#username").val();
        var passWord = $("#password").val();
        $.ajax({
            method: "PUT",
            url: "/api/signin",
            data: {
                user: userName,
                password: passWord
            }
        }).then(function () {
            window.location.href = "/planning";
        });
    });
});