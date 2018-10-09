var Warenkorb_json = {},    // Warenkorb_json = {"1":{meal: "Hamburger", description: "blabla", price: "5.5", count: 2}, "2":{...}, ...}
    gerichte = [];          // gerichte = [[1,2], [11,5], [38,1]]

function buy(id, gericht, beschreibung, preis) {                //fill Warenkorb_json and create Bill-Table
    //Update Warenkorb-Tab
    var text = document.getElementById("btnWarenkorb").innerHTML,
        newcount = parseInt(text.slice(11,text.length)) + 1;
    document.getElementById("btnWarenkorb").innerHTML = "Warenkorb (" + newcount + ")";
    
    //Insert or Update meal in Warenkorb_json
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
    createBillTable();
}

function createBillTable() {                                   //create Bill Table and calculate overall Bill-Price
    var Warenkorb = document.getElementById("Warenkorb"),
        bestellpreis_int = 0,
        bestellpreis_str = "",
        gesamtpreis_int = 0,
        gesamtpreis_str = "";
    //reset gerichte to build it from the start
    gerichte = [];
    
    //Table-Header
    Warenkorb.innerHTML = '<table id="TblWarenkorb" width=100% style=margin:20px><tbody id="TbodyWarenkorb"> </tbody></table>';
    var tablebody = document.getElementById("TbodyWarenkorb"); 
    tablebody.innerHTML = '<col width="10%"> <col width="15%"> <col width="50%"> <col width="10%"> <col width="15%"><tr><th> Anzahl </th><th> Gericht </th><th> Beschreibung </th><th> Einzelpreis </th><th> Gesamtpreis </th> </tr>';

    //A Row per Meal
    for (i in Warenkorb_json) {
        //Calculate Prices
        gesamtpreis_int = (parseFloat(Warenkorb_json[i].count) * parseFloat(Warenkorb_json[i].price));
        bestellpreis_int += gesamtpreis_int;
        gesamtpreis_str = gesamtpreis_int.toLocaleString("en-US", {minimumFractionDigits: 2});

        //Push to gerichte
        gerichte.push([parseInt(i) , Warenkorb_json[i].count]);

        //add new row
        tablebody.innerHTML += '<tr><td>' + Warenkorb_json[i].count + '</td><td>' + Warenkorb_json[i].meal + '</td><td>' + Warenkorb_json[i].description + '</td><td>' + Warenkorb_json[i].price + ' &euro;</td><td>' + gesamtpreis_str + ' &euro;</td></tr>';
    }
    //overall price and buy button
    bestellpreis_str = bestellpreis_int.toLocaleString("en-US", {minimumFractionDigits: 2});
    Warenkorb.innerHTML += "<div class='warenkorb'><p>Gesamtpreis: " + bestellpreis_str + " &euro;</p><button class='btnbuy' onclick='order()'> kostenpflichtig bestellen </button></div>";
    
}

function order(){                                              //Send Order to DB and change page
    //send order to db
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "../php/php-scripts/insertOrder.php?gerichte=" + gerichte + "&seat=" + getCookie("seat"), true);
    xmlhttp.send();

    //clear/reset page
    Warenkorb_json = {};
    gerichte = [];
    document.getElementById("btnWarenkorb").innerHTML = "Warenkorb (0)";
    
    //refill page
    document.getElementById("Warenkorb").innerHTML = "<h2> Bestellung wurde angenommen :) </h2>";
    document.getElementById("Warenkorb").innerHTML += "<a href='https://www.chess.com/de/play/computer' target='_blank'><img src='../php/chess.php'></img></a>";
}
