/* //writing things on a screen

function display(pig){

    document.getElementById('result').value += pig

    return pig

}
 */

//defining the variables


/* let firstNumber = document.getElementById('result').value; */

/* let x = operate() */

//let operator = ["+","-","*","/"]


//A function to hold the second number
/* 
function secondNumber(){

    let k = document.getElementById('result').value;
} */

//writing operator functions
//operate function calling the operator functions

/* function operate(){
add(); */
  /*   add1(); */
   /*  subtract();
    multiply();
    divide(); */

 

//call second variable


/* function add1(){
    firstNumber
}
 */
/* function add(firstNumber,secondNumber){

    secondNumber();
    
    return firstNumber + secondNumber;

// if the operator is pressed again, calculate the result of trhe previosd tw
   


}
 */
/* function subtract(firstNumber,secondNumber){

    secondNumber();

    return firstNumber-secondNumber;
}

function multiply(firstNumber,secondNumber){

    secondNumber();

    return firstNumber*secondNumber;
}

function divide(firstNumber,secondNumber){

    secondNumber();

    return firstNumber/secondNumber;
}


 */
//input the maths to be done







// call the variables

/* function operator[]

function operatos(x,y){

let y = 3;

let z = 2;

}

console.log()
 */

/* let firstNumber = 4;

let operator = ["+","-","*","/"];

let secondNumber = 5;
 */


/* unction operate()

let z = firstNumber operator  secondNumber

if (operator = "+"){

add()

}
 */


// equal sign
/* 
operate(){

    ifn
}
 */



//displaying things on a screen

function display(pig){
    document.getElementById('result').value += pig
    return pig

    let piggy =  pig;

    console.log(typeof piggy);
}

const operators = document.querySelectorAll('.operator');
const equalsKey = document.querySelector('button equal-sign');
/* const display = document.getElementById('result'); */
const numbers = document.querySelectorAll('.button');
/* const clear = document.getElementById('.result');  */

let firstNumber;
let currentOperator;
let secondNumber;
let tempArray = [];
let newNumber = result;
console.log(result.value);
let x;
let b;

x = 3;

x=b;

console.log(x);


/* clear.addEventListener('click', function () {
  display.textContent = '0';
})
 */
numbers.forEach((number) => {
  number.addEventListener('click', (e) => {
      tempArray.push(e.target.value); // store value to temparray
      console.log(tempArray);
      display.innerHTML = Number(tempArray.join("")); // display number from array
  });
});

 operators.forEach((operator) => {
  operator.addEventListener('click', (e) => {
      currentOperator = e.target.value; // store current operator
      console.log(currentOperator);

      firstNumber = Number(tempArray.join("")); // parse array to integers
      console.log(firstNumber);
   /*    console.log(typeof firstNumber) */;
      tempArray = []; // empty array
  });
});
  
// Go through the array and identify if operators according to the order of 
// BODMAS is present, and execute that operator for the operands left and right to it if found.
function validateBODMAS(inputs){
  let modifiedInputs = inputs
  if(modifiedInputs.includes("÷")){
    modifiedInputs = runOpp(modifiedInputs,"÷",divide)
  } 
  if (modifiedInputs.includes("*")){
    modifiedInputs = runOpp(modifiedInputs,"*",multiply)
  } 
  if (modifiedInputs.includes("+")){
    modifiedInputs = runOpp(modifiedInputs,"+",add)
  } 
  if (modifiedInputs.includes("-")){
    modifiedInputs = runOpp(modifiedInputs,"-",subtract)
  }
  return modifiedInputs;
}

// Run the operator for all opperands next to a particular operator.
// replace the result with operands and operator.
function runOpp(inputarr,oppSymbol,oppCallback){
  while(inputarr.includes(oppSymbol)){
        const indexOpp = inputarr.indexOf(oppSymbol)
        inputarr.splice(indexOpp - 1,3,oppCallback(Number(inputarr[indexOpp - 1]) , Number(inputarr[indexOpp + 1])))
        console.log(inputarr)
  }
  return inputarr
}

function calculate() {
  secondNumber = Number(tempArray.join(""));
  let result = operate(parseFloat(firstNumber), parseFloat(secondNumber), currentOperator);
 
 document.getElementById('result').value = result;

 console.log(result);

}


