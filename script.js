let tasks = [];
let reminderInterval;

function addTask() {
    const taskInput = document.getElementById('task');
    const taskValue = taskInput.value.trim();

    if (taskValue !== '') {
        tasks.push(taskValue);
        taskInput.value = '';
        displayTasks();
        setReminder();
    }
}

function displayTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = task;
        taskList.appendChild(listItem);
    });
}

function setReminder() {
    if (reminderInterval) {
        clearInterval(reminderInterval);
    }

    reminderInterval = setInterval(() => {
        const reminder = document.getElementById('reminder');
        if (tasks.length > 0) {
            reminder.textContent = `Time to complete: ${tasks[0]}!`;
        } else {
            reminder.textContent = '';
            clearInterval(reminderInterval);
        }
    }, 10000); // Lembrar a cada 10 segundos para simplificar o teste
}
