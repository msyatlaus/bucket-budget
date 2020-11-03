var totalSpending = 0;
$(document).ready(function () {
    $.ajax({
        method: "GET",
        url: "/api/budgetItemsOfUser"
    }).then(function (data) {
        console.log(data);
        $.each(data.budget_items, function(i, item) {  
            totalSpending = totalSpending + item.price;
            var tr = '<tr id = ' + item.id + '>';
            tr += '<td>' + item.name + '</td>';
            tr += '<td class=qty><button class="delete" onclick = subQty('+item.id+','+item.quantity+','+item.price+');>-</button> ' + item.quantity + ' <button class="delete" onclick = addQty('+item.id+','+item.quantity+','+item.price+');>+</button></td>';
            tr += '<td>$' + item.price + '</td>';
            tr += '</tr>';        
            $('#subtotals').append(tr);
        });

        $('.budgetCal').html('<h7>Total Cost: $' + totalSpending + '</h7>');
    });

});

function subQty(id, qty, price){
    var idClick = id; 
    var qtyClick = qty - 1; 
    if (qtyClick === 0){
        $('table#subtotals tr#'+idClick+'').remove();
    }else{
        $('#subtotals #'+idClick+' .qty').html('<button class="delete" onclick = subQty('+idClick+','+qtyClick+','+price+');>-</button> '+qtyClick+' <button class="delete" onclick = addQty('+idClick+','+qtyClick+','+price+');>+</button>');
    }
    dedCalBudget(price, 1);
}

function addQty(id, qty, price){
    var idClick = id; 
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
    $('.budgetCal').html('<h7>Total Cost: $' + totalSpending.toFixed() + '</h7>');
}

function dedCalBudget(price, qty){
    totalSpending = totalSpending - (price * qty); 
    $('.budgetCal').html('<h7>Total Cost: $' + totalSpending.toFixed() + '</h7>');
}

$('#confirm-trip').click(function () {
    var resultObj = []

    for ( let [i,row] of [...subtotals.rows].entries() ){ 
        var testArray = [];
        testArray.push(row.id);
        for( let [j,cell] of [...row.cells].entries() ){
             testArray.push(cell.innerText.replace(/[^a-z0-9\s]/gi, ''))
        }
        resultObj.push(testArray);
    }
    resultObj.shift();
    console.log(resultObj);

    $.each( resultObj, function( key, value ) {
        $.ajax({
            method: "PUT",
            url: "/api/budgetItems",
            data: {
                name: value[1],
                quantity: parseInt(value[2]),
                price: parseInt(value[3])
            }
        });
    });

});
