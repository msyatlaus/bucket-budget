
$(document).ready(function () {
    $("#search").click(function () {
        var city = $("#placeVisit").val();
        $.ajax({
            method: "GET",
            url: "/triposo/highlights/hotels/" + city
        }).then(function (data) {
            console.log(data);
            var resultEl = document.getElementById("result");
            resultEl.style.display = "block";
        });
    });

    // $("#search").click(function () {
    //     var resultEl = document.getElementById("result");
    //      resultEl.style.display = "block";
    // });
});