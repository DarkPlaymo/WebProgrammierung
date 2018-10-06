<?php 
    $pdo = new PDO('mysql:host=localhost;dbname=datenbank;charset=UTF8', 'root', 'root');

    $seat = $_REQUEST["seat"];
    $gerichte = $_REQUEST["gerichte"];

    $gerichte = explode("," , $gerichte); //array(1 3 5 7)

    $values = "";

    for ($i = 0; $i < count($gerichte)-1; $i++) {
        if ($i % 2 == 0) {
            $values .= "(" . $seat . "," . $gerichte[$i] . "," . $gerichte[($i+1)] . "),";
        }
    }

    $values = substr($values, 0, -1);

    $statement =  "INSERT INTO `bestellungen` (`tisch_id`, `gericht_id`, `gerichtanzahl`) VALUES " . $values;
    $pdo->prepare($statement)->execute();

    echo "In tabelle eingefügt: " . $values;
?>