
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
          console.log(this.responseText);
            var task = JSON.parse(this.responseText);
            console.log(this.responseText);
            document.getElementById('updateTitle').value = task.title;
            document.getElementById('updateContent').value = task.content;
        } else {
            alert('Error fetching task data.');
        }
    };

    xhr.send('id=' + encodeURIComponent(taskId));
});