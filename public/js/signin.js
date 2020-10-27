$(document).ready(function () {
    // Google Signin
    gapi.load('auth2', () => {
        gapi.auth2.init({
            client_id: '320381748790-atuc5m3d33bf9114hu4bu5kvmikuqjad.apps.googleusercontent.com'
        });
    });

    function onSignIn(googleUser) {
        // var profile = googleUser.getBasicProfile();
        // console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
        // console.log('Name: ' + profile.getName());
        // console.log('Image URL: ' + profile.getImageUrl());
        // console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.

        console.log("test Button");
    }


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