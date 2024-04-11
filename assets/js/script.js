// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));
const taskTitle = $('#inputTitle');
const taskDescription = $('#inputDescription');
const taskDate = $('#inputDate');


function formSubmit() {
    const taskArray = JSON.parse(localStorage.getItem('strings')) || [];

const taskObject = {
    objectTitle: taskTitle.val(),
    objectDate: taskDate.val(),
    objectDescription: taskDescription.val()
}

taskArray.push(taskObject);
localStorage.setItem('tasks', JSON.stringify(taskArray));
console.log(taskArray);

$('#todo-cards').append(createTaskCard(taskObject));
}

// Todo: create a function to generate a unique task id
function generateTaskId() {
    // nextId != null then nextId++;
}

// Todo: create a function to create a task card
function createTaskCard(task) {
const taskcard = $('<div>')
    .addClass('card task-card draggable my-3')
    // add attribute of task id
    const cardHeader = $('<div>').addClass('card-header h4').text(task.objectTitle);
    console.log(task.objectTitle);
    const cardBody = $('<div>').addClass('card-body');
    const cardDescription = $('<p>').addClass('card-text').text(task.type);
    const cardDueDate = $('<p>').addClass('card-text').text(task.dueDate);
    const cardDeleteBtn = $('<button>')
    .addClass('btn btn-danger delete')
    .text('Delete');
    // project id?
    cardDeleteBtn.on('click', handleDeleteTask);
}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {

}

// Todo: create a function to handle adding a new task
function handleAddTask(event){

}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

});

const formButton = document.getElementById('formButton');
formButton.addEventListener('click', formSubmit);