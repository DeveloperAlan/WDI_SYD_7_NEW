//Morning Exercise: Build "FizzBuzz"
//Count from 1 to 100 replacing every number divisible by 3 with "Fizz" 
//and every number divisible by 5 with "Buzz" and all numbers divisible by both with "FizzBuzz".

//Bonuses: Write it again without using loops (hint: recursive functions) AND/OR write it in under 75 characters.

var i = 0

while(i <= 100) {
  i++;
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0 ) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

========================================

function fizzbuzz(i) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0 ) {
    console.log("Buzz");
  } else {
    console.log(i);
  }

  if (i ! = 100) {
    fizzbuzz(++i)
  }
}

fizzbuzz(1);