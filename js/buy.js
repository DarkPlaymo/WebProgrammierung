var Warenkorb = new Array();

function buy(id) {
    var text = document.getElementById("btnWarenkorb").innerHTML;
    var len = text.length;
    var newcount = parseInt(text.slice(11,len)) + 1;

    //manipulate html
    document.getElementById("btnWarenkorb").innerHTML = "Warenkorb (" + newcount + ")";

    Warenkorb.push(id);
}