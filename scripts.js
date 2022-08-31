  let displayValue = ''; // numbers go to display and num1 and num2 values
  let displayString = ''; // what you see on the display
  let firstNumInput = ''; //num1 for operate, stored when operators are selected
  
  let operator = '+'; //a global string variable that is set by operatorClicked
  let counter = 0; //if (counter > 0) operate and = firstNumInput

/*Your calculator is going to contain functions for all of the basic math operators you typically find on simple calculators, so start by creating functions for the following items and testing them in your browser’s console.*/
function add(a,b) {return a+b};
function subtract (a,b) {return a-b};
function multiply (a,b) {return a*b};
function divide (a,b) {return a/b};

/*Create a new function operate that takes an operator and 2 numbers 
and then calls one of the above functions on the numbers.
*/
function operate(operatorString,num1, num2){ 
    if (operatorString === '➕') {
        return add(num1,num2)
    } else if (operatorString === '➖') {
        return subtract(num1,num2)
    } else if (operatorString === '✖') { 
        return multiply(num1,num2)
    } else {
        return divide(num1, num2)
    };
};

function neatNum(number) {
    return Math.round(parseFloat(number) * 100)/100
}

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

function numClicked(e) {
    displayValue += e.target.textContent;
    displayString  += e.target.textContent;
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
function noDivideByZero() {
    displayString = displayString.substring(0, displayString.length - 1);
    displayValue = '';
    populate();
    return alert('Dividing any value by zero is undefined.')
}

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

function operatorClicked(e) {
    if(counter > 0 && parseFloat(displayValue) === 0 && displayString.includes('/') ){
        noDivideByZero();
    } else if (displayValue === '')  {
        return
    } else if (counter !== 0) {
        displayString = neatNum(firstNumInput) + ' ' + operator + ' ' + neatNum(displayValue) + ' = ';
        firstNumInput  = operate(operator, firstNumInput, parseFloat(displayValue));
        operator = e.target.textContent;
        displayString += Math.round(firstNumInput*1000000)/1000000 + '_  _' + neatNum(firstNumInput) + ' ' + operator + ' ';
    } else {
        firstNumInput = parseFloat(displayValue);
        operator = e.target.textContent;
        displayString = firstNumInput + ' ' + operator + ' ';
    };
    displayValue = '';
    counter += 1;
    populate();
    return
};

//and then operate() on them when the user presses the “=” key.
function equalsClicked() {
    if(counter > 0 && parseFloat(displayValue) === 0 && displayString.includes('/') ){
        noDivideByZero();
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

[oneBtn,twoBtn,threeBtn,fourBtn,fiveBtn,sixBtn,sevenBtn,eightBtn,nineBtn,zeroBtn]
  .forEach( e => e.addEventListener('click', numClicked)); // associate the function above with the click event

decimalBtn.addEventListener('click', decimalClicked); 

clearBtn.addEventListener('click', clearClicked); 

[addBtn,subtractBtn,multiplyBtn,divideBtn]
  .forEach( e => {return e.addEventListener('click', operatorClicked)});

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
