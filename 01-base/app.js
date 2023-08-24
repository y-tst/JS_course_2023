let num = 42
let firstName = 'Yurii'
const isProgrammer = true

/* can do:

 let $ = 'test'
 let $num = 25
 let num$ = 33
 let _ = 33
 let _num = 33
 let num_ = 33
 let first_name = 'Elena'
 let fName = 'Elena' 
*/

firstName = 'Lux'

// alert(firstName)

/* console.log('Test:', firstName)

console.log(num + 2)
console.log(num - 2)
console.log(num * 2)
console.log(num / 10)
console.log(num)

let num2 = num + 10
console.log(num, num2)
*/

const resultElement = document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const submitBtn = document.getElementById('submit')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
const multiplicationBtn = document.getElementById('multiplication')
const divisionBtn = document.getElementById('division')
let action = '+'

// console.log(resultElement)
// console.log(resultElement.textContent)
// console.log(input1.value - input2.value)

// console.log(resultElement.textContent)

// console.log(typeof sum)

/* My variant (work as well)

plusBtn.onclick = function () {
  submitBtn.onclick = function () {
    const sum = Number(input1.value) + Number(input2.value)
    resultElement.textContent = sum
  }
}

minusBtn.onclick = function () {
  submitBtn.onclick = function () {
    const substraction = Number(input1.value) - Number(input2.value)
    resultElement.textContent = substraction
  }
}
*/

plusBtn.onclick = function () {
  action = '+'
}

minusBtn.onclick = function () {
  action = '-'
}

multiplicationBtn.onclick = function () {
  action = '*'
}

divisionBtn.onclick = function () {
  action = '/'
}

function printResult(result) {
  if (result < 0) {
    resultElement.style.color = 'red'
  } else {
    resultElement.style.color = 'green'
  }
  resultElement.textContent = result
}

function computeNumbersWithAction(inp1, inp2, actionSymbol) {
  const num1 = Number(inp1.value)
  const num2 = Number(inp2.value)

  return actionSymbol == '+' ? num1 + num2 : (actionSymbol == '-' ? num1 - num2 : (actionSymbol == '*' ? num1 * num2 : num1 / num2))

  /* return actionSymbol == '+' ? num1 + num2 : num1 - num2    <- ternary function for + and - buttons only

            alternative: 

   if (actionSymbol == '+') {
     return num1 + num2
   } else if (actionSymbol == '-') {
     return num1 - num2
   }
   */
}

submitBtn.onclick = function () {
  const result = computeNumbersWithAction(input1, input2, action)
  printResult(result)
}




