import './cookie.js';
var Warenkorb = new Array();

function buy(id) {
    alert(document.getElementById("Warenkorb").innerText) ;
    Warenkorb.push(id);
}