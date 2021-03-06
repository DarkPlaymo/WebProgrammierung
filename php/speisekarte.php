<?php session_start(); ?>
<!DOCTYPE html>
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1;text/html; charset=utf-8">
        <link rel="stylesheet" href="../styles.css">
    </head>

    <body>          
        <?php   
            $type = $_SESSION['Typ'];
            include("php-scripts/db.php");
        
            $sqlAccordion =  "SELECT DISTINCT accordion FROM `speisekarte` WHERE typ='$type'";

            foreach ($pdo->query($sqlAccordion) as $AccordionRow) : 
                $Accordion = $AccordionRow['accordion'];

                $sqlMeal = "SELECT id, gericht, beschreibung, preis FROM `speisekarte` WHERE typ='$type' AND accordion='$Accordion'";   
            ?>

            <button class='accordion'> <?php echo $Accordion ?> </button>
                <div class='panel'>
                    <table width=100%>
                        <col width="20%" >
                        <col width="60%">
                        <col width="10%">
                        <col width="10%">
                        <tr><th> Gericht </th><th>Beschreibung</th><th>Preis</th><th>Bestellen</th></tr>
                        <?php foreach ($pdo->query($sqlMeal) as $MealRow) : ?>
                            <tr>
                                <td><?php echo $MealRow['gericht'];?></td>
                                <td><?php echo $MealRow['beschreibung'];?></td>
                                <td><?php echo $MealRow['preis'];?> &euro; </td>
                                <td> <button class="btnsmall" onClick="buy(' <?php echo $MealRow['id']; ?> ',
                                                                                                       ' <?php echo $MealRow['gericht']; ?> ', 
                                                                                                       ' <?php echo $MealRow['beschreibung']; ?> ', 
                                                                                                       ' <?php echo $MealRow['preis']; ?> ')">bestellen</button> </td>
                            </tr>
                        <?php endforeach; ?>
                    </table>
                </div>
        <?php endforeach; ?>
    </body>
</html>