
const devPrice = document.querySelectorAll(".dev-price"); //Selecting all the prices
const currencyDropList = document.querySelectorAll("#currency-option"); // selecting the SELECT tag
const favBtn = document.querySelectorAll("#dev-fav"); // Selecting the Heart button

// used to fetch the currencies from an exchange rate api
fetch('https://api.frankfurter.app/currencies')
.then((response) => response.json())
.then((data) => {
    show(data);
})

// function to show the different currencies in the Select tag
function show(data) {
    const asArray = Object.entries(data)
    // adding options to the select tag from the API
    for(let i = 0; i < asArray.length; i++){
       currencyDropList[0].innerHTML += `<option value="${asArray[i][0]}">${asArray[i][1]}</option> `
    }
}

// Looping over each developer's price and adding an event listener when you change the currency
for(let i = 0; i < currencyDropList.length; i++){
    currencyDropList[i].addEventListener('change', function(e){
    let currentCurrency = currencyDropList[0].value; 
    console.log(currentCurrency); 
})
}


 
