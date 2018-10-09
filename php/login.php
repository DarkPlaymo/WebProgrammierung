<?php session_start();?>
<!DOCTYPE html>
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1;text/html; charset=utf-8">
        <link rel="stylesheet" href="../styles.css">
    </head>

    <body>
        <div>
            <form name="loginForm" class="form" action="index.php">
                <fieldset>
                    <input type="hidden" name="site" value="home"> <!--Zur korrekten Weiterleitung -->
                    <legend><span class="number">1</span> Anmelden </legend>
                    <input type="text" name="name" placeholder="Ihr Name *" required>
                    <input type="email" name="email" placeholder="Ihre Email *" required>
                    <input type="number" name="persons" min="1" max="10" placeholder="Anzahl an Personen *" required>
                    <input type="time" name="time" placeholder="Uhrzeit *" value="18:00" min="15:00" max="23:00" step="900" required>
                </fieldset>
                <fieldset>
                    <legend><span class="number">2</span> Zusätzliche Notiz</legend>
                    <textarea name="notiz" placeholder="Infos an uns..."></textarea>
                </fieldset>
                <input type="submit" value="Apply" />
            </form>
            <a href="index.php?site=kueche">Mitarbeiter-Login</a>
        </div>
    </body>
</html> 