<?php
include("../config/config.php");
?>
<?php include('./includes/header.php') ?>

<div id="layoutSidenav_content">
  <main>

    <?php include('includes/modal.php') ?>
    <?php include('includes/update-modal.php') ?> 


    <div class="container-fluid px-4">
      <h1 class="mt-4 fs-2">Sticky Wall</h1>
      <button class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
        <i class="fa-solid fa-plus"></i>
      </button>
      <div class="row row-cols-3" id="tasks">
      <!-- content goes here -->
      </div>
    </div>
  </main>


  <?php include('./includes/footer.php'); ?>