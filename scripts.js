/*Your calculator is going to contain functions for all of the basic math operators you typically find on simple calculators, so start by creating functions for the following items and testing them in your browser’s console.*/
function add(a,b) {return a+b};
function subtract (a,b) {return a-b};
function multiply (a,b) {return a*b};
function divide (a,b) {
    return Math.round(a/b*100)/100};

/*Create a new function operate that takes an operator and 2 numbers 
and then calls one of the above functions on the numbers.
*/
function operate(operator,num1, num2) {return operator(num1,num2)};

/*
Create a basic HTML calculator with buttons for each digit, each of 
the above functions and an “Equals” key.
Do not worry about wiring up the JS just yet.
There should also be a display for the calculator, go ahead and fill it with
 some dummy numbers so you can get it looking right.
Add a “clear” button.


Create the functions that populate the display when you click the number
 buttons… you should be storing the ‘display value’ in a variable somewhere
  for use in the next step.
*/

let screenString = "0"; // always reset to default zero
let calcArray = []; //split to make areguments in operate()
let screenContent = ""; 
let initialValue = 0;
let answerArray = [];

const screen = document.querySelector('#screen'); //select the screen

function updateScreen() {
    screen.removeChild(screen.firstElementChild); //clears the screen
    let newScreenContent = document.createElement('div');
    newScreenContent.classList.add('screenContent');
    newScreenContent.textContent = screenContent + screenString;
    screen.appendChild(newScreenContent);
    return
}








//buttons (btn's) are divs
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


function testNegative() {
    let testerFloat = parseFloat(screenString);
    return testerFloat < 0;
}

function noStartingZero() {
    if(screenString === "0" || screenString === "-0") {
        screenString =  screenString.replace("0","");
        return
    }
    return
}



function screenFull() {
        if (screenString.length > 9){
        screenString.slice(screenString.length-1,screenString.length); //backspace
    }
}

function oneClicked() {
    noStartingZero();
    screenFull();
    screenString += "1";
    updateScreen();
    return 
}

function twoClicked() {
    noStartingZero();
    screenFull();
    screenString += "2";
    updateScreen();
    return 
}

function threeClicked() {
    noStartingZero();
    screenFull();
    screenString += "3";
    updateScreen();
    return 
}

function fourClicked() {
    noStartingZero();
    screenString += "4";
    updateScreen();
    return 
}

function fiveClicked() {
    noStartingZero();
    screenFull();
    screenString += "5";
    updateScreen();
    return 
}

function sixClicked() {
    noStartingZero();
    screenFull();
    screenString += " 6";
    updateScreen();
    return 
}

function sevenClicked() {
    noStartingZero();
    screenFull();
    screenString += "7";
    updateScreen();
    return 
}

function eightClicked() {
    noStartingZero();
    screenFull();
    screenString += "8";
    updateScreen();
    return 
}

function nineClicked() {
    noStartingZero();
    screenFull();
    screenString += "9";
    updateScreen();
    return 
}

function zeroClicked() {
    noStartingZero();
    screenFull();
    screenString += "0";
    updateScreen();
    return 
}


function decimalClicked() {
    if (screenString.contains(".")===true){return}
    screenFull();
    screenString += ".";
    updateScreen();
    return 
}


function clearClicked() {
    screenString = "0";
    screenContent = "";
    calcArray.splice(0, calcArray.length);
    updateScreen();
    return 
}



function operatorClicked(operator){
    if (calcArray.length >= 8) {return}; 
    calcArray.push(parseFloat(screenString));
    calcArray.push(operator);
    screenContent += screenString;
    if (operator === add) {
        screenContent += " + ";
    } else if (operator === subtract) {
        screenContent += " - ";
    } else if (operator === multiply) {
        screenContent += " * ";
    } else {
        screenContent += " / ";
    }
    
    screenString = "0";
    return
}

function addClicked() {
    operatorClicked(add);
    updateScreen();
    return 
}

function subtractClicked() {
    if (screenString === "0"){ 
        screenString === "-0"
        updateScreen();
        return
     } 
     operatorClicked(subtract);
     updateScreen();
     return
}

function multiplyClicked() {
    operatorClicked(multiply);
    updateScreen();
    return 
}

function divideClicked() {
    operatorClicked(divide);
    updateScreen();
    return 
}

function reducer(accumulator, currentValue) { 
    
}

function equalsClicked() {
    console.table(calcArray);
     if (calcArray[calcArray.length-1] === divide && screenString === "0") {
        alert("Divide by zero is undefined.");
        clearClicked();
        return
    }
   
    screenString = operate(calcArray[1],calcArray[0],parseFloat(screenString));
    
    if (calcArray.length >= 4){
        for (i=1;i<= (calcArray.length-2)/2; ++i){
            calcArray.shift;
            calcArray.shift;
            console.log(calcArray[0],screenString);
            screenString = operate(calcArray[1],parseFloat(screenString), calcArray[2]);
            
        } 
        
        
    }
    console.log(calcArray[0],screenString);
    calcArray.splice(0, calcArray.length);
    screenContent = "";
    updateScreen();
    return
}

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

/*


  Make the calculator work! You’ll need to store the first number that is 
input into the calculator when a user presses an operator, and also save 
which operation has been chosen and then operate() on them when the user presses the “=” key.
You should already have the code that can populate the display, so once
 operate() has been called, update the display with the ‘solution’ to the operation.
This is the hardest part of the project. You need to figure out how to
 store all the values and call the operate function with them. Don’t feel 
 bad if it takes you a while to figure out the logic.
Gotchas: watch out for and fix these bugs if they show up in your code:
Users should be able to string together several operations and get the right answer, with
 each pair of numbers being evaluated at a time. For example, 12 + 7 - 5 * 3 = should 
 yield 42. An example of the behavior we’re looking for would be this student solution. 
 Your calculator should not evaluate more than a single pair of numbers at a time. If 
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