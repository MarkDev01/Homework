let color = 'color'

let car = {
  name: 'BMW',
  year: 2022,
  country: 'Germany',
  fuel_electric: true,
  color: 'black',
}

console.log(car)

// alert(car.name)

let array = ['banana', 'coconut', 'mango']
console.log(array)

// alert(array[1])

console.log(car['name'])
console.log(car['fuel_electric'])
console.log(car[color])

let fuelCountry = car.country
console.log(fuelCountry)

let fruits = ['banana', 'apple', 'oranges']
console.log(fruits[2])

let banana = fruits[1]
let apple = fruits[2]

let music = {
  name: 'Beat it',
  genre: 'pop',
  author: 'MJ',
  isPlaylist: true,
}

let trackName = music.name
console.log(trackName)

console.log(`В плейлисте:`, music.isPlaylist)
console.log(`Жанр:`, music.genre)

let performer = 'author'
console.log(`Автор музыки:`, music[performer])

let books = {
  amount: '500 pages',
  writer: 'Mark Tven',
  name: 'white fang',
  color_book: 'white',
  b123_4: true,
}

console.log(`Количество страниц:`, books.amount)
console.log(`Цвет книги:`, books['color_book'])
console.log(`Символы страницы:`, books['b123_4'])

let numbers = [7, 23, 16, 999, 82, 2009]
console.log(`Наибольшее число:`, numbers[3])

function showLeastFavoriteNumber() {
  console.log(`Мое любимое наименьшее число:`, numbers[0])
}
showLeastFavoriteNumber()

function showSumMyFavoriteNumbers() {
  // let minNumber = numbers[0]
  // let maxNumber = numbers[3]
  // let sum = maxNumber + minNumber
  let sum = numbers[0] + numbers[3]
  console.log(`Сумма моих любимых числе:`, sum)
}

showSumMyFavoriteNumbers()

function showSumMyFavoriteNumbersModify() {
  let minNumber = Math.min(...numbers)
  let maxNumber = Math.max(...numbers)
  let sum = maxNumber + minNumber
  console.log(`Сумма моих любимых числе:`, sum)
}
showSumMyFavoriteNumbersModify()

if (true === confirm('Тебе есть 18?')) {
  console.log('Доступ открыт')
} else {
  console.log('Родители разрешили?')
}
