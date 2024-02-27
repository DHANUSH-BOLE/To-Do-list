function addItem() {
    var taskInput = document.getElementById('taskInput');
    var task = taskInput.value.trim();

    if (task !== '') {
      var listItem = document.createElement('li');

      var taskText = document.createElement('span');
      
      taskText.innerText = task;
     taskText.className = 'tasks'
      listItem.appendChild(taskText);

      var dateInput = document.createElement('input');
      dateInput.type = 'date';
      listItem.appendChild(dateInput);


      var deleteBtn = document.createElement('button');
      deleteBtn.className = 'button delete-btn';
      deleteBtn.onclick = function() {
        listItem.remove();
      };

      var deleteIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      deleteIcon.setAttribute("xmlns", "http://www.w3.org/2000/svg");
      deleteIcon.setAttribute("width", "10");
      deleteIcon.setAttribute("height", "10");
      deleteIcon.setAttribute("viewBox", "0 0 448 512");
      deleteIcon.className = "svgIcon";
      deleteIcon.innerHTML = '<path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>';

      deleteBtn.appendChild(deleteIcon);
      listItem.appendChild(deleteBtn);

      // var editBtn = document.createElement('button');
      // editBtn.innerText = 'Edit';
      // editBtn.className = 'edit-btn';
      // editBtn.onclick = function() {
      //   var newText = prompt('Enter new task', task);
      //   if (newText !== null) {
      //     taskText.innerText = newText.trim();
      //   }
      // };
      // listItem.appendChild(editBtn);
      document.getElementById('todoList').appendChild(listItem);
      taskInput.value = '';
    }
  }