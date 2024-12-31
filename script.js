document.addEventListener('DOMContentLoaded', function () {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to load tasks from Local Storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); // Load tasks without saving them again
    }

    // Function to save tasks to Local Storage
    function saveTasks() {
        const tasks = [];
        document.querySelectorAll('.task-item').forEach(item => {
            tasks.push(item.textContent.replace('Remove', '').trim());
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Function to add a new task
    function addTask(taskText, save = true) {
        // Trim task text
        taskText = taskText.trim();

        // Check if task text is empty
        if (taskText === '') {
            alert('Please enter a task!');
            return;
        }

        // Create a new list item element
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Add a class to the list item for styling
        listItem.classList.add('task-item');

        // Create a remove button for the task
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-btn');

        // Assign a click event to the remove button
        removeButton.onclick = function () {
            taskList.removeChild(listItem); // Remove task from DOM
            saveTasks(); // Update Local Storage
        };

        // Append the remove button to the list item
        listItem.appendChild(removeButton);

        // Append the list item to the task list
        taskList.appendChild(listItem);

        // Save to Local Storage if required
        if (save) {
            saveTasks();
        }

        // Clear the input field
        taskInput.value = '';
    }

    // Event listener for the Add Task button
    addButton.addEventListener('click', () => addTask(taskInput.value));

    // Event listener for the Enter key in the input field
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask(taskInput.value);
        }
    });

    // Load tasks from Local Storage on page load
    loadTasks();
});
