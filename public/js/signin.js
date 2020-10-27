$(document).ready(function () {
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