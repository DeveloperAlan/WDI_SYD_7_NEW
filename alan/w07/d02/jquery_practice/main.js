$(function () {
  //  document.getElementById("click-me").onclick = function() {
  //    document.getElementById("put-text-here").innerText = "Hello World";
  // }
  // $("#click-me").on("click", function() {
  //   $("#put-text-here").text("Hello World!");
  //   // $(this).text("CLICKED!"); 
  //   $(this).fadeOut('slow');
  // });
$("body").on("click", function() {
  $.getJSON("http://headers.jsontest.com/", function(result){
    $("<p>" + result.Host + "</p<").appendTo($("#todo-list"));
  });
});

    $("#todo").on("keypress", function(event) {
        if (event.which === 13 && $(this).val() !== "") {
          var todoText = $(this).val();
          //val() represents the value of the html of this (which is #todo)
          var $todo = $("<p><span>" + todoText + "</span><input type=\"text\"> <button>x</button></p>");
          //$vodo is a jQuery element, rather than a HTMl element (jQuery dollar sign character ia a valid character for naming conventions)
          $("#todo-list").append($todo);
          $todo.find("input").hide();
          $todo.hide().slideDown("slow");
          $(this).val("");
        };
    });

    $("#todo-list").on("keypress", "p input", function(event) {
        if (event.which === 13 && $(this).val() !== "") {
          var editedText = $(this).hide().val();
          $(this).parent().find("span").show().text(editedText);
        }
    })

    $("#todo-list").on("dblclick", "p", function() {
      var todoText = $(this).find("span").hide().text();
      $(this).find("input").show().val(todoText);
    });

    $("#todo-list").on("click", "p button", function() {
      $(this).parent().slideUp('slow', function () {
              $(this).remove();
      });

    });
});