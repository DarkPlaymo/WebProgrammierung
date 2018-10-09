<?php session_start();?>
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
        
            $sqlSeat =  "SELECT tisch_id, COUNT(tisch_id) AS AnzahlBestellungen FROM `bestellungen` GROUP BY tisch_id";
        ?>
        <h3>Zuzubereitende Gerichte</h3>
        <table id="kueche" style="width:100%;border-collapse:collapse;" >
            <tr>
                <th>Tisch</th>
                <th>Gericht</th>
                <th>Anzahl</th>
                <th>fertig</th>
            </tr>

        <?php
            foreach ($pdo->query($sqlSeat) as $SeatRow) : 
                $seat = $SeatRow['tisch_id'];
                $seatCount = $SeatRow['AnzahlBestellungen'];
                $sqlMeals = "SELECT id, gericht_id, gerichtanzahl FROM `bestellungen` WHERE tisch_id=$seat";
        ?>
            <tr>
                <td rowspan="<?php echo $seatCount; ?>"><?php echo $seat; ?></td>
            <?php
                foreach ($pdo->query($sqlMeals) as $MealRow) :
                    $orderID = $MealRow['id'];
                    $meal = $MealRow['gericht_id'];
                    $mealCount = $MealRow['gerichtanzahl'];
            ?>
                <td><?php echo $meal;?></td>
                <td><?php echo $mealCount;?></td>
                <td><button class="btnsmall" onClick="serve(<?php echo $orderID; ?>)">servieren</button></tr>
                <?php endforeach; endforeach; ?>
        </table>
        <h3 style="margin-top: 25px;margin-bottom: 0px;">Sitzplätze</h3>
    </body>
</html> 