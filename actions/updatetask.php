<?php

require "../config/config.php";

if (isset($_POST['updateTitle']) && isset($_POST['updateContent']) && isset($_POST['taskId'])) {

    $title = $_POST['updateTitle'];
    $content = $_POST['updateContent'];
    $state = 0; 
    $taskId = $_POST['taskId']; 

    $query = $conn->prepare("UPDATE task SET title = ?, content = ?, state = ? WHERE id = ?");
    $query->bind_param("sssi", $title, $content, $state, $taskId);

    if ($query->execute()) {
        echo "Task updated";
    } else {
        echo "Error updating task: " . $query->error;
    }

}

?>
