// document.getElementById('doneTask').addEventListener('click', () => {
//     var hiddenId = document.getElementById('hiddenId');
//     var taskId = hiddenId.getAttribute('data-id');

//     var xhr = new XMLHttpRequest();
//     xhr.open('POST', '../actions/donetask.php', true);
//     xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

//     xhr.onload = function(){
//         if(this.status == 200){
//             console.log(this.responseText);
//             location.reload();
//         }else{
//             console.log('error');
//         }
//     }

//     xhr.send("id=" + taskId);
// });

document.querySelectorAll(".doneTask").forEach((button) => {
  button.addEventListener("click", (e) => {
    var taskId = e.target
      .closest(".card-body")
      .querySelector(".hiddenId")
      .getAttribute("data-id");

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "../actions/donetask.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xhr.onload = function () {
      if (this.status == 200) {
        console.log(this.responseText);
        location.reload();
      } else {
        console.log("error");
      }
    };

    xhr.send("id=" + taskId);
  });
});
