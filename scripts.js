//I LEFT OFF AT ***** search it
//you should be storing the *** ‘display value’ in a variable somewhere
  //for use in the next step.

  let displayValue = ''; // numbers go to display and num1 and num2 values
  let displayString = ''; // what you see on the display
  let firstNumInput = ''; //num1 for operate, stored when operators are selected
  
  let operator = '+'; //a global string variable that is set by operatorClicked
  let counter = 0; //if (counter > 0) operate and = firstNumInput

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
    if (operatorString === '+') {
        return add(num1,num2)
    } else if (operatorString === '-') {
        return subtract(num1,num2)
    } else if (operatorString === '*') {
        return multiply(num1,num2)
    } else {
        return divide(num1, num2)
    };

    return
};

function neatNum(number) {
    return Math.round(parseFloat(number) * 100)/100
}



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


const display = document.querySelector('#display'); //select the screen

function populate() {
    let oldContent = document.querySelector('#content');
    display.removeChild(oldContent);
    let newContent = document.createElement('div');
    newContent.textContent = displayString;
    newContent.id= 'content';
    display.appendChild(newContent);
    return
};

populate();

function oneClicked() {
    displayValue += '1';
    displayString  += '1';
    populate();
    return
};
function twoClicked() {
    displayValue += '2';
    displayString  += '2';
    populate();
    return
};
function threeClicked() {
    displayValue +='3';
    displayString  += '3';
    populate();
    return
};
function fourClicked() {
    displayValue += '4';
    displayString  += '4';
    populate();
    return
};
function fiveClicked() {
    displayValue += '5';
    displayString  += '5';
    populate();
    return
};
function sixClicked() {
    displayValue += '6';
    displayString  += '6';
    populate();
    return
};
function sevenClicked() {
    displayValue += '7';
    displayString  += '7';
    populate();
    return
};
function eightClicked() {
    displayValue += '8';
    displayString  += '8';
    populate();
    return
};
function nineClicked() {
    displayValue += '9';
    displayString  += '9';
    populate();
    return
};
function zeroClicked() {
    displayValue += '0';
    displayString  += '0';
    populate();
    return
};

//This is the hardest part of the project. You need to figure out how to
// store all the values and call the operate function with them. Don’t feel 
// bad if it takes you a while to figure out the logic.
// if (counter !== 0) {
//    firstNumInput  = operate(operator, firstNumInput, parseFloat(displayValue));
//    } else {
//    firstNumInput = parseFloat(displayValue);
//  };
//

function decimalClicked() {
    if (displayValue === ''){
        displayValue = '0';
    }
    if (displayValue.includes('.') === true ){
        return
    };
    displayValue += '.';
    displayString  += '.';
    populate();
    return
};

function clearClicked() {
    firstNumInput = '';
    counter = 0;
    operator = '';
    displayString = '';
    displayValue = '';
    populate();
    return
};



function subtractClicked() {
    if(counter > 0 && parseFloat(displayValue) === 0 && displayString.includes('/') ){
        displayString = displayString.substring(0, displayString.length - 1);
        displayValue = '';
        populate();
        return alert('Dividing any value by zero is undefined.')
    } else if (displayValue === '')  {
        return
    } else if (counter !== 0) {
        displayString = neatNum(firstNumInput) + ' ' + operator + ' ' + neatNum(displayValue) + ' = ';
        firstNumInput  = operate(operator, firstNumInput, parseFloat(displayValue));
        operator = '-';
        displayString += Math.round(firstNumInput*1000000)/1000000 + '_  _' + neatNum(firstNumInput) + ' ' + operator + ' ';
    } else {
        firstNumInput = parseFloat(displayValue);
        operator = '-';
        displayString = firstNumInput + ' ' + operator + ' ';
    };
    displayValue = '';
    counter += 1;
    populate();
    return
};
function addClicked() {
    if(counter > 0 && parseFloat(displayValue) === 0 && displayString.includes('/') ){
        displayString = displayString.substring(0, displayString.length - 1);
        displayValue = '';
        populate();
        return alert('Dividing any value by zero is undefined.')
    } else if (displayValue === '')  {
        return
    } else if (counter !== 0) {
        displayString = neatNum(firstNumInput) + ' ' + operator + ' ' + displayValue + ' = ';
        firstNumInput  = operate(operator, firstNumInput, parseFloat(displayValue));
        operator = '+';
        displayString += Math.round(firstNumInput*1000000)/1000000 + '_  _' + neatNum(firstNumInput) + ' ' + operator + ' ';
    } else {
        firstNumInput = parseFloat(displayValue);
        operator = '+';
        displayString = firstNumInput + ' ' + operator + ' ';
    };
    displayValue = '';
    counter += 1;
    populate();
    return
};
function multiplyClicked() {
    if(counter > 0 && parseFloat(displayValue) === 0 && displayString.includes('/') ){
        displayString = displayString.substring(0, displayString.length - 1);
        displayValue = '';
        populate();
        return alert('Dividing any value by zero is undefined.')
    } else if (displayValue === '')  {
        return
    }else if (counter !== 0) {
        displayString = firstNumInput + ' ' + operator + ' ' + displayValue + ' = ';
        firstNumInput  = operate(operator, firstNumInput, parseFloat(displayValue));
        operator = '*';
        displayString += Math.round(firstNumInput*1000000)/1000000 + '_  _' + neatNum(firstNumInput) + ' ' + operator + ' ';
    } else {
        firstNumInput = parseFloat(displayValue);
        operator = '*';
        displayString = Math.round(firstNumInput*1000000)/1000000 + ' ' + operator + ' ';
    };
    displayValue = '';
    counter += 1;
    populate();
    return
};


