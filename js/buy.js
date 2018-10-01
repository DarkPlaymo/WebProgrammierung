var Warenkorb_json = {};

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
    var tablebody = document.getElementById("TbodyWarenkorb");
    tablebody.innerHTML = '<col width="10%"> <col width="15%"> <col width="50%"> <col width="10%"> <col width="15%"><tr><th> Anzahl </th><th> Gericht </th><th> Beschreibung </th><th> EinzelPreis </th><th> Gesamtpreis </th> </tr>';
    for (i in Warenkorb_json) {
        tablebody.innerHTML += '<tr><td>' + Warenkorb_json[i].count + '</td><td>' + Warenkorb_json[i].meal + '</td><td>' + Warenkorb_json[i].description + '</td><td>' + Warenkorb_json[i].price + '</td><td>' + parseInt(Warenkorb_json[i].count) * parseInt(Warenkorb_json.description[i].price) + '</td></tr>'
    }
}
