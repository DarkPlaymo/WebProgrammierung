<?php session_start(); 
$_SESSION['Waren'] = 0;?>
<!DOCTYPE html>
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1;text/html; charset=utf-8">
        <link rel="stylesheet" href="../styles.css">
        <script src="../js/tabcontent.js"></script>
    </head>

    <body>
        <div class="tabs">
            <button class="tablink" onclick="openPage('Vorspeise', this, 'red')" id="defaultOpen">Vorspeise</button>
            <button class="tablink" onclick="openPage('Hauptspeise', this, 'green')">Hauptspeise</button>
            <button class="tablink" onclick="openPage('Dessert', this, 'blue')">Dessert</button>
            <button class="tablink" onclick="openPage('Getränke', this, 'orange')">Getränke</button>
            <button class="tablink" onclick="openPage('Warenkorb', this, 'grey')" id=btnWarenkorb>Warenkorb (0)</button>
            

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

            <div id="Warenkorb" class="tabcontent">
                <h3>Warenkorb</h3>
                <p>Liste der bestellten Waren</p>
            </div> 
        </div>
    </body>
</html> 