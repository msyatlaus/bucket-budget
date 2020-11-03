$(document).ready(function () {
    $.ajax({
        method: "GET",
        url: "/api/budgetItemsOfUser"
    }).then(function (data) {
        console.log(data);
        idsend = 
        $.each(data.budget_items, function(i, item) {  

            var tr = '<tr id = ' + item.id + '>';
            tr += '<td>' + item.name + '</td>';
            tr += '<td class=qty><button class="delete" onclick = subQty('+idSend+','+qtySend+','+item.price+');>-</button> ' + item.quantity + ' <button class="delete" onclick = addQty('+idSend+','+qtySend+','+nightPrice.replace('$', '')+');>+</button></td>';
            tr += '<td>$' + item.price + '</td>';
            tr += '</tr>';        
            $('#subtotals').append(tr);
        });
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
    $('.budgetCal').html('<h7>Total Cost: $' + totalSpending.toFixed() + '</h7><h7>Budget Remaining: $' + initBudget.toFixed()+ '</h7>');
}

function dedCalBudget(price, qty){
    totalSpending = totalSpending - (price * qty); 
    initBudget = initBudget + (price * qty); 
    $('.budgetCal').html('<h7>Total Cost: $' + totalSpending.toFixed() + '</h7><h7>Budget Remaining: $' + initBudget.toFixed()+ '</h7>');
}
