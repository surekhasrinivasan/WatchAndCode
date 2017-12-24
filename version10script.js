var todoList = {
	todos: [],
	addTodos: function(todoText) {
		this.todos.push({
			todoText: todoText,
			completed: false
		});
	},
	changeTodo: function(position, todoText) {
		this.todos[position].todoText = todoText;
	},
	deleteTodo: function(position){
        this.todos.splice(position, 1);
    },
	//todoList.toggleCompleted should change the completed property     
	toggleCompleted: function(position) {
		var todo = this.todos[position];
		todo.completed = !todo.completed;
    },
	//toggleAll: Otherwise, make everything
	toggleAll: function() {
		//Case 1: If everything's true, make everything false.       
		var totalTodos = this.todos.length;
		var completedTodos = 0;
		//Get number of completed todos
		for (var i = 0; i < totalTodos; i++) {
			if (this.todos[i].completed === true) {
				completedTodos++;
			}
		}
		if (completedTodos === totalTodos) {
			for (var i = 0; i < totalTodos; i++) {
				this.todos[i].completed = false;
			}
			//Case 2: Otherwise make everything true.            
		} else {
			for (var i = 0; i < totalTodos; i++) {
				this.todos[i].completed = true;
			}
		}
	}
};
var handlers = {
	// Working controls for .addTodo
	addTodo: function() {
		var addTodoTextInput = document.getElementById('addTodoTextInput');
		todoList.addTodos(addTodoTextInput.value);
		addTodoTextInput.value = '';
		view.displayTodos();
	},
	// Working controls for .changeTodo
	changeTodo: function() {
		var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
		var changeTodoTextInput = document.getElementById('changeTodoTextInput');
		todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
		changeTodoPositionInput.value='';
		changeTodoTextInput.value = '';
		view.displayTodos();
	},
	// Working controls for .deleteTodo
    deleteTodo: function(){
        var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
        todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
        deleteTodoPositionInput.value='';
        view.displayTodos();
    },
    // Working controls for .toggleCompleted
    toggleCompleted: function(){
        var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
        todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
        toggleCompletedPositionInput.value='';
        view.displayTodos();
    },
    toggleAll: function() {
		todoList.toggleAll();
		view.displayTodos();
	}
};
// There should be an li element for every todos


var view = {
    displayTodos: function(){
        var todosUl = document.querySelector('ul');
        todosUl.innerHTML = '';
        for(var i = 0; i < todoList.todos.length; i++){
            var todoLi = document.createElement('li');
            var todo = todoList.todos[i];
            // Each li element should show .completed
            var todoTextWithCompletion = '';
                if(todo.completed === true){
                todoTextWithCompletion = '(x) ' + todo.todoText;
                } else {
                todoTextWithCompletion = '( ) ' + todo.todoText;
                }
            // Each li element should contain .todoText
            //todoLi.textContent = todoList.todos[i].todoText;
            
            //Each li should have an id that has the todo position
            todoLi.id = i;
            todoLi.textContent = todoTextWithCompletion;
            //there should be a delete button for each todos
            todoLi.appendChild(this.createDeleteButton());
            todosUl.appendChild(todoLi);    
        }
    },
    //There should be a way to create delete buttons
    createDeleteButton: function() {
        var deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.className = 'deleteButton';
            return deleteButton;
    }
};