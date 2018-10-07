var Warenkorb_json = {};
var gerichte = [];

function buy(id, gericht, beschreibung, preis) {
    var text = document.getElementById("btnWarenkorb").innerHTML;
    var newcount = parseInt(text.slice(11,text.length)) + 1;

    //manipulate html
    document.getElementById("btnWarenkorb").innerHTML = "Warenkorb (" + newcount + ")";
    
    if (Warenkorb_json[id] != undefined){
        Warenkorb_json[id].count++;
    } else {
        Warenkorb_json[id] = {
            meal: gericht,
            description: beschreibung,
            price: preis,
            count: 1
        }  
    }
    createTable();
}

function createTable() {
    var Warenkorb = document.getElementById("Warenkorb");
    var bestellpreis_int = 0;
    var bestellpreis_str = "";
    gerichte = [];
    
    Warenkorb.innerHTML = '<table id="TblWarenkorb" width=100% style=margin:20px><tbody id="TbodyWarenkorb"> </tbody></table>';

    var tablebody = document.getElementById("TbodyWarenkorb"); 
    tablebody.innerHTML = '<col width="10%"> <col width="15%"> <col width="50%"> <col width="10%"> <col width="15%"><tr><th> Anzahl </th><th> Gericht </th><th> Beschreibung </th><th> Einzelpreis </th><th> Gesamtpreis </th> </tr>';

    for (i in Warenkorb_json) {
        var gesamtpreis_int = (parseFloat(Warenkorb_json[i].count) * parseFloat(Warenkorb_json[i].price));
        bestellpreis_int += gesamtpreis_int;
        var gesamtpreis_str = gesamtpreis_int.toLocaleString("en-US", {minimumFractionDigits: 2});

        gerichte.push([parseInt(i) , Warenkorb_json[i].count]);

        tablebody.innerHTML += '<tr><td>' + Warenkorb_json[i].count + '</td><td>' + Warenkorb_json[i].meal + '</td><td>' + Warenkorb_json[i].description + '</td><td>' + Warenkorb_json[i].price + ' &euro;</td><td>' + gesamtpreis_str + ' &euro;</td></tr>';
    }
    bestellpreis_str = bestellpreis_int.toLocaleString("en-US", {minimumFractionDigits: 2});
    Warenkorb.innerHTML += "<div class='warenkorb'><p>Gesamtpreis: " + bestellpreis_str + " &euro;</p><button class='btnbuy' onclick='order()'> kostenpflichtig bestellen </button></div>";
    
}

function order(){
    //send order to db
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "../php/order.php?gerichte=" + gerichte + "&seat=" + getCookie("seat"), true);
    xmlhttp.send();

    //clear/reset page
    Warenkorb_json = {};
    gerichte = [];
    document.getElementById("btnWarenkorb").innerHTML = "Warenkorb (0)";
    
    //refill page
    document.getElementById("Warenkorb").innerHTML = "<h2> Bestellung wurde angenommen :) </h2>";
    document.getElementById("Warenkorb").innerHTML += "<a href='https://www.chess.com/de/play/computer' target='_blank'><img src='../php/chess.php'></img></a>";
}
