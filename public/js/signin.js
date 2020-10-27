$(document).ready(function() {
    $( "#signin" ).click(function() {
        var userName = $("#username").val();
        var passWord = $("#password").val();
        $.ajax({
            method: "PUT",
            url: "/api/signin",
            data: {userName,passWord}
        }).then(function() {
            window.location.href = "/planning";
        });
    });
});