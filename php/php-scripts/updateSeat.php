<?php 
    include("db.php");
    $seat = $_REQUEST["seat"];
    $besetzen = $_REQUEST["besetzen"];
    $name = $_REQUEST["name"];
    $personen = $_REQUEST["persons"];

    //if release Seat
    if ($besetzen=="0") {       
        $name = NULL;
        $personen = NULL;
    }

    $statement =  "UPDATE `tische` SET `besetzt` = ?, `name`=?, `personen`=? WHERE `tische`.`id`=? ";
    $pdo->prepare($statement)->execute([$besetzen, $name, $personen, $seat]);

?>