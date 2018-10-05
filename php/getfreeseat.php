<?php 
    $pdo = new PDO('mysql:host=localhost;dbname=datenbank;charset=UTF8', 'root', 'root');
        
    $statement =  "SELECT id, besetzt FROM `tische`";

    $prepared = $pdo->prepare($statement);
    $prepared->execute();
    $result = $prepared->fetchAll();

    echo $result;
?>