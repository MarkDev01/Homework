const cars = [
  { owner: 'Mark', model: 'Porsche' },
  { owner: 'Dima', model: 'Audi' },
  { owner: 'Ales', model: 'Volkswagen' },
  { owner: 'Andre', model: 'Toyota' },
  { owner: 'Sasha', model: 'Volkswagen' },
]

function car(obj, owner, i) {
  let find = obj[i]
  console.log(find)
  console.log(`Владелец ${find.owner}, его машина ${find.model}`)
}

car(cars, 'Mark', 0)

const books = [
  { author: 'Mark Twain', bookName: 'White Fang' },
  { author: 'Pushkin', bookName: 'A hero of our time' },
  { author: 'Isaac Asimov', bookName: 'bicentennial man' },
]

function showBooks(obj, key) {
  for (let i = 0; i <= 2; i++) {
    let book = obj[i]
    console.log(book)
    console.log(book[key])
  }
}
showBooks(books, 'author')

let classmates = ['Roma', 'Kirill', 'Vanya', 'Sasha', 'Maksim']

function showClassmates(obj) {
  for (let i = 0; i <= 4; i++) {
    let classmate = obj[i]
    console.log(classmate)
  }
}
showClassmates(classmates)

function showClassmates2(obj) {
  let i = 0
  while (i <= 4) {
    let classmate = obj[i]
    console.log(classmate)
    i++
  }
}

showClassmates2(classmates)

let animals = ['tiger', 'lion', 'elephant', 'panda', 'rabbit', 'puma', 'whale']
for (let i = 0; i < animals.length; i++) {
  console.log(animals[i])
}

function sumFrom1To100() {
  let total = 0

  for (let i = 1; i <= 100; i++) {
    total += i
  }
  return total
}

console.log(sumFrom1To100())

function sumFrom52To102() {
  let total = 0
  let i = 52
  while (i <= 102) {
    total += i
    console.log(i)
    i++
  }
  return total
}

console.log(sumFrom52To102())

function sumFrom2To10() {
  let total = 0
  let i = 2
  do {
    console.log(i)
    total += i
    i++
  } while (i <= 10)
  return total
}

console.log('SUM', sumFrom2To10())
