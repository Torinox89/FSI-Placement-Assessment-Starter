// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Jane Doe" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle

// selecting the element with an id of credit
const credit = document.querySelector('#credit')


// Code to update name display
credit.textContent = `Created by ${'ADRIAN MITRE'}`

// selecting the element with an id of gb minus:buttons
const gbMinusBtn = document.querySelector('#minus-gb')
gbMinusBtn.addEventListener('click', function() {
console.log('Gingerbread - button was clicked!')
})
 
/// selecting the element with an id of gb plus:buttons
const gbPlusBtn = document.querySelector('#add-gb')
gbPlusBtn.addEventListener('click', function() {
console.log('Gingerbread + button was clicked!')

})

// selecting the element with an id of cc minus:buttons
const ccMinusBtn = document.querySelector('#minus-cc')
ccMinusBtn.addEventListener('click', function() {
console.log('Chocolate Chip - button was clicked!')
})

// selecting the element with an id of cc plus:buttons
const ccPlusBtn = document.querySelector('#add-cc')
ccPlusBtn.addEventListener('click', function() {
console.log('Chocolate Chip + button was clicked!')
})

// selecting the element with an id of sugar minus:buttons
const sugarMinusBtn = document.querySelector('#minus-sugar')
sugarMinusBtn.addEventListener('click', function() {
console.log('Sugar - button was clicked!')
})

// selecting the element with an id of sugar plus:buttons
const sugarPlusBtn = document.querySelector('#add-sugar')
sugarPlusBtn.addEventListener('click', function() {
console.log('Sugar + button was clicked!')
})



