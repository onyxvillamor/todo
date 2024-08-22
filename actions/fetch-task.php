<?php
require "../config/config.php";

if (isset($_POST['id'])) {
    $taskId = $_POST['id'];

    // Prepare SQL query to fetch task data
    $query = $conn->prepare("SELECT title, content FROM task WHERE id = ?");
    $query->bind_param("i", $taskId);

    // Execute query and check for errors
    if ($query->execute()) {
        $result = $query->get_result();
        if ($result->num_rows > 0) {
            // Fetch the task data
            $task = $result->fetch_assoc();
            // Return the task data as JSON
            echo json_encode($task);
        } else {
            echo json_encode(['error' => 'Task not found']);
        }
    } else {
        echo json_encode(['error' => 'Error executing query: ' . $query->error]);
    }

    // Close the database connection
    $query->close();
    $conn->close();
} else {
    echo json_encode(['error' => 'No task ID provided']);
}
?>
