//Variables for Compliance Cookie
var cookieDuration = 2;                     // Number of days before the cookie expires, and the banner reappears
var cookieName = 'complianceCookie';        // Name of cookie
var cookieValue = 'on';                     // Value of cookie



// ~~~ basic cookie functions ~~~ //
function setCookie(cname, cvalue, exdays=365) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
    var nameEQ = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');

    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(nameEQ) == 0) {
            return c.substring(nameEQ.length, c.length);
        }
    }
    return "";
}
function removeCookie(cname){
    setCookie(cname,"",-1);
}

// ~~~ Compliance-Cookie-Banner ~~~ //
function createCookieBanner(){
    var bodytag = document.getElementsByTagName('body')[0];
    var div = document.createElement('div');
    div.setAttribute('id','cookie-law');
    div.innerHTML = '<p>Wir benutzen Cookies, damit du unsere Website optimal benutzen kannst. Durch dein Fortfahren, gehen wir davon aus, dass du damit einverstanden bist. <cookie><a href="javascript:void(0)" class="closebtn" onclick="removeCookieBanner()">&times;</a></cookie></p>';    
     
    bodytag.insertBefore(div,bodytag.firstChild); // Adds the Cookie Law Banner just after the opening <body> tag
     
    document.getElementsByTagName('body')[0].className+=' cookiebanner'; //Adds a class to the <body> tag when the banner is visible
     
    setCookie(window.cookieName,window.cookieValue, window.cookieDuration); // Create the cookie
}
function removeCookieBanner(){
	var element = document.getElementById('cookie-law');
	element.parentNode.removeChild(element);
}
window.onload = function(){
    if(getCookie(window.cookieName) != window.cookieValue){
        createCookieBanner(); 
    }
}