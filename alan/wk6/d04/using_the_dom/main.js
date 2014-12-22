// $(function() {
//   $("#show_me").on('click', function() {
//     $("#green_square").toggleClass("red");
//     $("#green_square").toggleClass("green");
//   });
// });

$(function() {
  $(document).on('keypress', function(e) {
    console.log(e);
  })

  $(document).on("click", function() {
    alert("Body clicked");
  })
  $("#show_me").on('click', function(e) {
    alert("Button clicked")
    
    e.stopPropagation();
  });
});

// var fadeOut = function(element) {
//   var opacity = 1;

//   var fadePart = function() {
//     opacity -= 0.005;
//     element.setAttribute("style", "opacity: " + opacity + ";");

//     console.log("test");

//     if (opacity > 0) {
//       setTimeout(fadePart, 10);
//     }
//   }

//   fadePart();
// }

// var h1 = document.getElementById("home_header");
// h1.onclick = function() {
//   fadeOut(h1);
// }
// document.body.onclick = function() {
//   alert('Body clicked!');
// }

// document.getElementbyId("email").onfocus = function() {

//   var nameField = document.getElementbyId("name");
//   var emailField = document.getElementbyId("email");

//   validatesPresence(nameField);
//   validatesPresence(emailField);
// }

// var validatesPresence = function(formField) {
//   if (formField.value.length === 0) {
//     formField.setAttribute("style", "border: 1px solid red;");
//   } else {
//     formField.setAttribute("style", "border: 1px solid black;");
//   }
// }