var todoList = {
    todos: [],
    displayTodos: function(){
        console.log('My todos:', this.todos);
    },
//todoList.addTodo should add objects
    addTodos: function(todoText){
            this.todos.push({
            todoText: todoText,
            completed: false
            });
        this.displayTodos();
    },
//todoList.changeTodo should change the todoText property    
    changeTodo:  function(position, todoText){
        this.todos[position].todoText = todoText;
        this.displayTodos();
    },
//todoList.toggleCompleted should change the completed property     
    toggleCompleted: function(position){
        var todo = this.todos[position];
        todo.completed = !todo.completed;
        this.displayTodos();
    }
};
todoList.addTodos('this is my first object');
//todoList.addTodos('this is my second object');
todoList.changeTodo(0, 'changed first object');
todoList.toggleCompleted(0);
