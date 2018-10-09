function serve(orderID){                                              //Delete Order
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {window.location.reload();}
    };
    xmlhttp.open("GET", "../php/php-scripts/deleteOrder.php?id=" + orderID, true);
    xmlhttp.send();

    
}