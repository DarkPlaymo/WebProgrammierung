//Release/Occupy Seat
function prepareSeat(){                             //Get first free seat and occupy it
    var myseat = -1;

    //Parameters from the url, set by the php_GET
    var parameters = new URL(window.location.href).searchParams,
        site = parameters.get("site"),
        persons = parameters.get("persons"),
        name = parameters.get("name");

    //If Home and Cookie undefined => CreateTablePlan with free seat
    if (site =='home'){                             
        if(getCookie('seat')==undefined){           
            var xhttp = new XMLHttpRequest();
            //get free seat
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    var TableJson = JSON.parse(this.responseText);
                    for (i in TableJson) {
                        if(TableJson[i]['besetzt'] == 0){
                            myseat = i;
                            break;
                        };
                    }
                    //occupy the free Seat with the Infos of the Login and createTablePlan with the free Seat
                    occupySeat(myseat, name, persons);
                    createTablePlan(myseat);  
                    
                    //Manipulate Tischheader (because Cookie is not set)
                    document.getElementById("tischheader").innerHTML += myseat;
                }
            };
            xhttp.open("GET", "../php/php-scripts/getSeat.php", true);
            xhttp.send();  
        } 

        //If Home and Cookie set => CreateTablePlan with Cookie
        else {                                   
            createTablePlan();
        } 
    } 

    //If Kueche => CreateTablePlan without own Table
    if (site == 'kueche') {                        
        createTablePlan(); 
    }
}
function occupySeat(seat, name, persons){           //Set Cookies | Update Seat in DB
    //Update Seat in DB
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "../php/php-scripts/updateSeat.php?seat=" + seat + "&name=" + name + "&persons=" + persons + "&besetzen=1", true);
    xmlhttp.send();

    //Set Cookies
    setCookie("name", name);
    setCookie("persons", persons);
    setCookie("seat", seat);
}
function releaseSeat(){                             //Delete Cookies | Update Seat in DB | Delete Orders | redirect to login-page
    seat = getCookie("seat");

    //Delete Orders of this seat in DB
    var xmlhttp2 = new XMLHttpRequest();
    xmlhttp2.open("GET", "../php/php-scripts/deleteOrder.php?id=" + seat, true);
    xmlhttp2.send();

    //Update/release Seat in DB and delete Cookies in Browser
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200){
            removeCookie("name");
            removeCookie("persons");
            removeCookie("seat");
            window.location.href='/';
        }
    };
    xmlhttp.open("GET", "../php/php-scripts/updateSeat.php?seat=" + seat + "&besetzen=0", true);
    xmlhttp.send();
}

//Table-Plan
function createTablePlan(myseat = 0) {                        //Get Information, which tables are free/occupied/my and draw SVG
    var TableJson={};   //TableJson = {"1":{ 'besetzt': "0"}, "2":{ 'besetzt': "1"}, "3":{ 'besetzt': "0"} ...}
    var TableArray=[];  //TableArray = ["free", "besetzt", "free", "my", "besetzt",...]
    var helpID=1;       //for index in array (index in JSON is a String) => JSON["1"] = Array[1]

    //Get Tables from DB
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            TableJson = JSON.parse(this.responseText);

            //fill TableArray with own seat (if you have a own seat)
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
                if (i == String(getCookie("seat") || i == String(myseat))){
                    TableArray[helpID] = "my";
                }
                helpID++;
            }

            //draw SVG with information, which seats are free, occupied, ownseat
            drawSVG(TableArray);                
        }        
    };
    xhttp.open("GET", "../php/php-scripts/getSeat.php", true);
    xhttp.send();
}
function drawSVG(TableArray){                       //TableArray = ["free", "besetzt", "free", ...]
    var xmlns="http://www.w3.org/2000/svg";
    
    //get "MySVG" and make it visible
    var svg = document.getElementById("MySVG");
    setAttributes(svg, {"height":"510", "width":"510"});

    //Rectangle = Restaurant-Ground
    var ground = document.createElementNS(xmlns, "rect");
    setAttributes(ground, {"id":"ground", "class":"table ground", "rx":"15", "ry":"15", "width":"475", "height":"475", "x":"17", "y":"17"});
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
            
            //add Table and Table-Nr. to MySVG
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