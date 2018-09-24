<?php session_start(); ?>
<!DOCTYPE html>
<html>
    <head>
    </head>

    <body>  
        <?php 
            $pdo = new PDO('mysql:host=localhost; dbname=_____', 'username', 'password');

            $SQLUntertypen =  "SELECT Untertypen FROM Speisen WHERE typ=$_SESSION['type']";
            
            foreach ($pdo->query($SQLUntertypen) as $Untertyp) : 
                $SQLProdukte = "SELECT Produkt, Preis FROM Speisen WHERE typ=$_SESSION[type] AND untertyp=$Untertyp" 
        ?>

            <!--Anfang accordeon mit title $Untertypname-->
            
                <h2> <?php echo $_SESSION["type"] ?> </h2> <!-- nur vorübergehend-->
                <table>
                    <tr><td>Produkt</td><td>Preis</td></tr>

                    <?php foreach ($pdo->query($SQLProdukte) as $row) : ?>
                        <tr>
                            <td><?php echo $row['Produkt']; ?></td>
                            <td><?php echo $row['Preis']; ?></td>
                        </tr>
                    <?php endforeach; ?>

                </table>

            <!--Ende Accordeon -->

        <?php endforeach; ?>
    </body>
</html>