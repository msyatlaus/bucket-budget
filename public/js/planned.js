$(document).ready(function () {
    $.ajax({
        method: "GET",
        url: "/api/budgetItemsOfUser"
    }).then(function (data) {
        console.log(data);

        $.each(data.budget_items, function(i, item) {  

            var tr = '<tr id = ' + item.id + '>';
            tr += '<td>' + item.name + '</td>';
            tr += '<td class=qty><button class="delete">-</button> '+ item.quantity +'<button class="delete">+</button></td>';
            tr += '<td>$' + item.price + '</td>';
            tr += '</tr>';        
            $('#subtotals').append(tr);
        });
    });

});