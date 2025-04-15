const birthYear = 1990
const currentYear = 2024
const age = currentYear - birthYear
console.log(currentYear - birthYear)

const fahrenheit = 77
const celsius = ((fahrenheit - 32) * 5) / 9
console.log(`${fahrenheit}°F = ${Math.round(celsius)}°C`)

const num = 7
console.log(num % 2 === 0)

const price = 15.789
console.log(Math.round(price))
console.log(price.toFixed(1))
console.log(price.toFixed(2))

const userName = 'Анна'
const userAge = 25
console.log('Меня зовут ' + userName + ', мне ' + userAge + ' лет.')

const a = 3
const b = 4
const c = Math.sqrt(a ** 2 + b ** 2)
console.log(c)

let d = 10
let f = 20
[d, f] = [f, d]
console.log(d, f)

console.log(15 % 4)
console.log(100 % 10 === 0)

const str1 = 'Hello'
const str2 = 'World'
console.log(str1 + ' ' + str2)

const prices = 1200
const discount = prices * 0.15
const finalPrice = prices - discount
console.log('Цена со скидкой: ' + finalPrice + ' руб.')
