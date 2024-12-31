document.addEventListener('DOMContentLoaded', function () {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn'); // Add Task button
    const taskInput = document.getElementById('task-input'); // Task input field
    const taskList = document.getElementById('task-list'); // Unordered list to display tasks

    // Function to add a new task
    function addTask() {
        // Retrieve and trim the task text
        const taskText = taskInput.value.trim();

        // Check if the task text is empty
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

        // Add a class to the remove button for styling
        removeButton.classList.add('remove-btn');

        // Assign a click event to the remove button
        removeButton.onclick = function () {
            taskList.removeChild(listItem); // Remove the task when the button is clicked
        };

        // Append the remove button to the list item
        listItem.appendChild(removeButton);

        // Append the list item to the task list
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = '';
    }

    // Event listener for the Add Task button
    addButton.addEventListener('click', addTask);

    // Event listener for the Enter key in the input field
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask(); // Call addTask when Enter is pressed
        }
    });
});
