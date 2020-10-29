$(document).ready(function () {
    $("#search").click(function () {
        var city = $("#placeVisit").val();
        $.ajax({
            method: "GET",
            url: "/api/triposo/" + city
        }).then(function (data) {
            console.log(data);
            var resultEl = document.getElementById("result");
            resultEl.style.display = "block";
        });
    });
});