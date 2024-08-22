document.getElementById("updateTask").addEventListener("submit", (e) => {
  e.preventDefault;

  var taskId = document.getElementById("taskId");
  var updateTitle = document.getElementById("updateTitle");
  var updateContent = document.getElementById("updateContent");


  var params =
    "title=" +
    encodeURIComponent(updateTitle.value) +
    "&content=" +
    encodeURIComponent(updateContent.value) +
    "&id=" +
    encodeURIComponent(taskId);

  var xhr = new XMLHttpRequest();
  xhr.open("POST", "../actions/updatetask.php", true);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  xhr.onload = function () {
    console.log(this.responseText);
    updateTitle.value = "";
    updateContent.value = "";
    loadTasks();
  };

  xhr.send(params);
});
