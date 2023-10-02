

//displaying things on a screen

function display(pig){
    document.getElementById('result').value += pig
    return pig

    let piggy =  pig;

    console.log(typeof piggy);
}

const operators = document.querySelectorAll('.operator');
/* const equalsKey = document.querySelector('button equal-sign'); */
/* const display = document.getElementById('result'); */
const numbers = document.querySelectorAll('.button');
/* const clear = document.getElementById('.result');  */

let firstNumber;
let currentOperator;
let secondNumber;
let tempArray = [];
let newNumber;
let addition ;
let answer ;
let show = [];
let countOperator;





/* clear.addEventListener('click', function () {
  display.textContent = '0';
})
 */
numbers.forEach((number) => {
  number.addEventListener('click', (e) => {

      tempArray.push(e.target.value  !== "=" ? e.target.value : "") // store value to temparray
      show.push(e.target.value  !== "=" ? e.target.value : "") 
      console.log();
      console.log(tempArray);
      display.innerHTML = Number(tempArray.join("")); // display number from array
      display.innerHTML = Number(show.join("")); // display number from array
  });
});

 operators.forEach((operator) => {
  operator.addEventListener('click', (e) => {
      currentOperator = e.target.value; // store current operator
   /*    show.push(e.target.value  !== "=" ? e.target.value : "")  */
      console.log(currentOperator);

   /* 
      countOperator = document.getElementById("operate");
      countOperator.addEventListener("click", function() {
         count++;
         countOperator.innerHTML = count;
         console.log(countOperator);
      });
        
     */

      
      

      clear();
      
      solve();


      firstNumber = Number(tempArray.join("")); // parse array to integers
      number1 = Number(show.join("")); // parse array to integers
      console.log(firstNumber);
      console.log(tempArray);
      console.log(show);


      solve();
     
      tempArray = []; // empty array
      show = [];


  
      secondNumber = Number(tempArray.join(""));   
    
     
  });
});
  
newArray = [firstNumber,secondNumber];

//

function calculate() {

  secondNumber = Number(tempArray.join(""));

  number2 = Number(show.join(""));

  let newArray= [firstNumber,secondNumber]



  console.log(newArray);





  console.log(secondNumber);

  let result = operate(parseFloat(firstNumber), parseFloat(secondNumber), currentOperator);
 
 document.getElementById('result').value = result;
 tempArray =[result];
 answer = [result]
 answer = tempArray
 console.log(answer);
 console.log(result);
 console.log(show);
 show = [];

 /* solution = Number(show.join("")); //Parse arary to interger */ 
/*  console.log(solution); */

 newNumber = result;
 console.log(newNumber);
 console.log(typeof newNumber);

/*  show = []; */


/*   if(secondNumber !== null)
calculate();

else  */

}
/* calculate(); */ /* 
 */



function add(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
  
}
/* add = firstNumber + secondNumber;
console.log(Number(add)); */

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
      case "/":
          return divide(firstNumber, secondNumber);
  }
};

function clear(){

  document.getElementById('result').value = '';
}

function clearScreen(){

  document.getElementById('result').value = '';

  show = [];
  tempArray = [];
 
}


 


  function solve() {
   number1 = Number(tempArray.join("")); // parse array to integers
   number2 = Number(show.join(""));
      console.log(number2);
      answer = solution(parseFloat(number1), parseFloat(number2), currentOperator);
    
    
    
    function add(number1, number2) {
      return number1 + number2;
      
    }
    /* add = firstNumber + secondNumber;
    console.log(Number(add)); */
    
    function subtract(number1, number2) {
      return number1 - number2;
    }
    
    function multiply(number1, number2) {
      return number1* number2;
    }
    
    function divide(number1, number2) {
      return number1/number2;
    }
    
    function solution(number1, number2, operator)  {
      switch (operator) {
          case "+":
              return add(number1,number2 );
          case "-":
              return subtract(number1, number2);
          case "*":
              return multiply(number1, number2);
          case "/":
          
              return divide(number1, number2);}
      }

    
  }
  






  
  //calculate the result of the array
  newArray = [firstNumber, secondNumber];

  let Answer1 =  newArray[0] *  newArray[1];
  

  console.log (Answer1);

  console.log(newArray);

