import { task } from "./task.js";
var taskForm = document.getElementById('task-form');
var taskInput = document.getElementById('task-input');
var taskList = document.getElementById('task-list');

var tareas = [];

function addTask(description) {
    var newTask = new task(description);
    tareas.push(newTask);
    renderTask();
}

function renderTask() {
    taskList.innerHTML = '';
    tareas.forEach(function (task) {
        var li = document.createElement('li');
        li.textContent = task.description;
        //taskList.appendChild(li);
        //boton para eliminar tareas
        var deleteBtn = document.createElement('button');
        deleteBtn.textContent = "Eliminar";
        deleteBtn.classList.add('eliminar-btn');
        deleteBtn.addEventListener('click', function () {
            deleteTask(task);
        });

        
        if (task.completed) {
            li.classList.add('completada');
        }
        //a
        li.addEventListener('click', function () {
            task.taskCompleted();
            renderTask();
        });
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });
}
taskForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var description = taskInput.value.trim();
    if (description !== '') {
        addTask(description);
        taskInput.value = "";
    }
});
//funcion para eliminar tareas
function deleteTask(taskDelete) {
    tareas = tareas.filter(function (tarea) { return tarea !== taskDelete; });
    renderTask();
}

renderTask();
