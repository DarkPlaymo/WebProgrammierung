function setAttributes(el, attrs){
    for(var key in attrs) {
        el.setAttributeNS(null, String(key), String(attrs[key]));
      }
}

function createTables(myarr){
    var xmlns="http://www.w3.org/2000/svg";
    var svg = document.getElementById("mysvg");
    var ground = document.createElementNS(xmlns, "rect");
    setAttributes(svg, {"height":"525", "width":"525"});
    setAttributes(ground, {"id":"ground", "class":"table ground", "rx":"15", "ry":"15", "width":"475", "height":"475", "x":"25", "y":"25"});
    svg.appendChild(ground);

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 4; j++) {
            var id = 1 + i*4 + j;
            var x = 50 + i * 150;
            var y = 50 + j * 115;

            var rect = document.createElementNS(xmlns, "rect");
            var text = document.createElementNS(xmlns, "text");
            setAttributes(rect, {"width":"125", "height":"80", "rx":"15", "ry":"15"});
            setAttributes(rect, {"x":String(x), "y":String(y), "class":"table "+String(myarr[id])});
            setAttributes(text, {"x":String(x+50), "y":String(y+50), "font-size":"30px"});
            text.textContent= String(id);
      
            svg.appendChild(rect);
            svg.appendChild(text);
        }
    }
}

function drawing() {
    var myjson={};
    var myarr=[];
    var h=1;
    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            myjson = JSON.parse(this.responseText);
            for (i in myjson) {
                switch(myjson[i]['besetzt']){
                    case "0":{
                        myarr[h] = "free";
                        break;
                    }
                    case "1":{
                        myarr[h] = "occupied";
                        break;
                    }
                }
                if (i == String(getCookie("seat"))){
                    myarr[h] = "my";
                }
                h++;
            }
            createTables(myarr);                
        }        
    };
    xhttp.open("GET", "../php/getfreeseat.php", true);
    xhttp.send();
}