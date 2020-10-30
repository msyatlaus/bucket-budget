var initBudget;
var totalSpending = 0;
var city;
$(document).ready(function () {
    

    $("#search").click(function () {
        city = $("#placeVisit").val();
        initBudget = $("#budget").val();
        getInfo();
        document.getElementById("main-page").style.display = "block";
    });

    function getInfo(){
        getHotels();
        getDining();
        getNight();
        getTour();
        addCalBudget(0, 0);
    }

    function getHotels(){
        $.ajax({
            method: "GET",
            url: "/triposo/highlights/hotels/" + city
        }).then(function (data) {
            console.log(data);

            $.each(data, function(i, item) {  
                $('#hotels').append($('<tr>').attr('id',$.trim(decodeURIComponent(item.id))).append(
                             $('<td>').text($.trim(decodeURIComponent(item.name))),
                             $('<td>').text($.trim(decodeURIComponent(item.hotels_score.toFixed(2)))),
                             $('<td>').text($.trim(decodeURIComponent("$" + (((item.hotels_score)/2)*100).toFixed(2))))                    
                           )
                )
            });
        });
    }

    function getDining(){
        $.ajax({
            method: "GET",
            url: "/triposo/highlights/dining/" + city
        }).then(function (data) {
            console.log(data);
            $.each(data, function(i, item) {  
                $('#dining').append($('<tr>').attr('id',$.trim(decodeURIComponent(item.id))).append(
                             $('<td>').text($.trim(decodeURIComponent(item.name))),
                             $('<td>').text($.trim(decodeURIComponent(item.score.toFixed(2)))),
                             $('<td>').text($.trim(decodeURIComponent("$" + (((item.score)/2)*10).toFixed(2))))                    
                           )
                )
            });
        });
    }

    function getNight(){
        $.ajax({
            method: "GET",
            url: "/triposo/highlights/nightlife/" + city
        }).then(function (data) {
            console.log(data);
            $.each(data, function(i, item) {  
                $('#night').append($('<tr>').attr('id',$.trim(decodeURIComponent(item.id))).append(
                             $('<td>').text($.trim(decodeURIComponent(item.name))),
                             $('<td>').text($.trim(decodeURIComponent(item.score.toFixed(2)))),
                             $('<td>').text($.trim(decodeURIComponent("$" + (((item.score)/2)*10).toFixed(2))))                    
                           )
                )
            });
        });
    }

    function getTour(){
        $.ajax({
            method: "GET",
            url: "/triposo/highlights/tag/" + city + '/tour'
        }).then(function (data) {
            console.log(data);
            $.each(data, function(i, item) {  
                $('#night').append($('<tr>').attr('id',$.trim(decodeURIComponent(item.id))).append(
                             $('<td>').text($.trim(decodeURIComponent(item.name))),
                             $('<td>').text($.trim(decodeURIComponent(item.score.toFixed(2)))),
                             $('<td>').text($.trim(decodeURIComponent("$" + (((item.score)/2)*10).toFixed(2))))                    
                           )
                )
            });
        });
    }
    
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

    $('#dining').on( 'click', 'tr', function () {

        var diningName = this.cells[0].innerHTML;
        var diningPrice = this.cells[2].innerHTML;
        var idSend = this.id; 
        var qtySend = 1; 

        var tr = '<tr id = ' + this.id + '>';
        tr += '<td>' + diningName + '</td>';
        tr += '<td class=qty><button class="delete" onclick = subQty('+idSend+','+qtySend+','+diningPrice.replace('$', '')+');>-</button> 1 <button class="delete" onclick = addQty('+idSend+','+qtySend+','+diningPrice.replace('$', '')+');>+</button></td>';
        tr += '<td>' + diningPrice + '</td>';
        tr += '</tr>';        
        $('#subtotals').append(tr);

        addCalBudget(diningPrice.replace('$', ''), qtySend);
    });

    $('#night').on( 'click', 'tr', function () {

        var nightName = this.cells[0].innerHTML;
        var nightPrice = this.cells[2].innerHTML;
        var idSend = this.id; 
        var qtySend = 1; 

        var tr = '<tr id = ' + this.id + '>';
        tr += '<td>' + nightName + '</td>';
        tr += '<td class=qty><button class="delete" onclick = subQty('+idSend+','+qtySend+','+nightPrice.replace('$', '')+');>-</button> 1 <button class="delete" onclick = addQty('+idSend+','+qtySend+','+nightPrice.replace('$', '')+');>+</button></td>';
        tr += '<td>' + nightPrice + '</td>';
        tr += '</tr>';        
        $('#subtotals').append(tr);

        addCalBudget(nightPrice.replace('$', ''), qtySend);
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
    console.log(resultObj);
    // for loop?
    // $.ajax({
    //     method: "PUT",
    //     url: "/api/budgetItems",
    //     data: {
    //         // name: ,
    //         // quantity: ,
    //         // price: ,
    //         // event_id:
    //     }
    // }).then(function () {
    //     window.location.href = "/planning";
    // });
});

