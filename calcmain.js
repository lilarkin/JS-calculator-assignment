var num1;  
var num2;  
var operator;

function selectNumValue() {
  var numButton = event.target.innerHTML;
  var input = document.getElementById('math');
  input.value = numButton;
  if (number1)
    num2 = numButton
  else
    num = numButton
}

function doMath(num1, num2, operator) {
  //number 1 operator number 2 (switch statement from class notes needs work)
  switch(operator) {
  case '+':
      result = num1 + num2;
      break;
  case '-':
      result = num1 - num2;
      break;
  case '*':
      result = num1 * num2;
      break;
  case '/':
      result = num1 / num2;
      break;
  default:
    result = 'Not a valid operator';
}
  number1 = null;
  number2 = null;
  operator = null;
}
