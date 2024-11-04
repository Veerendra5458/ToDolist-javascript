// Select elements from the DOM
const input = document.getElementById('input');
const button = document.getElementById('addButton');
const listContainer = document.getElementById('listcontainer');

// Function to add a task
function addTask() {
    const taskText = input.value.trim(); // Get the input value and trim whitespace
    if (taskText) { // Check if the input is not empty
        const listItem = document.createElement('li'); // Create a new list item
        
        // Create a span for the task text
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;

        // Create an edit button
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.className = 'edit-button';

        // Create a delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-button';

        // Event listener to edit the task
        editButton.addEventListener('click', function() {
            const newTaskText = prompt('Edit your task:', taskSpan.textContent);
            if (newTaskText) {
                taskSpan.textContent = newTaskText.trim(); // Update the task text
            }
        });

        // Event listener to delete the task
        deleteButton.addEventListener('click', function() {
            listContainer.removeChild(listItem); // Remove the item when clicked
        });

        // Append the span, edit button, and delete button to the list item
        listItem.appendChild(taskSpan);
        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);
        
        listContainer.appendChild(listItem); // Add the new item to the list
        input.value = ''; // Clear the input field
    }
}

// Add event listener to the button
button.addEventListener('click', addTask);

// Optional: Allow pressing "Enter" to add tasks
input.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});