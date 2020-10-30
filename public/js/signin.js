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
                url: '/api/users',
                data: {
                    profileId: profile.getId(),
                    email: profile.getEmail(),
                    firstName: profile.getGivenName(),
                    lastName: profile.getFamilyName(),
                    imgUrl: profile.getImageUrl()
                }
            }).then(data => {
                // Reroute to planning page
                window.location.assign('/planning');
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