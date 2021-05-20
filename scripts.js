/*Your calculator is going to contain functions for all of the basic math operators you typically find on simple calculators, so start by creating functions for the following items and testing them in your browser’s console.*/
function add(a,b) {return a+b};
function subtract (a,b) {return a-b};
function multiply (a,b) {return a*b};
function divide (a,b) {
    return a/b
};

/*Create a new function operate that takes an operator and 2 numbers 
and then calls one of the above functions on the numbers.
*/
function operate(operatorString,num1, num2){ 
    if (operatorString === "+") {
        return add(num1,num2)
    } else if (operatorString === "-") {
        return subtract(num1,num2)
    } else if (operatorString === "*") {
        return multiply(num1,num2)
    } else if (operatorString === "/") {
        return divide(num1, num2)
    } else {return console.log("Hey, this ain't no operator: '" + operator + "'!")
    };

    return
};



/*
Create a basic HTML calculator with buttons for each digit, each of 
the above functions and an “Equals” key.
Do not worry about wiring up the JS just yet.
There should also be a display for the calculator, go ahead and fill it with
 some dummy numbers so you can get it looking right.
Add a “clear” button.


Create the functions that populate the display when you click the number
 buttons… 
*/
const oneBtn = document.querySelector("#one");
const twoBtn = document.querySelector("#two");
const threeBtn = document.querySelector("#three");
const fourBtn = document.querySelector("#four");
const fiveBtn = document.querySelector("#five");
const sixBtn = document.querySelector("#six");
const sevenBtn = document.querySelector("#seven");
const eightBtn = document.querySelector("#eight");
const nineBtn = document.querySelector("#nine");
const zeroBtn = document.querySelector("#zero");
const decimalBtn = document.querySelector("#decimal");
const equalsBtn = document.querySelector("#equals");

const clearBtn = document.querySelector("#clear");
const addBtn = document.querySelector("#add");
const subtractBtn = document.querySelector("#subtract");
const multiplyBtn = document.querySelector("#multiply");
const divideBtn = document.querySelector("#divide");

//you should be storing the *** ‘display value’ in a variable somewhere
  //for use in the next step.
let displayValue = ""; 

const display = document.querySelector('#display'); //select the screen

function populate() {
    let oldContent = document.querySelector('#content');
    display.removeChild(oldContent);
    let newContent = document.createElement('div');
    newContent.textContent = displayValue;
    newContent.id= 'content';
    display.appendChild(newContent);
    return
};

populate();

function oneClicked() {
    displayValue +="1";
    populate();
    return
};
function twoClicked() {
    displayValue +="2";
    populate();
    return
};
function threeClicked() {
    displayValue +="3";
    populate();
    return
};
function fourClicked() {
    displayValue +="4";
    populate();
    return
};
function fiveClicked() {
    displayValue +="5";
    populate();
    return
};
function sixClicked() {
    displayValue +="6";
    populate();
    return
};
function sevenClicked() {
    displayValue +="7";
    populate();
    return
};
function eightClicked() {
    displayValue +="8";
    populate();
    return
};
function nineClicked() {
    displayValue +="9";
    populate();
    return
};
function zeroClicked() {
    displayValue +="0";
    populate();
    return
};


//Make the calculator work! You’ll need to store the first number that is 
//input into the calculator when a user presses an operator,

        //me: firstNumInput = displayValue;

let firstNumInput = "";

//and also save which operation has been chosen
        //me: operator = "+" etc.
let operator = "+"; //a global string variable that is set by operatorClicked

//This is the hardest part of the project. You need to figure out how to
// store all the values and call the operate function with them. Don’t feel 
// bad if it takes you a while to figure out the logic.
// if (counter !== 0) {
//    firstNumInput  = operate(operator, firstNumInput, parseFloat(displayValue));
//    } else {
//    firstNumInput = parseFloat(displayValue);
//  };
//
let counter = 0; //if (counter > 0) operate and = firstNumInput
function decimalClicked() {
    populate();
    return
};

function clearClicked() {
    populate();
    return
};

function subtractClicked() {
    if (counter !== 0) {
        firstNumInput  = operate(operator, firstNumInput, parseFloat(displayValue));
    } else {
        firstNumInput = parseFloat(displayValue);
    };
    operator = "-";
    displayValue = "";
    counter += 1;
    populate();
    return
};
function addClicked() {
    if (counter !== 0) {
        firstNumInput  = operate(operator, firstNumInput, parseFloat(displayValue));
    } else {
        firstNumInput = parseFloat(displayValue);
    };
    operator = "+";
    displayValue = "";
    counter += 1;
    populate();
    return
};
function multiplyClicked() {
    if (counter !== 0) {
        firstNumInput  = operate(operator, firstNumInput, parseFloat(displayValue));
    } else {
        firstNumInput = parseFloat(displayValue);
    };
    operator = "*";
    displayValue = "";
    
    counter += 1;
    populate();
    return
};
function divideClicked() {
    if (counter !== 0) {
        firstNumInput  = operate(operator, firstNumInput, parseFloat(displayValue));
    } else {
        firstNumInput = parseFloat(displayValue);
    };
    operator = "/";
    displayValue = "";
    counter += 1;
    populate();
    return
};


//and then operate() on them when the user presses the “=” key.
function equalsClicked() {
    displayValue = operate(operator, firstNumInput, parseFloat(displayValue));
    firstNumInput = 0;
    counter = 0;
    populate(); //update the display with the ‘solution’ to the operation.
    return
};

oneBtn.addEventListener('click', oneClicked); // associate the function above with the click event

twoBtn.addEventListener('click', twoClicked); 

threeBtn.addEventListener('click', threeClicked); 

fourBtn.addEventListener('click', fourClicked); 

fiveBtn.addEventListener('click', fiveClicked); 

sixBtn.addEventListener('click', sixClicked); 

sevenBtn.addEventListener('click', sevenClicked); 

eightBtn.addEventListener('click', eightClicked); 

nineBtn.addEventListener('click', nineClicked); 

zeroBtn.addEventListener('click', zeroClicked); 

decimalBtn.addEventListener('click', decimalClicked); 

clearBtn.addEventListener('click', clearClicked); 

addBtn.addEventListener('click', addClicked);

subtractBtn.addEventListener('click', subtractClicked);

multiplyBtn.addEventListener('click', multiplyClicked);

divideBtn.addEventListener('click', divideClicked);

equalsBtn.addEventListener('click', equalsClicked);



 /*Your calculator should not evaluate more than a single pair of numbers at a time. If 
 you enter a number then an operator and another number that calculation should be 
 displayed if your next input is an operator. The result of the calculation should be 
 used as the first number in your new calculation.



You should round answers with long decimals so that they don’t overflow the screen.



Pressing = before entering all of the numbers or an operator could cause problems!
Pressing “clear” should wipe out any existing data.. make sure the user is really starting 
fresh after pressing “clear”


Display a snarky error message if the user tries to divide by 0… don’t let it crash your 
calculator!


EXTRA CREDIT: Users can get floating point numbers if they do the math required to get 
one, but they can’t type them in yet. Add a . button and let users input decimals! Make 
sure you don’t let them type more than one though: 12.3.56.5. It is hard to do math on 
these numbers. (disable the decimal button if there’s already one in the display)
EXTRA CREDIT: Make it look nice! This can be a good portfolio project… but not if it’s UGLY. 
At least make the operations a different color from the keypad buttons.

EXTRA CREDIT: Add a “backspace” button, so the user can undo if they click the wrong number.
EXTRA CREDIT: Add keyboard support!
*/
