let a = true
let b = 'world'
let c = 1
let d = [1, 2, 3, 4, 5]
let book = 'physics'
console.log(book)

const windows = 10
console.log(windows)

const boolean = true
console.log(boolean)

let object = {
  age: '12',
  name: ' Mark',
  country: 'USA',
}

let leBron = {
  firstName: 'LeBron',
  secondName: 'James',
  country: 'USA',
  year: 1985,
  height: 206,
}

console.log(leBron)
console.log(leBron.firstName)
console.log(leBron.country)

console.log(typeof leBron)

let colors = ['blue', 'red', 'green']
let toВoList = ['gum', 'sleep', 'JS', 'eat', 'drink', 'basketball']
console.log(toВoList)
console.log(toВoList[5])
toВoList = 20
console.log(toВoList)

function sayHello(name) {
  console.log(`Hello, ${name}`)
}
sayHello(leBron.firstName)
sayHello(leBron.secondName)
sayHello(b)
sayHello('Mark')

function sum(a, b) {
  console.log(a + b)
  console.log(5 + 6)
}
sum(5, 7)
sum(5, 34)
sum(23, 24)

function sayHello2(firstName, secondName) {
  console.log(`Hello, ${firstName} ${secondName}`)
}

sayHello2('Mark', 'Komissarchuk')
sayHello2('Dima', 'Sashcheka')
sayHello2('Nadia', 'Komissarchuk')

function multiplication(a, b) {
  console.log(a * b)
  let sum = a + b
  let mult = sum * a * b
  console.log(mult)
}

multiplication(4, 3)
multiplication(7, 8)
multiplication(9, 6)

let message = `Привет
Медведь
Ты очень красивый`

console.log(message)