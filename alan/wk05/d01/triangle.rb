
# Triangle
# Create a method so if you call .triangle on 3 numbers, the result will tell you if a triangle is equilateral, isosceles, or scalene.
 
# eg
 
# [3,3,5].triangle = "isoceles"
# The program should raise an error if the triangle cannot exist.
require 'pry'

class Array

def triangle
  return "Triangle can't exist" unless self.length == 3

  case self.uniq.length
  when 1
    'equilateral'
  when 2
    'isoceles'
  when 3
    'Scalene'
  end
end


end

puts [3,3,5].triangle