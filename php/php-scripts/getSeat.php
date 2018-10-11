<?php 
    include("db.php");
    $statement =  "SELECT id, besetzt FROM `tische`";

    foreach ($pdo->query($statement) as $row) {
        $table_array[$row['id']]->besetzt = $row['besetzt'];        
    }
    
    echo json_encode($table_array);
?>