function add(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

function subtract(firstNumber, secondNumber) {
  return firstNumber - secondNumber;
}

function multiply(firstNumber, secondNumber) {
  return firstNumber * secondNumber;
}

function divide(firstNumber, secondNumber) {
  return firstNumber / secondNumber;
}

function operate(firstNumber, secondNumber, operator) {
  switch (operator) {
      case "+":
          return add(firstNumber, secondNumber);
      case "-":
          return subtract(firstNumber, secondNumber);
      case "*":
          return multiply(firstNumber, secondNumber);
      case "÷":
          return divide(firstNumber, secondNumber);
  }
};
console.log(result.value);

function clearScreen(){

  document.getElementById('result').value = ''

}
 
/* equalsKey.addEventListener('click', calculate()); */
 
/* 
let operator = ["+","-","*","/"] */

/* secondNumber = document.getElementById('result').value;

function number_2(){

   secondNumber = document.getElementById('result').value;
}
*/
//function to hold second variable

//let a = document.getElementById('result').value;  */



/* let operation = ["+","-","*","/"]; */

/* let b = document.getElementById('result').value; */

/* let plus = document.getElementById('plus').value;

console.log(plus);

let one = document.getElementById('one').value;
console.log(one);

let two = document.getElementById('two').value;
console.log(two);

let three = document.getElementById('three').value;
console.log(three);

let four = document.getElementById('four').value;
console.log(four);

let six = document.getElementById('six').value;
console.log(six);

let seven = document.getElementById('seven').value;
console.log(seven);

let eight = document.getElementById('eight').value;
console.log(eight);

let nine = document.getElementById('nine').value;
console.log(nine);

let multiply = document.getElementById('multiply').value;
console.log(multiply);

let divide = document.getElementById('divide').value;
console.log(divide);

let subtract = document.getElementById('subtract').value;
console.log(subtract);

let a = document.getElementById('result').value; 


 
 console.log(a);

 */

 function add(){

    


 }








/* function add(a,b,operation){
   let answer = a + b;
   for (let i= 0; i<operation.length ; i++){
   if (operation === '+') 
   return answer
   document.getElementById('result').value = answer;
   {
       break
   }
}
}



function operate(){
  add();

  /*  const calculator = (a, b, operation) => {
       if (operation === '+') return a + b;
       if (operation === '-') return a - b;
       if (operation === '*') return a * b;
       if (operation === '/') return b === 0 ? "Can't divide by 0!" : a / b;
     }
      */
//

/* function add(firstNumber,secondNumber){

   number_2();
   
   let y = firstNumber + secondNumber;

   document.getElementById('result').value = y;
   return y
}

*/
/* function operate(){
    add();
}  
 */
/* let buttonList = document.querySelectorAll(".button");
    buttonList.forEach(function(i){
        i.addEventListener("click",function(e){
            console.log(e.target.value);
            console.log(typeof e.target.value);

        })
    })

    let buttonListOperator = document.querySelectorAll(".operator");
    buttonListOperator.forEach(function(i){
        i.addEventListener("click",function(e){
            console.log(e.target.value);
            console.log(typeof e.target.value);
        })
    }) */
 
/* document.getElementById('.button') = a; */



/* var el = document.getElementById("buttons");
el.addEventListener("click", function(){alert("click1 triggered")}, false);
el.addEventListener("click", function(){alert("click2 triggered")}, false)
 */

/* let btn = document.querySelector('#buttons');
btn.addEventListener('click',method1);
btn.addEventListener('click',method2);
function method2(){
  console.log();
}
function method1(){
  console.log("Method 1");
} */
const obj = {};

obj.prop = 123;
console.log(obj);


let a = document.getElementById('result').value;

document.getElementById('result').value = a;

console.log(a);

/* function calculate() {
    // Get the values from the form elements
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operation = document.getElementById("operation").value;
    let result = 0;
    // Check if the values are valid numbers and the operation is selected
    if (!isNaN(num1) && !isNaN(num2) && operation != "") {
      // Perform the calculation based on the operation
      switch (operation) {
        case "+":
          result = num1 + num2;
          break;
        case "-":
          result = num1 - num2;
          break;
        case "*":
          result = num1 * num2;
          break;
        case "/":
          // Check if the denominator is not zero
          if (num2 != 0) {
            result = num1 / num2;
          } else {
            // Display an error message
            result = "Cannot divide by zero";
          }
          break;
      }
      // Display the result in the paragraph element
      document.getElementById("result").innerHTML = "Result: " + result;
    } else {
      // Display an error message
      document.getElementById("result").innerHTML = "Please enter valid numbers and select an operation";
    }
  }
  // Attach the calculate function to the form events
  document.getElementById("calculator").onchange = calculate;
  document.getElementById("calculator").oninput = calculate;
  document.getElementById("calculator").onsubmit = function (e) {
    // Prevent the default form submission behavior
    e.preventDefault();
    // Call the calculate function
    calculate();
  };         */

 /*  let num1 = parseFloat(document.getElementById("num1"));

  console.log(parseFloat(num1)); */
/* 
  function operate(){
    let a = document.getElementById('result').value;

    console.log(parseFloat(a));
   */
