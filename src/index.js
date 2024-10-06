document.addEventListener("DOMContentLoaded", () => {             // wait for complete page to  load
  const taskForm = document.getElementById('create-task-form');             //get forms using Id
  const taskList = document.getElementById('tasks');                // same for task


  taskForm.addEventListener('submit', (event) => {
      event.preventDefault();                                    //prevent the page from reloading

      const taskInput = document.getElementById('new-task-description'); //get input field
      const task = taskInput.value;                          // get value from input field

      if (task) {                                 //is task empty??
          addTaskToList(task);                //Call function to add the task to  list
          taskInput.value = '';                        //clear
      }
  });

  function addTaskToList(task) {
      const taskItem = document.createElement('li');            // Create list item
      taskItem.textContent = task;                            // Set the task to text

      const deleteButton = document.createElement('button');     // crete  delete button
      deleteButton.textContent = 'Delete';                     // Set the button name

      deleteButton.addEventListener('click', () => {                        //listen to clicks
          taskItem.remove();                                                   //remove task when butoon deleted
      });

      taskItem.appendChild(deleteButton);                            // attach  delete button to task
      taskList.appendChild(taskItem);                                 // add the task tu list
  }
});
