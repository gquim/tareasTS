import { task } from "./task.js";
const taskForm:HTMLFormElement = document.getElementById('task-form') as HTMLFormElement;
const taskInput:HTMLFormElement = document.getElementById('task-input') as HTMLFormElement;
const taskList:HTMLFormElement = document.getElementById('task-list') as HTMLFormElement;

let tareas:task[]=[];

function addTask(description:string):void{
    const newTask:task = new task(description);
    tareas.push(newTask);
    renderTask();
}

function renderTask():void{
    taskList.innerHTML = '';
    tareas.forEach(task =>{
        const li:HTMLElement = document.createElement('li')
        li.textContent = task.description;
        //taskList.appendChild(li);

        //boton para eliminar tareas
        const deleteBtn:HTMLElement = document.createElement('button');
        deleteBtn.textContent = "Eliminar";
        deleteBtn.classList.add('eliminar-btn');
        deleteBtn.addEventListener('click',()=>{
            deleteTask(task);
        })


        if(task.completed){
            li.classList.add('completada');
        }
        //a
        li.addEventListener('click',()=>{
            task.taskCompleted();
            renderTask();
        });


        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    })

}
//funcion para eliminar tareas
function deleteTask(taskDelete:task){
    tareas = tareas.filter(tarea => tarea !== taskDelete);
    renderTask();
}

taskForm.addEventListener('submit',event =>{
    event.preventDefault();
    const description:string = taskInput.value.trim();
    if (description !== ''){
        addTask(description);
        taskInput.value = "";
    }
})


renderTask();