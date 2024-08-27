
document.addEventListener("DOMContentLoaded", loadTasks);

function loadTasks() {
  var displayData = "true";
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "../actions/display.php", true);

  xhr.onload = function () {
    if (this.status === 200) {
      console.log("Response Text:", this.responseText);   
      document.getElementById("tasks").innerHTML = this.responseText;
    } else {
      console.error("Error: " + this.status);
    }
  };

  xhr.send("displayData=" + encodeURIComponent(displayData));
}
