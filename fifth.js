let a = false
console.log(a)

const car = {
  color: 'red',
  year: 2009,
}

const music = [1, 2, 3, 4, 5]

const w = [true, 'mark', 23, 231375793668, null, undefined]

function summa(r, t) {
  let summa = t + r * 2
  console.log(summa)
}

summa(328364, 94740)
summa(4948754765, 9486373976)

// function showMessage() {
//   alert('Всем привет')
// }
// showMessage()

function study() {
  let subject = 'English'
  console.log(subject)
}

// console.log(subject)
study()

// let userName = 'Vasa'
// function showMessages() {
//   userName = 'Petya'
//   let messages = 'Привет ' + userName
//   alert(messages)
// }

// alert(userName)

// showMessages()
// alert(userName)

let namePlayer = 'leBron'
let points = 50000
let team = 'Los-Angeles Lakers'
function basketballMens(namePlayer, points, team) {
  let congratulations = `Привет, ${namePlayer}, вы набрали ${points} очков, в команде ${team}!`
  console.log(congratulations)
}

basketballMens(namePlayer, points, team)
basketballMens('Mark', 80000, 'Minsk')

function sum(a, b) {
  a + b
  // return a + b
}

let result = sum(98, 657)
// console.log(sum(5, 3))
console.log(result)

function mult(a, b) {
  console.log('Привет из подвала')
  return a * b + 2
}

let result2 = mult(56, 857)
console.log(result2)

// alert('Mark')
// let answer = prompt('Как у вас дела?', 'Хорошо')
// console.log(answer)

let answer2 = prompt('Сколько вам лет?', '18')
if (Number(answer2) >= 18) {
  alert('Вы уже взрослый')
} else {
  alert('Покиньте сайт')
}
console.log(answer2)

// prompt('Как у вас дела?', 'Хорошо')

let isBoss = confirm('Ты здесь главный?')
alert(isBoss)
