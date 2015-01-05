var todoApp;

window.onload = function() {
  todoApp = new TodoApp();
  todoApp.start();
}

// var todoList;

// var createTodoElement = function(todo) {
//   var todoElement = document.createElement('div');
//   todoElement.className = "todo-item";

//   var todoTextElement = document.createElement('p');
//   todoTextElement.innerHTML = todo.text;

//   var todoInfoElement = document.createElement('span');
//   todoInfoElement.innerHTML = "Created at: " + todo.createdAt.toLocaleString();

//   todoElement.appendChild(todoTextElement);
//   todoElement.appendChild(todoInfoElement);

//   return todoElement;
// }

// var render = function(todoList) {
//   var todoListElement = document.getElementById("todo-list");

//   for (i in todoList) {
//     var todoElement = createTodoElement(todoList[i]);
//     todoListElement.appendChild(todoElement);
//   }
// }

// window.onload = function() {
//   todoList = [
//     new Todo({ text: "Do the dishes"}),
//     new Todo({ text: "Hang out the washing"}),
//     new Todo({ text: "Learn JavaScript"})
//   ];



//   render(todoList);
// };