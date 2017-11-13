//store the todos in a variable
var todos = ['item 1', 'item 2', 'item 3'];


//display todos
console.log(todos);

//add new todos

//adding new item 4 to todos
todos.push('item 4');
console.log(todos);
//adding new item 5 to todos
todos.push('item 5');
console.log(todos);

//change todos

//changing the fourth item
todos[3] = 'changed item 4';
console.log(todos);
//changing the first item
todos[0] = 'updated item 1';
console.log(todos);

//delete todos

//deleting the first item 
todos.splice(0,1);
console.log(todos);
//deleting second and third item
todos.splice(1, 2);
console.log(todos);


