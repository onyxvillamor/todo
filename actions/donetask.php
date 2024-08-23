<?php
require "../config/config.php";


if (isset($_POST['id'])) {
    $taskId = $_POST['id'];
    $state = 1; 

    $query = $conn->prepare("UPDATE task SET state = ? WHERE id = ?");
    $query->bind_param("si", $state, $taskId);

    if ($query->execute()) {
        echo "Task updated";
    } else {
        echo "Error updating task: " . $query->error;
    }
} else {
    echo json_encode(['error' => 'No task ID provided']);
}

?>
