<?php 
    include("db.php");
    $statement =  "SELECT id, besetzt FROM `tische`";

    foreach ($pdo->query($statement) as $row) {
        $myarray2[$row['id']]->besetzt = $row['besetzt'];        
    }
    
    echo json_encode($myarray2);
?>