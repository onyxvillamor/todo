<?php 

require "../config/config.php";

$query = 'SELECT * FROM task';
$result = mysqli_query($conn, $query);

$tasks = mysqli_fetch_all($result, MYSQLI_ASSOC);

echo json_encode($tasks);   

?>