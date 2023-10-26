const readline = require('readline-sync');
const opObj = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b,
}

const getOperator = (opList) => {
  return readline.question('What operation would you like to perform? (+, -, *, /) ',
  {
    limit: opList,
    limitMessage: 'This is not a valid operator!'
  }
  ); 
};

const getNumber = (str) => {
  return readline.questionInt(`Please enter the ${str} number: `, {
    limitMessage: 'This is not a valid number!',
  }); 
};

const doMath = (opObj, operator, num1, num2) => {
  return opObj[operator](num1, num2);
};

function calculator(opObj) {  
  const opArr = Object.keys(opObj);
  const operator = getOperator(opArr);
  const [num1, num2] = ['first', 'second'].map((item) => getNumber(item));   
  console.log(`The result is: ${doMath(opObj, operator, num1, num2)}`);
}
calculator(opObj);













