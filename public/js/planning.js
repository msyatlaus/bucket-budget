var initBudget;
var totalSpending = 0;

$(document).ready(function () {
    

    $("#search").click(function () {
        var city = $("#placeVisit").val();
        initBudget = $("#budget").val();
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
        tr += '<td class=qty><button class="delete" onclick = subQty('+idSend+','+qtySend+','+hotelPrice.replace('$', '')+');>-</button> 1 <button class="delete" onclick = addQty('+idSend+','+qtySend+','+hotelPrice.replace('$', '')+');>+</button></td>';
        tr += '<td>' + hotelPrice + '</td>';
        tr += '</tr>';        
        $('#subtotals').append(tr);

        addCalBudget(hotelPrice.replace('$', ''), qtySend);
    });

});

function subQty(id, qty, price){
    var idClick = id[0].id; 
    var qtyClick = qty - 1; 
    if (qtyClick === 0){
        $('table#subtotals tr#'+idClick+'').remove();
    }else{
        $('#subtotals #'+idClick+' .qty').html('<button class="delete" onclick = subQty('+idClick+','+qtyClick+','+price+');>-</button> '+qtyClick+' <button class="delete" onclick = addQty('+idClick+','+qtyClick+','+price+');>+</button>');
    }
    dedCalBudget(price, 1);
}

function addQty(id, qty, price){
    var idClick = id[0].id; 
    var qtyClick = qty + 1; 
    if (qtyClick === 0){
        $('table#subtotals tr#'+idClick+'').remove();
    }else{
        $('#subtotals #'+idClick+' .qty').html('<button class="delete" onclick = subQty('+idClick+','+qtyClick+','+price+');>-</button> '+qtyClick+' <button class="delete" onclick = addQty('+idClick+','+qtyClick+','+price+');>+</button>');
    }
    addCalBudget(price, 1);
}

function addCalBudget(price, qty){
    totalSpending = totalSpending + (price * qty); 
    initBudget = initBudget - (price * qty); 
    $('.budgetCal').html('<h7>Total Cost: $' + totalSpending.toFixed(2) + '</h7><h7>Budget Remaining: $' + initBudget.toFixed(2)+ '</h7>');
}

function dedCalBudget(price, qty){
    totalSpending = totalSpending - (price * qty); 
    initBudget = initBudget + (price * qty); 
    $('.budgetCal').html('<h7>Total Cost: $' + totalSpending.toFixed(2) + '</h7><h7>Budget Remaining: $' + initBudget.toFixed(2)+ '</h7>');
}