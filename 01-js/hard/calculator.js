/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor(){
    this.result = 0;
  }

  add(num){
     this.result += num;
  }
  subtract(num){
     this.result -= num;
  }
  multiply(num){
     this.result *= num;
  }
  divide(num){
    if(num === 0){
      throw new Error('Invalid divider: ' + num);
    }
     this.result /= num;
  }
  clear(){
    this.result = 0;
  }
  getResult(){
    return this.result;
  }
  calculate(expression){
      //remove space from the expression
      expression = expression.replace(/\s+/g,'');

      //check for invalid expression
      if(!/^[0-9+\*-/() ]+$/g.test(expression)){
        throw new Error("Invalid expression: " + expression);
      }

      //empty stack to store operands and operator 
      const stack = [];

      function findPrecedence(operator){
        if(operator == '+' || operator == '-'){
          return 1;
        }else if(operator == '*' || operator == '/'){
          return 2;
        }else{
          return 0; //For parenthesis
        }
      }

      //Iterate throw every character of the expression
      for(let i=0; i<expression.length; i++){
        const char = expression[i];
        if(char >= '0' && char <= '9'){
          let num = '';
          while(i < expression.length && (expression[i] >= '0' && expression[i] <= '9') || expression[i] === '.'){
            num += expression[i];
            i++;
          }
          i--;
          stack.push(parseFloat(num));
        }else if(char === '('){
          stack.push(char);
        }else if(char === ')'){
          while(stack.length > 0 && stack[stack.length-1] !== '('){
            const op2 = stack.pop();
            const operator = stack.pop();
            const op1 = stack.pop();
            if(stack.length > 0 && stack[stack.length-1] === '('){
            stack.pop();
            stack.push(evaluate(op1,op2,operator));
            break;
            }
            stack.push(evaluate(op1,op2,operator));
          }
          /* stack.pop(); */ //remove opening parenthesis
        }else if(char === '+' || char === '-' || char === '*' || char === '/'){
          while(stack.length > 0 && (findPrecedence(char) <= findPrecedence(stack[stack.length-2]))){
            const op2 = stack.pop();
            const operator = stack.pop();
            const op1 = stack.pop();
            stack.push(evaluate(op1, op2, operator));
          }
          stack.push(char);
        }

      }

      while(stack.length > 1){
        const op2 = stack.pop();
        const operator = stack.pop();
        const op1 = stack.pop();
        stack.push(evaluate(op1, op2, operator));
      }
      
      //function to evaluate an expression
      function evaluate(op1, op2, operator){
         switch(operator){
          case '+': return op1 + op2;
          case '-': return op1 - op2;
          case '*': return op1 * op2;
          case '/': if(op2 > 0){
                      return op1 / op2;
                    }
                     else{
                       throw new Error('Invalid expression: ' + op2);
          }
          default: throw new Error('Invalid operator: ' + operator);
         }
      }
      
      this.result = stack[0];
  }

}

module.exports = Calculator;
