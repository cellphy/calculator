const readline = require('readline-sync');
function calculator() {
  let operation = readline.question('What operation would you like to perform? (+, -, *, /) ');
  while (!['+', '-', '*', '/'].includes(operation)) {
    console.log('That is not a valid operation');
    operation = readline.question('What operation would you like to perform? (+, -, *, /) ');
  }

  let num1 = readline.question('Please enter the first number: ');
  while (isNaN(num1)) {
    console.log('This is not a number');
    num1 = readline.question('Please enter the first number: ');
  }

  let num2 = readline.question('Please enter the second number: ');
  while (isNaN(num2)) {
    console.log('This is not a number');
    num2 = readline.question('Please enter the second number: ');
  }

  let result;  
    switch (operation) {
      case '+':
        result = parseInt(num1) + parseInt(num2);
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
    }
    console.log(`The result is: ${result}`);
  }
calculator();













