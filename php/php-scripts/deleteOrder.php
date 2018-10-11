<?php 
    include("db.php");
    $orderID = $_REQUEST["id"];
    $seatID = $_REQUEST["seat"];

    //delete single order OR all Orders of a seat
    $statement =  "DELETE FROM `bestellungen` WHERE `id`='$orderID' OR `tisch_id`='$seatID'";
    $pdo->prepare($statement)->execute();
?>