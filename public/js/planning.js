
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
            $.each(data, function(i, item) {  
                $('#hotels').append($('<tr>').attr('id',$.trim(decodeURIComponent(item.id))).append(
                             $('<td>').text($.trim(decodeURIComponent(item.name))),
                             $('<td>').text($.trim(decodeURIComponent(item.hotels_score))),
                             $('<td>').text($.trim(decodeURIComponent(((item.hotels_score)/2)*100)))                    
                           )
                )
            });
            
        });
    });

    // $("#search").click(function () {
    //     var resultEl = document.getElementById("result");
    //      resultEl.style.display = "block";
    // });
});