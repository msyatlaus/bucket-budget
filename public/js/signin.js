$(document).ready(function () {
    // Google Signin
    gapi.load('auth2', () => {
        gapi.auth2.init();
    });

    $('#g-signin').click(function () {
        alert("google signin");
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