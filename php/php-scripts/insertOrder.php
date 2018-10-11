<?php 
    include("db.php");
    $seat = $_REQUEST["seat"];              // String seat = "2"
    $gerichte = $_REQUEST["gerichte"];      // String gerichte = "1, 3, 5, 7, ..."   => "gericht, anzahl, gericht, anzahl,..."

    $gerichte = explode("," , $gerichte); //array gerichte = [1, 3, 5, 7´,...]    => [gericht, anzahl, gericht, anzahl,...]
    $values = "";

    for ($i = 0; $i < count($gerichte)-1; $i++) {
        //group gerichte[0] gerichte[1] ; gerichte[2] gerichte [3] ; ...
        if ($i % 2 == 0) {
            $values .= "(" . $seat . "," . $gerichte[$i] . "," . $gerichte[($i+1)] . "),"; //values = "(2, 1, 3), (2, 5, 7), ...,"
        }
    }
    $values = substr($values, 0, -1); //deletes the last ',' => //values = "(2, 1, 3), (2, 5, 7), ..."

    $statement =  "INSERT INTO `bestellungen` (`tisch_id`, `gericht_id`, `gerichtanzahl`) VALUES " . $values;
    $pdo->prepare($statement)->execute();
?>