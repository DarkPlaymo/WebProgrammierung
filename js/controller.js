//Tabs
function openTab(tabname, elmnt, color) {
    var i, tabcontent, tablinks;

    // Hide all Tabcontents by default
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove the background color of all Tablinks (Buttons)
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }

    // Show the specific Tabcontent and add background-color to Tablink
    document.getElementById(tabname).style.display = "block";
    elmnt.style.backgroundColor = color;
}
function prepareTab(){
    //open DefaultTab
    var defaultTab = document.getElementById("defaultTab");
    if(defaultTab!=null) {
        defaultTab.click();
    }
}

// Navigation
function openNav() {
    document.getElementById("mySideNav").style.width = "250px";
}
function closeNav() {
    document.getElementById("mySideNav").style.width = "0";
} 

//Accordion
function activateAccordionController() {
    var acc = document.getElementsByClassName("accordion");

    for (var i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            // Toggle between adding and removing the "active" class, to highlight the button that controls the panel
            this.classList.toggle("active");

            // Toggle between hiding and showing the active panel
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") { panel.style.display = "none"; } 
            else { panel.style.display = "block"; }
        });
    } 
}


window.onload = function () { 
    //Tabs
    prepareTab();

    //Seat
    prepareSeat();

    //Accordion
    activateAccordionController();

    //Cookiebanner
    checkCookiebanner();
}