//number, string, symbol, undefined, null, bigint, boolean
//array, function, object

let num = 10
let str = 'nigger'
// let undefined = undefined
let nul = null
let big = 123n
let bool = true

const mark = ['eyes', 'hands', 'feet', 'teeth']

function show(name, height, age) {
  console.log(`Твое имя ${name}, твой ${height}, твой ${age}`)
}

show('Mark', 185, 15)

const bmw = {
  year: 2025,
  country: 'germany',
  horsepower: 354,
}

const phones = {
  iphone: {
    model: 'iphone 16 pro max',
    year: 2026,
    memory: '256 gb',
  },

  samsung: {
    model: 'galaxy 26',
    year: 2026,
    memory: '256 gb',
  },

  google: {
    model: 'pixel 9 pro max',
    year: 2026,
    memory: '256 gb',
  },
}

console.log(phones.google.model)

function sum(a, b) {
  console.log(a + b + 2)
}

sum(235263276453, 276385352436)
sum(23, 54)

function changeData(data, keys, year, memory) {
  data[keys].year = year
  data[keys].memory = memory
}

changeData(phones, 'samsung', 2025, 512)
console.log(phones.samsung.memory)

const carsGerman = {
  bmw: {
    model: 'm5 ',
    year: 2023,
    color: 'blue',
    electro: true,
  },

  audi: {
    model: 'rs 7',
    year: 2024,
    color: 'black',
    electro: false,
  },

  porsche: {
    model: 'carrera 911',
    year: 2023,
    color: 'red',
    electro: false,
  },
}

let carsJapan = {
  nissan: {
    model: 'skyline',
    year: 2002,
    color: 'blue and white',
    electro: false,
  },

  toyota: {
    model: 'camry',
    year: 2022,
    color: 'white',
    electro: true,
  },

  lexus: {
    model: 'rx 3',
    year: 2013,
    color: 'black',
    electro: false,
  },
}

function changeCarsData(carsData, keys, year, color, electro) {
  carsData[keys].year = year
  carsData[keys].color = color
  carsData[keys].electro = electro
}

console.log(carsGerman.audi.color)

changeCarsData(carsGerman, 'audi', 2025, 'red', true)
console.log(carsGerman.audi.color)

console.log(carsJapan.lexus.electro)

changeCarsData(carsJapan, 'lexus', 1844, 'black', true)
console.log(carsJapan.lexus.electro)

const carsData = [
  { model: 'audi', year: 2020, color: 'white' },
  { model: 'bmw', year: 2024, color: 'blue' },
  { model: 'mercedes', year: 2025, color: 'black' },
  { model: 'toyota', year: 2019, color: 'purple' },
]

console.log(carsData[0].model)
carsData[0].model = 'jeep'
console.log(carsData[0].model)

function changeCarsModel(data, name, i) {
  data[i].model = name
}

changeCarsModel(carsData, 'porsche', [2])
console.log(carsData[2].model)

const dataFriendsPhons = [{name: 'Mark', tel: '+375293023497',}, {name: 'Mama', tel: '+375292887143',}, {name: 'Ales', tel: '+375295428709',}]

function showNamePhones(name, tel) {
let result = `Друг ${name}, его телефон ${tel}`
console.log(result)
}

showNamePhones(dataFriendsPhons[0].name, dataFriendsPhons[0].tel)
