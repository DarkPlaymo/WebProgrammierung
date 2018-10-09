<?php 
    include("db.php");
    $orderID = $_REQUEST["id"];

    $statement =  "DELETE FROM `bestellungen` WHERE `id`='$orderID'";
    $pdo->prepare($statement)->execute();

    echo $orderID;
?>