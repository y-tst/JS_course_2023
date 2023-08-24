// ================ Operators ======================

// let a = 10
// let b = 5
// let c = 32

// c = c * 2
// c += a
// c *=a
// c = 4 ** 2 //zvedennya v stupin'

// console.log(c)

// const name = 'Yurii'

// console.log(typeof name)

// // >= <=

// const num1 = 42
// const num2 = '42'

// console.log(num1 == num2)
// console.log(num1 === num2)


/* Tascs:

1.
var a = 5
let b = 10
const c = 13

console.log('a = ', a,' b =', b, ' c = ', c)

a = b + c
b = c + 3

console.log('a = ', a,' b =', b, ' c = ', c)

2.
console.log(a);
var a;
a = 10;
console.log(a);

3.
let productName = 'Ball'
let productPrice  = 100
let productQuantity  = 3

function resultCost() {
  return Number(productPrice * productQuantity)
}

console.log('Вы купили: ', productName, '-', productQuantity, 'шт.,', 'по', productPrice, '₽. Всего было потрачено:', resultCost(), '₽')

4.
console.log(typeof 'Hello')
console.log(typeof 10)
console.log(typeof {})
console.log(typeof null)
console.log(typeof undefined)
console.log(typeof true)
console.log(typeof [])
console.log(typeof (() => {}))

    typeof 'Hello': This will return 'string', as it's a string literal.
    typeof 10: This will return 'number', as it's a numerical value.
    typeof {}: This will return 'object', as it's an empty object.
    typeof null: This is a bit of an exception and a quirk in JavaScript. It will return 'object', but null is actually a primitive value.
    typeof undefined: This will return 'undefined', as it's an undefined value.
    typeof true: This will return 'boolean', as it's a boolean value.
    typeof []: This will return 'object', as arrays are a type of object in JavaScript.
    typeof (() => {}): This will return 'function', as it's an anonymous function.

5. 
console.log(10 == 10)
console.log(10 != 10)
console.log(12 == 'Привет')
console.log(10 < 11)
console.log(12 > 20)
console.log(true && true)
console.log(true && false)
console.log(false && true)
console.log(false || true)
console.log(true || false)
console.log(true || true)
console.log(10 <= 10)
console.log(18 <= 20)
console.log(50 >= 50)
console.log(51 >= 50)
console.log({} === {}) - false  When you use the strict equality operator (===),
                                JavaScript checks whether the two objects being compared are the exact same object in memory.
                                In this case, two separate empty object literals are being created, so they occupy different memory locations, resulting in false.
console.log({} == {})  - false  , but for a different reason. The equality operator (==) performs type coercion,
                                which means it tries to convert operands to the same type before comparing. However, for objects, the comparison is based on reference, not value. Since these two empty object literals are distinct objects in memory, they are not equal even after type coercion.

6. 
let a = 20
let b = 10

console.log(a > b)

2.1


*/

let a = 554
console.log(a % 2 === 0 ? 'Even' : 'Odd')
