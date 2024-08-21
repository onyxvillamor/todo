
 document.addEventListener('DOMContentLoaded', loadTasks);

function loadTasks(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '../actions/display.php', true);

    xhr.onload = function () {
        if(this.status == 200){
            var tasks = JSON.parse(this.responseText);
            var output = '';

            for(var i in tasks){
                output +=   
                        `<div class="col mt-4">
                            <div class="card" style="height: 180px;">
                            <div class="card-body">
                                <div class="card-title row d-flex justify-content-between">
                                <h4 class="col">` + tasks[i].title +`</h4>
                                <div class="col d-flex justify-content-end">
                                    <button class="btn p-0 fa-solid fa-pen text-primary me-2 fs-6" data-bs-toggle="modal" data-bs-target="#updateModal">
                    
                                    </button>
                                    <a class="fa-solid fa-check fs-5 text-success"></a>
                                </div>
                                </div>
                                <p class="card-text">
                                    ` + tasks[i].content +`
                                </p>
                            </div>
                            </div>
                        </div>`;

            }

            document.getElementById('tasks').innerHTML = output;
            
        }
    }

    xhr.send();
}

// add task

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