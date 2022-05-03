const wash_btn = document.getElementById("input-btn_1")
const mow_btn = document.getElementById("input-btn_2")
const pull_btn = document.getElementById("input-btn_3")
const service_container = document.getElementById
("services_container")
const sumEl = document.getElementById("amt_in_num")
const notes = document.getElementById("notes")
let noteText = 'We accept cash, credit card, or PayPal'
const services = []


const washCar = {
    taskName: "Wash Car",
    price: 10
}
const mowLawn = {
    taskName: "Mow Lawn",
    price: 20
}
const pullWeed = {
    taskName: "Pull Weeds",
    price: 30
}

wash_btn.addEventListener("click", function(){
  services.push(washCar)
  service_container.innerHTML = ""
  renderTask(services)
})
mow_btn.addEventListener("click", function() {
  services.push(mowLawn)
  service_container.innerHTML = ""
  renderTask(services)
})
pull_btn.addEventListener("click", function() {
  services.push(pullWeed)
  service_container.innerHTML = ""
  renderTask(services)
})


function renderTask(arr) {
    let each_service_element = ""
    let sum = 0;
    for( let i = 0; i < arr.length; i++) {
        each_service_element += `<div id="each-service">
        <p class="each">${arr[i].taskName}<button class="del-btn">Remove</button></p>
        <p class="price">$${arr[i].price}</p>
        </div>
        `
        sum += arr[i].price
    }
    service_container.innerHTML = each_service_element
    sumEl.textContent = `$${sum}`
     if(sum > 0) {
        notes.textContent = `${noteText}`
    } else {
        notes.textContent = ""
    }


    
}