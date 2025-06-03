function greet(name) {
  console.log(`Привет, ${name}! Как твои дела?`)
}

greet('Mark')

function sum(a, b) {
  return a + b
}

let result = sum(5, 10)
alert(result)

function isEven(num) {
  if (num % 2 === 0) {
    return true
  }
  return false
}
console.log(isEven(3))
console.log(isEven(6))

function getValue(obj, key) {
  return obj[key]
}

// Пример использования
const person = {
  name: 'Иван',
  age: 25,
  city: 'Москва',
}
console.log(person)
getValue(person, 'name')
getValue(person, 'age')
getValue(person, 'city')

const cat = {
  name: 'Барсик',
  age: 3,
  color: 'рыжий',
}

console.log(`У меня есть кот ${cat.name}, ему ${cat.age} лет, он ${cat.color}.`)

cat.age = 10

console.log(`У меня есть кот ${cat.name}, ему ${cat.age} лет, он ${cat.color}.`) //8

let fruits = ['banana', 'apple', 'orange', 'coconut', 'watermelon']
console.log(fruits[1])

function life(city, country) {
  console.log(`Я живу в ${city}, это город в ${country}.`)
}

life('Москва', 'Россия')

let isSunny = true
// console.log('Сейчас солнечно? ' + (isSunny ? 'Да' : 'Нет'))
console.log(`Сейчас солнечно? ${isSunny}`)

let name = prompt('Как твое имя?')

alert(`Привет, ${name} `) // Тебе 100 лет!

// Создаем объект book
let book = {
  title: 'Неизвестное название',
  author: 'Неизвестный автор',
}

console.log(`Книга: ${book.title}, автор — ${book.author}.`)

book.title = prompt('Введите название вашей любимой книги:')

console.log(`Книга: ${book.title}, автор — ${book.author}.`)
