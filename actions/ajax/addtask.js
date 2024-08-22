
document.getElementById('addTask').addEventListener('submit', (e) => {
    e.preventDefault();

    var title = document.getElementById("title");
    var content = document.getElementById("content");

    var params = "title=" + encodeURIComponent(title.value) +
                "&content=" + encodeURIComponent(content.value); 


    var xhr = new XMLHttpRequest();
    xhr.open('POST', '../actions/addtask.php', true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xhr.onload = function () {
        console.log(this.responseText);
        title.value = '';
        content.value = '';
        loadTasks();
    }

    xhr.send(params);

});