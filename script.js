// Wait for the full HTML document to load
document.addEventListener('DOMContentLoaded', function () {

    // Select DOM Elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add task
    function addTask() {
        // Get and trim user input
        const taskText = taskInput.value.trim();

        // Validate input
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create new list item
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.className = 'remove-btn';

        // Add remove functionality
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        // Append remove button to task
        li.appendChild(removeBtn);

        // Add task to list
        taskList.appendChild(li);

        // Clear input field
        taskInput.value = "";
    }

    // Event listener for button click
    addButton.addEventListener('click', addTask);

    // Event listener for Enter key
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Invoke addTask on DOMContentLoaded (as required)
    addTask();
});

