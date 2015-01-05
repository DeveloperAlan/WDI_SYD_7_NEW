// var vito = function(greeting) {
//   console.log(greeting + "Vito");
// };

// vito("Hello");


// //Constructors
// var Todo = function(attributes) {
//   this.text = attributes.text;
//   this.createdAt = new Date();
//   this.complete = false;
// };

// var myTodo = new Todo({text: "Do the dishes" });
// console.log(myTodo.text);
// console.log(myTodo.createdAt);

// //Prototype

// Todo.prototype.display = function() {
//   console.log("Todo: " + this.text + " - created at" + this.createdAt.toLocaleString());
// }

// Todo.prototype.checkOff = function() {
//   this.complete = !this.complete;
// }

// //Object (known as hashes in Ruby)
// var myObject = {
//   jack: "21", 
//   wolf: "Unknown",
//   displayAges: function() {
//     console.log(this.jack);
//     console.log(this.wolf);
//   }
// }

// myObject.displayAges();

// var myO = {
//   lol: "lol", 
//   lmao: "lmao",
//   hahaha: function() {
//     for (x = 0; x <= 100; x++) {
//     console.log(this.lmao);
//     console.log(this.lol);
//   }
//   }
// }

// myO.hahaha();

var Person = function (attributes) {
  this.name = attributes.name;
  this.age = attributes.age;
  this.gender = attributes.gender;
}

Person.prototype.speak = function() {
  console.log(this.name + " says Hello World");
}

Person.prototype.walk = function () {
  console.log(this.name + " took one step")
}

var alan = new Person({name: "Alan", age: 19, gender: "Male"});
alan.speak();
alan.walk();






