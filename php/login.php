<?php session_start();?>
<!DOCTYPE html>
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1;text/html; charset=utf-8">
        <link rel="stylesheet" href="../styles.css">
    </head>

    <body>

        <h2>Anmeldeformular</h2>

        <form action="bestellen.php">
        Nachname, Vorname*:<br>
        <input type="text" name="name" value="">
        <br><br>
        Anzahl der Personen*:<br>
        <input type="number" name="number" min="1" max="10" value="">
        <br><br>
        Wo möchten Sie sitzen?*:<br>
        <div class="small-12 medium-6 large-6 columns">
            <span class="wpcf7-form-control-wrap Tischauswahl">
                <select name="Tischauswahl" class="wpcf7-form-control wpcf7-select" id="Tischauswahl" aria-invalid="false">
                    <option value="Keine Angabe">Keine Angabe</option>
                    <option value="Tisch unten">Tisch unten</option>
                    <option value="Tisch oben">Tisch oben</option>
                    <option value="Terrasse">Terrasse</option>
                </select>
            </span>
        </div>
        <br>
        Nachricht:<br>
        <input type="text" name="message" value="">
        <br><br>
        
        <input type="submit" value="Submit">
        </form> 

        <p>If you click the "Submit" button, the form-data will be sent to a page called "bestellen.php".</p>

    </body>
</html> 