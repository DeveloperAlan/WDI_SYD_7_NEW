document.forms[0].onsubmit = function () {
  var firstNumber = parseInt(document.getElementById("number_one").value);
  var secondNumber = parseInt(document.getElementById("number_two").value);
  var operation = document.getElementById("operation").value;

  var resultElement = document.getElementById("result");

  if (operation === "add") {
    resultElement.innerHTML = firstNumber + secondNumber;
  } else if (operation === "subtract") {
    resultElement.innerHTML = firstNumber - secondNumber;
  } else if (operation === "multiply") {
    resultElement.innerHTML = firstNumber * secondNumber;
  } else if (operation === "divide") {
    resultElement.innerHTML = firstNumber / secondNumber;
  }
}




