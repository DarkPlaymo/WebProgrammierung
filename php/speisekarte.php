<?php session_start(); ?>
<!DOCTYPE html>
<html>
    <head>
    </head>

    <body>  
        <?php $shop = array(array("rose",   1.25, 15),
                            array("daisy",  0.75, 25),
                            array("orchid", 1.15, 7 ),);
                            
            //nachschauen ob Count so stimmt
            $pdo = new PDO('mysql:host=localhost; dbname=_____', 'username', 'password');

            $SQLUntertypen =  "SELECT Untertypen FROM Speisen WHERE typ=$_SESSION['type']" ?> 
            
        
        <h2> <?php echo $_SESSION["type"] ?> </h2>


        
        <?php foreach ($pdo->query($SQLUntertypen) as $Untertyp) : 
            $SQLProdukte = "SELECT Produkt, Preis FROM Speisen WHERE typ=$_SESSION[type] AND untertyp=$Untertyp" ?>

            <!--Anfang accordeon mit title $Untertypname-->

                <table>
                    <tr><td>Produkt</td><td>Preis</td></tr>

                    <?php foreach ($pdo->query($SQLProdukte) as $row) : ?>
                        <tr>
                            <td><?php echo $row[0]; ?></td>
                            <td><?php echo $row[1]; ?></td>
                        </tr>
                    <?php endforeach; ?>

                </table>

            <!--Ende Accordeon -->
        <?php endforeach; ?>
    </body>
</html>