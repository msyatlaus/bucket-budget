$(document).ready(function () {
    // Google Initialization
    gapi.load('auth2', () => {
        gapi.auth2.init({
            client_id: '320381748790-3v1689ebkinvmndl34kjb07fu2nijvl7.apps.googleusercontent.com'
        });
    });

    // Sign in button on click
    $('.g-signin2').click(() => {
        const auth2 = gapi.auth2.getAuthInstance();
        auth2.signIn().then(() => {
            const profile = auth2.currentUser.get().getBasicProfile();

            $.ajax({
                method: 'POST',
                url: '/api',
                data: {
                    userId: 'ID: ' + profile.getId(),
                    email: 'Email: ' + profile.getEmail(),
                    firstName: 'Given Name: ' + profile.getGivenName(),
                    lastName: 'Family Name: ' + profile.getFamilyName(),
                    imgUrl: 'Image URL: ' + profile.getImageUrl()
                }
            });
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