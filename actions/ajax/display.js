document.addEventListener("DOMContentLoaded", loadTasks);

function loadTasks() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "../actions/display.php", true);

  xhr.onload = function () {
    if (this.status == 200) {
      var tasks = JSON.parse(this.responseText);
      var output = "";

      const items = [
        "#CDB4DB",
        "#FFC8DD",
        "#FFAFCC",
        "#BDE0FE",
        "#A2D2FF",
        "#D8E2DC",
        "#FFE5D9",
        "#FFCAD4",
        "#F4ACB7",
        "#F25C54",
      ];

      for (var i in tasks) {
        const randomIndex = Math.floor(Math.random() * items.length);
        const randomItem = items[randomIndex];

        output +=  
                    `<div class="col mt-4">
                        <div class="card" style="height: 180px; background-color: ${randomItem};">
                            <div class="card-body">
                                <div class="card-title row d-flex justify-content-between">
                                    <h4 class="col" >${tasks[i].content}</h4>
                                    <div class="col d-flex justify-content-end">
                                        <button class="btn p-0 fa-solid fa-pen text-dark me-2 fs-6"
                                                data-bs-toggle="modal"
                                                data-bs-target="#updateModal" title="Edit">
                                        </button>
                                        <button class="btn fa-solid fa-check fs-5 text-dark" title="Done task" id="doneTask"></button>
                                    </div>
                                </div>
                                <p class="card-text">${tasks[i].content}</p>
                                <input type="hidden" id="hiddenId" data-id="${tasks[i].id}" >
                            </div>
                        </div>
                    </div>`;
      }

      document.getElementById("tasks").innerHTML = output;
    }
  };

  xhr.send();
}