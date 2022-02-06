// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Adrian Mitre" // HINT: Replace this with your own name!



// selecting the element with an id of credit
const credit = document.querySelector('#credit')


// Code to update name display
credit.textContent = `Created by ${'ADRIAN MITRE'}`



// update quantity gb button
let gb = 0
let total = 0

function updateGb(displayTotal){
  let quantity = document.querySelector('#qty-gb')
  quantity.innerHTML = displayTotal
} 

const gbPlusBtn = document.querySelector('#add-gb')
const gbMinusBtn = document.querySelector('#minus-gb')
gbPlusBtn.addEventListener('click', function() {
  gb++
  total++
  updateTotal(`${total}`)
  updateGb(`${gb}`)

})
gbMinusBtn.addEventListener('click', function() {
  if (gb > 0) {
  gb--
  total--
  }
updateTotal(`${total}`)
updateGb(`${gb}`)

})


// update quantity cc button
let cc = 0

function updateCc(displayTotal){
  let quantity = document.querySelector('#qty-cc')
  quantity.innerHTML = displayTotal
} 

const ccPlusBtn = document.querySelector('#add-cc')
const ccMinusBtn = document.querySelector('#minus-cc')
ccPlusBtn.addEventListener('click', function() {
  cc++
  total++
  updateTotal = (`${total}`)
  updateCc = (`${cc}`)

})
ccMinusBtn.addEventListener('click', function() {
  if (cc > 0) {
  cc--
  total--
  }
updateTotal = (`${total}`)
updateCc = (`${cc}`)

})


// update quantity Sugar button
let sugar = 0

function updateSugar(displayTotal){
  let quantity = document.querySelector('#qty-sugar')
  quantity.innerHTML = displayTotal
} 

const SugarPlusBtn = document.querySelector('#add-sugar')
const SugarMinusBtn = document.querySelector('#minus-sugar')
SugarPlusBtn.addEventListener('click', function() {
  sugar++
  total++
  updateTotal = (`${total}`)
  updateSugar = (`${sugar}`)

})
SugarMinusBtn.addEventListener('click', function() {
  if (sugar > 0) {
  sugar--
  total--
  }
updateTotal = (`${total}`)
updateSugar = (`${sugar}`)

})


// update quantity Total button
let sugar = 0

function updateTotal(displayTotal){
  let quantity = document.querySelector('#qty-total')
  quantity.innerHTML = displayTotal
} 

const TotalPlusBtn = document.querySelector('#add-total')
const TotalMinusBtn = document.querySelector('#minus-total')
TotalPlusBtn.addEventListener('click', function() {
  total++
  total++
  updateTotal = (`${total}`)
  updateTotal = (`${total}`)

})
SugarMinusBtn.addEventListener('click', function() {
  if (total > 0) {
  total--
  total--
  }
updateTotal = (`${total}`)
updateSugar = (`${total}`)

})

