// ~~~ basic cookie functions ~~~ //
function setCookie(cname, cvalue, exdays=365) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
    var nameEQ = cname + "=",                                          //nameEQ = "comlianceCookie="; 
        cookie_array = decodeURIComponent(document.cookie).split(";"); //cookie_array = ["complianceCookie=on", "seat=2", "persons=Max",...]

    //loop over every Cookie
    for(var i = 0; i < cookie_array.length; i++) {
        var c = cookie_array[i];

        //As long as cookie starts with " " (space), start the cookie on the next literal, e.g. "    complianceCookie=on" => "complianceCookie=on"
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }

        //if Cookie starts nameEQ it is the searched cookie
        if (c.indexOf(nameEQ) == 0) {
            return c.substring(nameEQ.length, c.length); //Value of Cookie starts after the "=" and stops at the end of String
        }
    }
    return null;
}
function removeCookie(cname){
    //negative expiration => remove
    setCookie(cname,"",-1);
}

// ~~~ Compliance-Cookie-Banner ~~~ //
function createCookieBanner(){
    //Create CookieBanner
    var div = document.createElement('div');
    div.setAttribute('id','cookie-law');
    div.innerHTML = '<p>Wir benutzen Cookies, damit du unsere Website optimal benutzen kannst. Durch dein Fortfahren, gehen wir davon aus, dass du damit einverstanden bist. <cookie><a href="javascript:void(0)" class="closebtn" onclick="removeCookieBanner()">&times;</a></cookie></p>';    
     
    // Adds the Cookie Law Banner just after the opening <body> tag
    var bodytag = document.getElementsByTagName('body')[0];
    bodytag.insertBefore(div,bodytag.firstChild); 
     
    //create Compliance Cookie
    setCookie('complianceCookie','on'); // Create the compliance-cookie
}
function removeCookieBanner(){
	var cookiebanner = document.getElementById('cookie-law');
	cookiebanner.parentNode.removeChild(cookiebanner);
}
function checkCookiebanner(){
    if(getCookie('complianceCookie') != 'on'){
        createCookieBanner(); 
    }
}