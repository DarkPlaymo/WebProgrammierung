function prepareseat(){
    var url = new URL(window.location.href);
    if (url.searchParams.get("site")=='home'){
        if(!getCookie("seat")){
            var myseat = -1;
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    var myjson = JSON.parse(this.responseText);
                    for (i in myjson) {
                        if(myjson[i]['besetzt'] == 0){
                            myseat = i;
                            break;
                        };
                    }                
                    var persons = url.searchParams.get("persons");
                    var name = url.searchParams.get("name");
                    occupySeat(myseat, name, persons);
                    if(document.getElementById("tischheader").innerHTML == "Sie haben Tischnummer "){
                        document.getElementById("tischheader").innerHTML = "Sie haben Tischnummer " + myseat;
                    }
                }
            };
            xhttp.open("GET", "../php/getfreeseat.php", true);
            xhttp.send(); 
        }
        drawing();   
    }
    
};


function occupySeat(seat, name, persons){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "../php/occupyfreeseat.php?seat=" + seat + "&name=" + name + "&persons=" + persons + "&besetzen=1", true);
    xmlhttp.send();
    setCookie("name", name);
    setCookie("persons", persons);
    setCookie("seat", seat);
}

function releaseSeat(){
    seat = getCookie("seat");
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200){
            removeCookie("name");
            removeCookie("persons");
            removeCookie("seat");
            window.location.href='/';
        }
    };
    xmlhttp.open("GET", "../php/occupyfreeseat.php?seat=" + seat + "&besetzen=0", true);
    xmlhttp.send();
}