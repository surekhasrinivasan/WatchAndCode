var todos = ['item 1', 'item 2', 'item 3'];

//Function to display todos
function displayTodos(){
    console.log("My Todos: ", todos);
}
displayTodos();

//Function to add todos
function addTodos(todo){
    todos.push(todo);
    displayTodos();
}
addTodos('item 4');

//Function to change todos
function changeTodos(position, newValue){
    todos[position]= newValue;
    displayTodos();
}
changeTodos(2, 'changed item');

//Function to delete todos
function deleteTodos(position){
    todos.splice(position, 1);
    displayTodos();
}
deleteTodos(2);