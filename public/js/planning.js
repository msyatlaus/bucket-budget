
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
        var idSend = this.id; 
        var qtySend = 1; 
        var tr = '<tr id = ' + this.id + '>';
        tr += '<td>' + hotelName + '</td>';
        tr += '<td class=qty><button class="delete" onclick = subQty('+idSend+','+qtySend+');>-</button> 1 <button class="delete" onclick = subQty('+idSend+','+qtySend+');>+</button></td>';
        tr += '<td>' + hotelPrice + '</td>';
        tr += '</tr>';
        
        $('#subtotals').append(tr);
    });

});

function subQty(id, qty){
    var idClick = id[0].id; 
    var qtyClick = qty - 1; 
    if (qtyClick === 0){
        $('table#subtotals tr#'+idClick+'').remove();
    }else{
        $('#subtotals #'+idClick+' .qty').html('<button class="delete" onclick = subQty('+idSend+'); data-key="'+hotelName+'">-</button> 1 <button class="delete" onclick = subQty(); data-key="'+hotelName+'">+</button>');
    }
    var r = this; 
}