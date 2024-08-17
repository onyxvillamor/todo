<?php

require "../config/config.php";

if(isset($_POST['submit'])){

$title = $_POST['title'];
$content = $_POST['content'];
$state = 0;

$query = "INSERT INTO task (title, content, state) VALUES ('$title', '$content', '$state')";
$result = mysqli_query($conn, $query);

if($result){
    header('location: ../views/index.php');
}

}

?>