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
    objectDescription: taskDescription.val(),
    id: generateTaskId()
}

taskArray.push(taskObject);
localStorage.setItem('tasks', JSON.stringify(taskArray));
console.log(taskArray);

$('#todo-cards').append(createTaskCard(taskObject));

$('.draggable').draggable({
});
}

// Todo: create a function to generate a unique task id
function generateTaskId() {
    // nextId != null then nextId++;
    if (nextId === null) {
        nextId = 1;
    } else {
        nextId++;
    }
    localStorage.setItem('nextId', JSON.stringify(nextId));
    return nextId;
}

// Todo: create a function to create a task card
function createTaskCard(task) {
const taskCard = $('<div>')
    .addClass('card task-card draggable my-3')
    // add attribute of task id
    const cardHeader = $('<div>').addClass('card-header h4').text(task.objectTitle);
    console.log(task.objectTitle);
    const cardBody = $('<div>').addClass('card-body')
    .attr('data-project-id', task.id);    
    const cardDueDate = $('<p>').addClass('card-text').text(task.objectDate);
    const cardDescription = $('<p>').addClass('card-text').text(task.objectDescription);
    const cardDeleteBtn = $('<button>')
    .addClass('btn btn-danger delete')
    .text('Delete');
    cardDeleteBtn.on('click', handleDeleteTask);

    if (task.objectDate && task.status !== 'done') {
        const now = dayjs();
        const taskDueDate = dayjs(task.objectDate, 'DD/MM/YYYY');
        console.log('if statement is running');
        if (now.isSame(taskDueDate, 'day')) {
           taskCard.addClass('bg-warning text-white');
           console.log('due today');
        } else if (now.isAfter(taskDueDate)) {
        taskCard.addClass('bg-danger text-white');
        cardDeleteBtn.addClass('border-light');    
        console.log('due tomorrow');        
        }
    }
    cardBody.append(cardDescription, cardDueDate, cardDeleteBtn);
    taskCard.append(cardHeader, cardBody);

    return taskCard;
}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
let tasks = JSON.parse(localStorage.getItem('taskArray'))
if (!tasks) {
    tasks = [];
}
return tasks
}

// Todo: create a function to handle adding a new task
function handleAddTask(event){

}

// Todo: create a function to handle deleting a task
function handleDeleteTask(){
 const taskId = $(this).attr('data-task-id');
 console.log('step1');
 taskList = taskList.filter( task => task.id !== parseFloat(taskId));
 console.log('step2');
 localStorage.setItem('taskArray', JSON.stringify(taskList));
 renderTaskList();
}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

});

const formButton = document.getElementById('formButton');
formButton.addEventListener('click', formSubmit);