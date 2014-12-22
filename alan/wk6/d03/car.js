var car = { 
  name: "Bessy",
  drive: function() {
    console.log(this.name + " is driving");
  }
}

car.drive();

============================================

var Car = function(name, make, model) {
  this.name = name
  this.make = make
  this.model = model
}

Car.prototype.drive = function() {
  console.log(this.name + " is driving");
}

============================================

class Car
  attr_accessor :name, :make, :model

  def initialize(name, make, model)
    self.name = name
    self.make = make
    self.model = model
  end

  def drive
    puts "#{name} is driving"
  end
end