<?php

require "../config/config.php";

if (isset($_POST['displayData'])) {
    $output = '';  

    $query = 'SELECT * FROM task';
    $result = mysqli_query($conn, $query);

    if ($result) {
        while ($row = mysqli_fetch_assoc($result)) {
            $id = $row['id'];
            $title = $row['title'];
            $content = $row['content'];

            $output .= '<div class="col mt-4">
            <div class="card" style="height: 180px;">
                <div class="card-body">
                    <div class="card-title row d-flex justify-content-between">
                        <h4 class="col" >' . $title . '</h4>
                        <div class="col d-flex justify-content-end">
                            <button class="btn p-0 fa-solid fa-pen text-dark me-2 fs-6"
                                    data-bs-toggle="modal"
                                    data-bs-target="#updateModal" title="Edit">
                            </button>
                            <button class="btn p-0 fa-solid fa-check fs-5 text-dark me-2" title="Done task" id="doneTask"></button>
                             <button class="btn p-0 fa-solid fa-x " title="Delete task" id="deleteTask"></button>
                        </div>
                    </div>
                    <p class="card-text">' . $content . '</p>
                    <input type="hidden" id="hiddenId" data-id="' . $id . '" >
                </div>
            </div>
        </div>';
        }
    }else{
        echo "error";
    }

    echo $output;  // Echo the output
}
