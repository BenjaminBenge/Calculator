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
}


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
let buttonList = document.querySelectorAll(".button");
    buttonList.forEach(function(i){
        i.addEventListener("click",function(e){
            console.log(e.target.value);
        })
    })