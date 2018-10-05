window.onload = function(){
    var url = new URL(window.location.href);
    if (url.searchParams.get("site")=='home' && !getCookie("seat")){
        var myseat = -1;
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                $response = this.responseText;
                alert($response);
                var myjson = JSON.parse($response);
                for (i in myjson) {
                    if(myjson[i]['besetzt'] == 0){
                        myseat = i;
                        break;
                    };
                } 
                document.getElementById("tischheader").innerHTML = "Sie haben Tischnummer " + myseat;
                
                var persons = url.searchParams.get("persons");
                var name = url.searchParams.get("name");
                occupySeat(myseat, name, persons);
            }
        };
        xhttp.open("GET", "../php/getfreeseat.php", true);
        xhttp.send();
    }
    
};


function occupySeat(seat, name, persons){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "../php/occupyfreeseat.php?seat=" + seat + "&name=" + name + "&persons=" + persons + "&besetzen=1", true);
    xmlhttp.send();
    setCookie("name", name, 2);
    setCookie("persons", persons, 2);
    setCookie("seat", seat, 2);
}

function releaseSeat(){
    seat = getCookie("seat");
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "../php/occupyfreeseat.php?seat=" + seat + "&besetzen=0", true);
    xmlhttp.send();
    setCookie("name", "", -1);
    setCookie("persons", "", -1);
    setCookie("seat", seat, -1);
}