function divideClicked() {
    if(counter > 0 && parseFloat(displayValue) === 0 && displayString.includes('/') ){
        displayString = displayString.substring(0, displayString.length - 1);
        displayValue = '';
        populate();
        return alert('Dividing any value by zero is undefined.')
    } else if (displayValue === '')  {
        return 
    } else if (counter !== 0) {
        displayString = firstNumInput + ' ' + operator + ' ' + displayValue + ' = ';
        firstNumInput  = operate(operator, firstNumInput, parseFloat(displayValue));
        operator = '/';
        displayString += Math.round(firstNumInput*1000000)/1000000 + '_  _' + neatNum(firstNumInput) + ' ' + operator + ' ';
    } else {
        firstNumInput = parseFloat(displayValue);
        operator = '/';
        displayString = firstNumInput + ' ' + operator + ' ';
        counter += 1;
    };
    displayValue = '';
    
    populate();
    return
};


//and then operate() on them when the user presses the “=” key.
function equalsClicked() {
    if(counter > 0 && parseFloat(displayValue) === 0 && displayString.includes('/') ){
        displayString = displayString.substring(0, displayString.length - 1);
        displayValue = '';
        populate();
        return alert('Dividing any value by zero is undefined.')
    } else if (displayValue === '')  {
        return
    } else if (counter !== 0) {
        displayString = neatNum(firstNumInput) + ' ' + operator + ' ' + displayValue + ' = ';
        firstNumInput  = operate(operator, firstNumInput, parseFloat(displayValue));
        displayString += Math.round(firstNumInput*1000000)/1000000 + ' ~ ~ ~ ' + neatNum(firstNumInput);
        displayValue = parseFloat(firstNumInput);
    } else {
        return alert(displayValue + ' is equal to ' + displayValue)
    };
    operator = '';
    counter = 0;
    populate();
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



 //Your calculator should not evaluate more than a single pair of numbers at a time. 
    //The result of the calculation should be 
    // used as the first number in your new calculation.

//me: I stored the value resulting from the first calculation in the firstNumInput variable.
        //the next calculation is calculated using that firstNumInput and the new input

//
//If you enter a number then an operator and another number that calculation should be 
        //displayed if your next input is an operator.

//me: displayString = firstNumInput + ' ' + operator + ' ' + displayValue 
        // displayString is the entire display  - what is posted by operatorClicked and numberClicked
       
        //update before computing and storing the new operator and the new firstNumInput
       
    

//You should round answers with long decimals so that they don’t overflow the screen.
//me: the substring is rounded as it is entered after an operation - not equals.

//Pressing = before entering all of the numbers or an operator could cause problems!
//me: if there is no input, return



//Pressing “clear” should wipe out any existing data.. make sure the user is really starting 
//fresh after pressing “clear”




//Display a snarky error message if the user tries to divide by 0… don’t let it crash your 
//calculator!


//EXTRA CREDIT: Users can get floating point numbers if they do the math required to get 
//one, but they can’t type them in yet. Add a . button and let users input decimals! Make 
//sure you don’t let them type more than one though: 12.3.56.5. It is hard to do math on 
//these numbers. (disable the decimal button if there’s already one in the display)
//EXTRA CREDIT: Make it look nice! This can be a good portfolio project… but not if it’s UGLY. 
//At least make the operations a different color from the keypad buttons.

//EXTRA CREDIT: Add a “backspace” button, so the user can undo if they click the wrong number.
//EXTRA CREDIT: Add keyboard support!
