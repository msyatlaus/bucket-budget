$(document).ready(function () {
    $.ajax({
        method: "GET",
        url: "/api/budgetItemsOfUser"
    }).then(function (data) {
        console.log(data);

        // $.each(data, function(i, item) {  
        //     $('#hotels').append($('<tr>').attr('id',$.trim(decodeURIComponent(item.id))).append(
        //                  $('<td>').text($.trim(decodeURIComponent(item.name))),
        //                  $('<td>').text($.trim(decodeURIComponent(item.hotels_score.toFixed()))),
        //                  $('<td>').text($.trim(decodeURIComponent("$" + (((item.hotels_score)/2)*100).toFixed())))                    
        //                )
        //     )
        // });
    });

});