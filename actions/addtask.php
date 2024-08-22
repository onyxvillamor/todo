<?php

require "../config/config.php";

if(isset($_POST['title']) && isset($_POST['content'])){

$title = $_POST['title'];
$content = $_POST['content'];
$state = 0;

$query = $conn->prepare("INSERT INTO task (title, content, state) VALUES (?,?,?)");
$query->bind_param("sss", $title, $content, $state);

if($query->execute()){
    echo "task added";
    header('location: ../views/index.php');
}

}

?>