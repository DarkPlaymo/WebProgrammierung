<?php 
    $pdo = new PDO('mysql:host=localhost;dbname=datenbank;charset=UTF8', 'root', 'root');
    $statement =  "SELECT id, besetzt FROM `tische`";

    foreach ($pdo->query($statement) as $row) {
        $myarray2[$row['id']]->besetzt = $row['besetzt'];        
    }
    
    echo json_encode($myarray2);
?>