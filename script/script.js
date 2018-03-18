var inputField = document.querySelector(".task-input");
var addBtn = document.querySelector(".btn-success");
var taskWrapper = document.querySelector(".task-wrapper");
var sortBtn = document.querySelector(".sortBtn");

var alltasks = [];

addBtn.onclick = function () {
    if (inputField.value == "") return;
    var taskContent = document.createElement("div");
    taskContent.className = "panel panel-success";
    var taskText = document.createElement("div");
    taskText.className = "panel-body";
    var deleteBtnWrapper = document.createElement("div");
    deleteBtnWrapper.className = "btns";
    var deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-danger";
    deleteBtn.innerHTML = "Delete";

    var taskTextValue = inputField.value;
    taskWrapper.appendChild(taskContent);
    taskText.innerHTML = taskTextValue;
    taskContent.appendChild(taskText);
    deleteBtnWrapper.appendChild(deleteBtn);
    taskText.appendChild(deleteBtnWrapper);

    taskContent.addEventListener("click", function (event) {
        var target = event.target;
        if (target.className != "panel-body") return;
        target.parentNode.classList.toggle("task-done");
    });

    deleteBtn.addEventListener("click", function (event) {
        var target = event.target.parentNode;
        var allTask = target.parentNode;

        for (var i = 0; i < document.getElementsByClassName("panel-success").length; i++) {
            if (allTask == document.getElementsByClassName("panel-success")[i].firstChild) {
                alltasks.splice(i, 1);
            }
        }
        taskWrapper.removeChild(allTask.parentNode);
        console.clear();
        console.log(alltasks);
    });
    alltasks.push(inputField.value);
    console.clear();
    console.log(alltasks);
    inputField.value = "";

}

sortBtn.onclick = function () {
    var allTaskContent = document.getElementsByClassName("panel-body");
    alltasks.sort();
    for (var i = 0; i < allTaskContent.length; i++) {
        allTaskContent[i].innerHTML = alltasks[i];

        var deleteBtnWrapper = document.createElement("div");
        deleteBtnWrapper.className = "btns";
        var deleteBtn = document.createElement("button");
        deleteBtn.className = "btn btn-danger";
        deleteBtn.innerHTML = "Delete";
        deleteBtnWrapper.appendChild(deleteBtn);

        deleteBtn.addEventListener("click", function (event) {
            var target = event.target.parentNode;
            var allTask = target.parentNode;
            
            for (var i = 0; i < document.getElementsByClassName("panel-success").length; i++) {
            if (allTask == document.getElementsByClassName("panel-success")[i].firstChild) {
                alltasks.splice(i, 1);
            }
        }
            taskWrapper.removeChild(allTask.parentNode);
            console.log(alltasks);
        });

        allTaskContent[i].appendChild(deleteBtnWrapper);

    }
    console.clear();
    console.log(alltasks);
}
