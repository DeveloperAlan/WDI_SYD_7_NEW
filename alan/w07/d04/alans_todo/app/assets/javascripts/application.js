// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

// $(function () {
//   $("#add-todo").on("submit", function (event) {
//     var text = $("#todo-text").val();
//     var notes = $("#todo-notes").val();
//     var complete = $('#todo-completed').prop("checked");

//     $.post("/todos", { todo: {text: text, notes: notes, completed: completed}}, function(data) {
//       console.log(data);
//     }, "json"); 

//     event.preventDefault();
//   });
// });

$(function () {
  $("#add-todo").on("keypress", function(event) {
    if (event.keyCode === 13 && $(this).val() !== "") {
      $.ajax({
        method: "POST",
        url: "/todos",
        dataType: "json",
        data: {
          todo: {
            text: $(this).val()
          }
        },
        success: function(todo) {
          $("body").append("<p data-id=\"" + todo.id + "\" class=\"todo\">" + todo.text + "</p>");
        }
      });
    }
  });

  $("body").on("click", ".todo", function() {
    var todoURL = "/todos/" + $(this).attr("data-id");

    var self = this;

    $.getJSON(todoURL, function(todo) {
      $(self).append("<div>" + todo.notes + "</div>");
    });
  });

  $.getJSON("/todos", function(todos) {
    $.each(todos, function(index, todo) {
      $("body").append("<p data-id=\"" + todo.id + "\" class=\"todo\">" + todo.text + "</p>");
    });
  });
});