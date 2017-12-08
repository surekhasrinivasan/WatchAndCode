var todoList = {
    todos: [],
//.displayTodos should tell if .todos is empty
//.displayTodos should show .todoText
//.displayTodos should show .Completed
    displayTodos: function(){
        if(this.todos.length === 0){
            console.log('todo list is empty!');
        } else{
            console.log('My todos:', this.todos);
            for(var i = 0; i < this.todos.length; i++){
                if(this.todos[i].completed === true){
                    console.log('(x)',this.todos[i].todoText);        
                } else{
                    console.log('( )', this.todos[i].todoText);
                }
            }
        }
    },
    addTodos: function(todoText){
            this.todos.push({
            todoText: todoText,
            completed: false
            });
        this.displayTodos();
    },
    //todoList.toggleCompleted should change the completed property     
    toggleCompleted: function(position){
        var todo = this.todos[position];
        todo.completed = !todo.completed;
        this.displayTodos();
    }

};
todoList.displayTodos();
todoList.addTodos('item 1');
todoList.addTodos('item 2');
todoList.addTodos('item 3');
todoList.toggleCompleted(2);






