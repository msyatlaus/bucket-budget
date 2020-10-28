$(document).ready(function () {
    $("#search").click(function () {
        var city = $("#placeVisit").val();
        $.ajax({
            method: "GET",
            url: "/api/triposo/:city",
            data: {
                citySearch = city,
            }
        }).then(function () {
            var resultEl = document.getElementById("result");
            resultEl.style.display = "block";
        });
    });
});