//Store the todos array on an object
var todoList = {
    todos: ['item 1', 'item 2', 'item 3']
};
//console.log(todoList);

//displayTodos method
var todoList = {
    todos: ['item 1', 'item 2', 'item 3'],
    displayTodos: function(){
        console.log('My Todos: ' + this.todos);
    }
};
todoList.displayTodos();

//addTodos method
var todoList = {
    todos: ['item 1', 'item 2', 'item 3'],
    displayTodos: function(){
        console.log('My Todos: ' + this.todos);
    },
    addTodos: function(todo){
        this.todos.push(todo);
        this.displayTodos();
    }
};
todoList.addTodos('new item 4');

//changeTodo method
var todoList = {
    todos: ['item 1', 'item 2', 'item 3'],
    displayTodos: function(){
        console.log('My Todos: ' + this.todos);
    },
    addTodos: function(todo){
        this.todos.push(todo);
        this.displayTodos();
    },
    changeTodo:  function(position, newValue){
        this.todos[position] = newValue;
        this.displayTodos();
    }
};
todoList.changeTodo(0, 'new item 1');

//deleteTodo method 
var todoList = {
    todos: ['item 1', 'item 2', 'item 3'],
    displayTodos: function(){
        console.log('My Todos: ' + this.todos);
    },
    addTodos: function(todo){
        this.todos.push(todo);
        this.displayTodos();
    },
    changeTodo:  function(position, newValue){
        this.todos[position] = newValue;
        this.displayTodos();
    },
    deleteTodo: function(position){
        this.todos.splice(position,1);
        this.displayTodos();
    }
};
todoList.deleteTodo(0);


