var App = function () {
}

App.prototype.boot = function () {
  this.pullInitalData();
}

App.prototype.pullInitalData = function () {
  alert("Pulling data from " + this.dataURL)
}

var app = new App("LOL");
app.dataURL = "http://localhost:3000/puppies";
app.boot();