$(document).ready(function () {
    $("#signup").click(function () {
        var userName = $("#username").val();
        var passWord = $("#password").val();
        $.ajax({
            method: "PUT",
            url: "/api/signup",
            data: {
                user: userName,
                password: passWord
            }
        }).then(function () {
            window.location.href = "/signin";
        });
    });
});