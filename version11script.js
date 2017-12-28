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
	deleteTodo: function(position) {
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
		//todoList.toggleAll should use forEach
		this.todos.forEach(function(todo){
		//Get number of completed todos
			if(todo.completed === true){
				completedTodos++;
			}
		});
		this.todos.forEach(function(todo){
		//Case 1: If everything's is true,make everything false.
			if(todo.completedTodos === totalTodos){
				todo.completed = false;
				//Case 2: Otherwise make everything true.
			} else {
				todo.completed = true;
			}
		});
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
		changeTodoPositionInput.value = '';
		changeTodoTextInput.value = '';
		view.displayTodos();
	},
	// Working controls for .deleteTodo
	deleteTodo: function(position) {
		todoList.deleteTodo(position);
		view.displayTodos();
	},
	// Working controls for .toggleCompleted
	toggleCompleted: function() {
		var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
		todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
		toggleCompletedPositionInput.value = '';
		view.displayTodos();
	},
	toggleAll: function() {
		todoList.toggleAll();
		view.displayTodos();
	}
};
// There should be an li element for every todos
var view = {
	displayTodos: function() {
		var todosUl = document.querySelector('ul');
		todosUl.innerHTML = '';
		//view.displayTodos should use forEach
		todoList.todos.forEach(function(todo, position){
			var todoLi = document.createElement('li');
			var todoTextWithCompletion = '';
				if (todo.completed === true) {
					todoTextWithCompletion = '(x) ' + todo.todoText;
					} else {
					todoTextWithCompletion = '( ) ' + todo.todoText;
					}
				todoLi.id = position;
					todoLi.textContent = todoTextWithCompletion;
					todoLi.appendChild(this.createDeleteButton());
					todosUl.appendChild(todoLi);
		},this);
	},
	//There should be a way to create delete buttons
	createDeleteButton: function() {
		var deleteButton = document.createElement('button');
		deleteButton.textContent = 'Delete';
		deleteButton.className = 'deleteButton';
		return deleteButton;
	},
	setUpEventListeners: function() {
		//Delete buttons should have access to the todo id
		var todosUl = document.querySelector('ul');
		todosUl.addEventListener('click', function(event) {
			//console.log(event.target.parentNode.id);
			//Clicking delete should update todoList.todos and the DOM
			//Get the element that was clicked on. 
			var elementClicked = event.target;
			//check if elementClicked is a delete button. 
			if (elementClicked.className === 'deleteButton') {
				//Run handlers.deleteTodo(position)
				handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
			}
		});
	}
};
view.setUpEventListeners();