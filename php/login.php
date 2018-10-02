<?php session_start();?>
<!DOCTYPE html>
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1;text/html; charset=utf-8">
        <link rel="stylesheet" href="../styles.css">
    </head>

    <body>
        <div>
            <form class="form" action="index.php">
                <fieldset>
                    <input type="hidden" name="site" value="home"> <!--Zur korrekten Weiterleitung -->
                    <legend><span class="number">1</span> Anmelden </legend>
                    <input type="text" name="name" placeholder="Ihr Name *">
                    <input type="email" name="email" placeholder="Ihre Email *">
                    
                    <label for="Tischauswahl">Tischauswahl:</label>
                    <select id="Tischauswahl" name="tisch">
                            <option value="Keine Angabe">Keine Angabe</option>
                            <option value="Tisch unten">Tisch unten</option>
                            <option value="Tisch oben">Tisch oben</option>
                            <option value="Terrasse">Terrasse</option>
                    </select>      
                </fieldset>
                <fieldset>
                    <legend><span class="number">2</span> Zusätzliche Notiz</legend>
                    <textarea name="notiz" placeholder="Infos an uns..."></textarea>
                </fieldset>
                <input type="submit" value="Apply" />
            </form>
        </div>
    </body>
</html> 