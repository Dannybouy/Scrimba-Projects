//  DOM elements
 const resultSpace = document.getElementById('result')
 const passLength = document.getElementById('length')
 const uppercase = document.getElementById('uppercase')
 const lowercase = document.getElementById('lowercase')
 const numbers = document.getElementById('numbers')
 const symbols = document.getElementById('symbols')
 const generateBtn = document.getElementById('generate')
 const clipboardBtn = document.getElementById('clipboard')

  // An object we use to access the functions for each conditions 
 const randomFunc = {
     lower: getRandomLower,
     upper: getRandomUpper,
     numbers: getRandomNumbers,
     symbols: getRandomSymbols
 }
 // so the words are generated when you click the 'generate btn'

 generateBtn.addEventListener('click', (e) => {
     // we need the values for each condition to generate the password
     const length = Number(passLength.value); // change from string to number
     const hasLower = lowercase.checked;
     const hasUpper = uppercase.checked;
     const hasNumber = numbers.checked;
     const hasSymbol = symbols.checked; // change from string to number
     
     resultSpace.innerText = generatePassword(hasLower, hasNumber, hasSymbol, hasUpper, length);
 })

 //Generate password Function
 function generatePassword(upper,lower,numbers,symbols) {
     // 1. initialize the password variable that we would return
     let generatePassword = ''
     // 2. filter out the unchecked types
     const checkedBoxCount = upper + lower + numbers + symbols
     // Because we need to filter out the unchecked boxes and we would be using the filter method that needs an array to work, we need to create an array
    const checkedBoxesArr = [{upper},{lower},{numbers},{symbols}].filter(function item(){
        Object.values(item)[0]
    })

    console.log('checkedBoxesArr:', checkedBoxesArr)
     //3. loop over length and call the generator function for each type
     // 4. return the password

 }

// First we need functions that generate different parameters like the letters , symbols and numbers. We would be using ASCII code to generate for the letters and number and we would hardcode the symbols 

// function for lowercase
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

// function for Uppercase
function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

// function for numbers
function getRandomNumbers() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

// function for symbols
function getRandomSymbols() {
    let symbols = '!@#$%^&*(){}[]=<>/,.|~`;:?"+-_'
    return symbols[Math.floor(Math.random() * symbols.length)];
}


