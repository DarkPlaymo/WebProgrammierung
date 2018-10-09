<?php session_start();?>
<!DOCTYPE html>
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1;text/html; charset=utf-8">
        <link rel="stylesheet" href="../styles.css">
    </head>

    <body>
        <div class="tabs">
            <button class="tablink" onclick="openTab('Vorspeise', this, 'red')" id="defaultTab">Vorspeise</button>
            <button class="tablink" onclick="openTab('Hauptspeise', this, 'green')">Hauptspeise</button>
            <button class="tablink" onclick="openTab('Dessert', this, 'blue')">Dessert</button>
            <button class="tablink" onclick="openTab('Getränke', this, 'orange')">Getränke</button>
            <button class="tablink" onclick="openTab('Warenkorb', this, 'grey')" id=btnWarenkorb>Warenkorb (0)</button>
            

            <div id="Vorspeise" class="tabcontent">
                <?php 
                    $_SESSION["Typ"] = "Vorspeise";
                    include("speisekarte.php");
                ?>
            </div>

            <div id="Hauptspeise" class="tabcontent">
                <?php 
                    $_SESSION["Typ"] = "Hauptspeise";
                    include("speisekarte.php");
                ?>
            </div>

            <div id="Dessert" class="tabcontent">
                <?php 
                    $_SESSION["Typ"] = "Dessert";
                    include("speisekarte.php");
                ?>
            </div>

            <div id="Getränke" class="tabcontent">
                <?php 
                    $_SESSION["Typ"] = "Getraenke";
                    include("speisekarte.php");
                ?>
            </div>

            <div id="Warenkorb" class="tabcontent" style="text-align:Center">
                <h2>Sie haben noch keine Gerichte im Warenkorb</h2>
            </div> 
        </div>
    </body>
</html> 