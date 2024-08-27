
  document.getElementById('updateTask').addEventListener('submit', function(e) {
      e.preventDefault(); 

      var hiddenId = document.getElementById('hiddenId');
      var taskId = hiddenId.getAttribute('data-id'); 
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
              console.log('Error updating task.');
          }
      };

      xhr.send(params);
  });




