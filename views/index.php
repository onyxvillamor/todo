<?php
include("../config/config.php");
?>
<?php include('./includes/header.php') ?>

<div id="layoutSidenav_content">
  <main>

    <?php include('includes/modal.php') ?>

    <div class="container-fluid px-4">
      <h1 class="mt-4 fs-2">Sticky Wall</h1>
      <div class="row row-cols-3">
        <!-- sticky wall -->
        <?php
        $sql = "SELECT * FROM `task`";
        $result = mysqli_query($conn, $sql);

        if ($result) {
          while ($row = mysqli_fetch_assoc($result)) {
            $id = htmlspecialchars($row['id']);
            $title = htmlspecialchars($row['title']);
            $content = htmlspecialchars($row['content']);


            echo  '<div class="col mt-4">
                  <div class="card" style="height: 180px;">
                    <div class="card-body">
                      <div class="card-title row">
                        <h4 class="col">' . $title . '</h4>
                        <div class="col text-end">
                          <a class="fa-solid fa-pen text-primary"></a>
                          <a class="fa-solid fa-check fs-5 text-success"></a>
                        </div>
                      </div>
                      <p class="card-text">
                        ' . $content . '
                      </p>
                    </div>
                  </div>
                </div>';
          }
        }

        ?>


        <div class="col mt-4">
          <div class="card" style="height: 180px;">
            <button class="card-body py-4 btn " data-bs-toggle="modal" data-bs-target="#exampleModal">
              <i class="fa-solid fa-plus fs-1 "></i>
            </button>
          </div>
        </div>

      </div>
    </div>
  </main>


  <?php include('./includes/footer.php'); ?>