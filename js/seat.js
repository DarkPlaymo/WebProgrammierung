//Release/Occupy Seat
function prepareSeat(){                             //Get first free seat and occupy it
    var url = new URL(window.location.href);
    if (url.searchParams.get("site")=='home'){
        if(!getCookie("seat")){
            var myseat = -1;
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    var TableJson = JSON.parse(this.responseText);
                    for (i in TableJson) {
                        if(TableJson[i]['besetzt'] == 0){
                            myseat = i;
                            break;
                        };
                    }                
                    var persons = url.searchParams.get("persons");
                    var name = url.searchParams.get("name");
                    occupySeat(myseat, name, persons);

                    //if header is not set by cookie, set it manually
                    if(document.getElementById("tischheader").innerHTML == "Sie haben Tischnummer "){
                        document.getElementById("tischheader").innerHTML = "Sie haben Tischnummer " + myseat;
                    }
                }
            };
            xhttp.open("GET", "../php/getSeat.php", true);
            xhttp.send(); 
        }
        createTablePlan();   
    }
}
function occupySeat(seat, name, persons){           //Set Cookies | Update Seat in DB
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "../php/updateSeat.php?seat=" + seat + "&name=" + name + "&persons=" + persons + "&besetzen=1", true);
    xmlhttp.send();
    setCookie("name", name);
    setCookie("persons", persons);
    setCookie("seat", seat);
}
function releaseSeat(){                             //Delete Cookies | Update Seat in DB | redirect to login-page
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
    xmlhttp.open("GET", "../php/updateSeat.php?seat=" + seat + "&besetzen=0", true);
    xmlhttp.send();
}

//Table-Plan
function createTablePlan() {                        //Get Information, which tables are free/occupied/my and draw SVG
    var TableJson={};   //TableJson = {"1":{ 'besetzt': "0"}, "2":{ 'besetzt': "1"}, "3":{ 'besetzt': "0"} ...}
    var TableArray=[];  //TableArray = ["free", "besetzt", "free", ...]
    var helpID=1;
    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            TableJson = JSON.parse(this.responseText);
            for (i in TableJson) {
                switch(TableJson[i]['besetzt']){
                    case "0":{
                        TableArray[helpID] = "free";
                        break;
                    }
                    case "1":{
                        TableArray[helpID] = "occupied";
                        break;
                    }
                }
                if (i == String(getCookie("seat"))){
                    TableArray[helpID] = "my";
                }
                helpID++;
            }
            drawSVG(TableArray);                
        }        
    };
    xhttp.open("GET", "../php/getSeat.php", true);
    xhttp.send();
}
function drawSVG(TableArray){                       //TableArray = ["free", "besetzt", "free", ...]
    var xmlns="http://www.w3.org/2000/svg";
    var svg = document.getElementById("mysvg");
    var ground = document.createElementNS(xmlns, "rect");

    //make "mysvg" visible
    setAttributes(svg, {"height":"525", "width":"525"});

    //Rectangle = Restaurant-Ground
    setAttributes(ground, {"id":"ground", "class":"table ground", "rx":"15", "ry":"15", "width":"475", "height":"475", "x":"25", "y":"25"});
    svg.appendChild(ground);

    //Change x and y for each Table => Verschiebung
    //Change id for each Table => Table-Nr.
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 4; j++) {
            var id = 1 + i*4 + j;
            var x = 50 + i * 150;
            var y = 50 + j * 115;

            //Rectangle = Table
            var rect = document.createElementNS(xmlns, "rect");
            setAttributes(rect, {"width":"125", "height":"80", "rx":"15", "ry":"15", "x":String(x), "y":String(y), "class":"table "+String(TableArray[id])});

            //Text = Table-Nr.
            var text = document.createElementNS(xmlns, "text");
            setAttributes(text, {"x":String(x+50), "y":String(y+50), "font-size":"30px"});
            text.textContent= String(id);
      
            svg.appendChild(rect);
            svg.appendChild(text);
        }
    }
}
function setAttributes(el, attrs){                  //Helper Function to set multiple attributes at once
    for(var key in attrs) {
        el.setAttributeNS(null, String(key), String(attrs[key]));
      }
}