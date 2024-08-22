document.addEventListener('DOMContentLoaded', function() {
  var updateModal = document.getElementById('updateModal');

  updateModal.addEventListener('show.bs.modal', function(event) {
      var hiddenId = document.getElementById('hiddenId');
      var taskId = hiddenId.getAttribute('data-id'); 

      document.getElementById('taskId').value = taskId;

      var xhr = new XMLHttpRequest();
      xhr.open('POST', '../actions/fetch-task.php', true);
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

      xhr.onload = function() {
          if (xhr.status >= 200 && xhr.status < 300) {
              var task = JSON.parse(this.responseText);
              document.getElementById('updateTitle').value = task.title;
              document.getElementById('updateContent').value = task.content;
          } else {
              alert('Error fetching task data.');
          }
      };

      xhr.send('id=' + encodeURIComponent(taskId));
  });

  //send request data to server-side

  document.getElementById('updateTask').addEventListener('submit', function(e) {
      e.preventDefault(); 

      var taskId = document.getElementById('taskId').value;
      var updateTitle = document.getElementById('updateTitle').value;
      var updateContent = document.getElementById('updateContent').value;

      var params = 
          "updateTitle=" + encodeURIComponent(updateTitle) +
          "&updateContent=" + encodeURIComponent(updateContent) +
          "&taskId=" + encodeURIComponent(taskId);

      var xhr = new XMLHttpRequest();
      xhr.open('POST', '../actions/updatetask.php', true);
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

      xhr.onload = function() {
          if (xhr.status >= 200 && xhr.status < 300) {
              console.log(this.responseText);
              location.reload(); 
          } else {
              alert('Error updating task.');
          }
      };

      xhr.send(params);
  });
});



