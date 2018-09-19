<!DOCTYPE html>
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="../styles.css">
        <script src="../js/tabcontent.js"></script>
    </head>

    <body>

        <button class="tablink" onclick="openPage('Vorspeise', this, 'red')" id="defaultOpen">Vorspeise</button>
        <button class="tablink" onclick="openPage('Hauptspeise', this, 'green')">Hauptspeise</button>
        <button class="tablink" onclick="openPage('Dessert', this, 'blue')">Dessert</button>
        <button class="tablink" onclick="openPage('Getränke', this, 'orange')">Getränke</button>
        <button class="tablink" onclick="openPage('Warenkorb', this, 'grey')">Warenkorb</button>

        <div id="Vorspeise" class="tabcontent">
            <h3>Vorspeise</h3>
            <p>Liste der Vorspeisen</p>
        </div>

        <div id="Hauptspeise" class="tabcontent">
            <h3>Hauptspeise</h3>
            <p>Liste der Hauptspeisen</p> 
        </div>

        <div id="Dessert" class="tabcontent">
            <h3>Dessert</h3>
            <p>Liste der Nachspeisen</p>
        </div>

        <div id="Getränke" class="tabcontent">
            <h3>Getränke</h3>
            <p>Liste der Getränke</p>
        </div>

        <div id="Warenkorb" class="tabcontent">
            <h3>Warenkorb</h3>
            <p>Liste der bestellten Waren</p>
        </div> 
    </body>
</html> 