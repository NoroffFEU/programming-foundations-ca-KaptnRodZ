const coffeMaker = document.querySelector("#coffeeMaker")
const onButton = document.querySelector("#onButton")
const offButton = document.querySelector("#offButton")
const onStatus = document.querySelector("#onStatus")
const extraHeatStatus = document.querySelector("#extraHeatStatus")
const extraHeatOnButton = document.querySelector("#extraHeatOnButton")
const extraHeatOffButton = document.querySelector("#extraHeatOfButton")
const coffeeObject = document.querySelector("#coffeeObject")

const coffeeMaker = {
    brand: "Mocca Master",
    price: 180,
    currency: "dollar",
    productioncapasity: 1.2,
    unit: "liter",
    on: false,
    colors: ["black", "grey", "white"],
    extraheat: false,
    approvedForSaleByECBC: true,
    turnOn: function() {
      coffeeMaker.on = !coffeeMaker.on
      if(coffeeMaker.on === false) {
        coffeeMaker.extraheat = false
      }
    },
    turnOnHeat: function() {
      if(coffeeMaker.on) {
        coffeeMaker.extraheat = !coffeeMaker.extraheat;
        console.log(coffeeMaker.extraheat)
      }
    }
}

function returnObjectInHtml () {
  coffeeObject.innerHTML=( `<p>${coffeeMaker.brand}</p>
<p>is on: ${coffeeMaker.on}</p>
<p>extra heat: ${coffeeMaker.extraheat}</p>
<p>approved for sale: ${coffeeMaker.approvedForSaleByECBC}</p>
<p>price in dollar: ${coffeeMaker.price}</p>`)
}
onButton.addEventListener("click", function () {
  coffeeMaker.on = true
  onStatus.textContent = coffeeMaker.on 
  returnObjectInHtml()
})
offButton.addEventListener("click", function () {
  coffeeMaker.on = false
  coffeeMaker.extraheat = false
  onStatus.textContent = coffeeMaker.on
  extraHeatStatus.textContent = coffeeMaker.extraheat
  returnObjectInHtml()
})

extraHeatOnButton.addEventListener("click", function () {
coffeeMaker.turnOnHeat()
extraHeatStatus.textContent = coffeeMaker.extraheat
returnObjectInHtml()
})


let coffeeOnStatus = coffeeMaker.on
onStatus.textContent = coffeeMaker.on

returnObjectInHtml()