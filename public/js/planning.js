
$(document).ready(function () {
    $("#search").click(function () {
        var city = $("#placeVisit").val();
        $.ajax({
            method: "GET",
            url: "/triposo/highlights/hotels/" + city
        }).then(function (data) {
            console.log(data);
            document.getElementById("hotel-result").style.display = "block";
            document.getElementById("total-result").style.display = "block";
            $.each(data, function(i, item) {  
                $('#hotels').append($('<tr>').attr('id',$.trim(decodeURIComponent(item.id))).append(
                             $('<td>').text($.trim(decodeURIComponent(item.name))),
                             $('<td>').text($.trim(decodeURIComponent(item.hotels_score.toFixed(2)))),
                             $('<td>').text($.trim(decodeURIComponent("$" + (((item.hotels_score)/2)*100).toFixed(2))))                    
                           )
                )
            });
        });
    });
    
    $('#hotels').on( 'click', 'tr', function () {
        var hotelName = this.cells[0].innerHTML;
        var hotelPrice = this.cells[2].innerHTML;
        var tr = '<tr>';
        tr += '<td>' + hotelName + '</td>';
        tr += '<td><button class="delete" data-key="'+ (1 + 1) +'">-</button> 1 <button class="delete" data-key="'+ (1 + 1) +'">+</button></td>';
        tr += '<td>' + hotelPrice + '</td>';
        tr += '</tr>';
        
        $('#subtotals').append(tr);
    });

    // $("#search").click(function () {
    //     var resultEl = document.getElementById("result");
    //      resultEl.style.display = "block";
    // });
});