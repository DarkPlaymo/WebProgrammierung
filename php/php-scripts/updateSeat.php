<?php 
    include("db.php");
    $seat = $_REQUEST["seat"];
    $besetzen = $_REQUEST["besetzen"];

    if ($besetzen=="1") {
        $name = $_REQUEST["name"];
        $personen = $_REQUEST["persons"];
        
        $statement =  "UPDATE `tische` SET `besetzt` = '1', `name`=?, `personen`=? WHERE `tische`.`id`=? ";
        $pdo->prepare($statement)->execute([$name, $personen, $seat]);
    } else {
        $statement =  "UPDATE `tische` SET `besetzt` = '0', `name`=NULL, `personen`=NULL WHERE `tische`.`id`=? ";
        $pdo->prepare($statement)->execute([$seat]);
    }

    $pdo->prepare($statement)->execute([$name, $personen, $seat]);

?>