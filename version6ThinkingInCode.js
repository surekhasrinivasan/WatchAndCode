var todoList = {
	todos: [],
	displayTodos: function() {
		if (this.todos.length === 0) {
			console.log('todo list is empty!');
		} else {
			console.log('My todos:', this.todos);
			for (var i = 0; i < this.todos.length; i++) {
				if (this.todos[i].completed === true) {
					console.log('(x)', this.todos[i].todoText);
				} else {
					console.log('( )', this.todos[i].todoText);
				}
			}
		}
	},
	addTodos: function(todoText) {
		this.todos.push({
			todoText: todoText,
			completed: false
		});
		this.displayTodos();
	},
	//todoList.toggleCompleted should change the completed property     
	toggleCompleted: function(position) {
		var todo = this.todos[position];
		todo.completed = !todo.completed;
		this.displayTodos();
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
		this.displayTodos();
	}
};
todoList.addTodos('first');
todoList.addTodos('second');
todoList.addTodos('third');
//todoList.toggleCompleted(0);
todoList.toggleCompleted(1);
//todoList.toggleCompleted(2);
todoList.toggleAll();
todoList.toggleAll();
todoList.toggleAll();