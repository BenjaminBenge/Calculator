//writing things on a screen

function display(pig){

    document.getElementById('result').value += pig

    return pig

}


//defining the variables


let firstNumber = document.getElementById('result').value;

let y = 

/* let x = operate() */
/* 
let operator = ["+","-","*","/"]; */


//A function to hold the second number

function secondNumber(){

    let k = document.getElementById('result').value;
}

//writing operator functions
//operate function calling the operator functions

function operate(){

    add1();
   /*  subtract();
    multiply();
    divide(); */

}   

//call second variable


function add1(){
    firstNumber
}

function add(firstNumber,secondNumber){

    secondNumber();
    
    return firstNumber + secondNumber;

// if the operator is pressed again, calculate the result of trhe previosd two

   


}

function subtract(firstNumber,secondNumber){

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



//input the maths to be done



//create the operate function

function operate(firstNumber,operator,secondNumber){

//do a loop on the operators

for (let i = 0; i < operator.length; i++) {

//do if statements on the loop 

//while calling the functions for each instance

    if (operator = "+"){

        add();
        
    }

    else if (operator ="-"){

        subtract();
    }

    else if (operator ="*"){

        multiply();
    }

    else if (operator ="/"){

        divide();
    }
    
    else if (operator ="/"){

        subtract();
    }    

        else if (operator ="/"){

            subtract();
        }        

        else{"choose an operator";
        }
}

}

let answer = operate();

console.log(answer);





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
