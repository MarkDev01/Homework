let schoolsSubjects = {
  math: 5,
  english: 3,
  literature: 1,
  language: 2,
}

let schoolsSubjectArray = ['math', 'english', 'literature', 'language']

let mark = {
  name: 'Mark',
  age: 2009,
  hair: 'blond',
  colorEyes: 'green',
  countEyes: 2,
  countEars: 2,
  isMember: true,
  isBold: false,
  height: 184,
  footSize: 43,
}


let markArray = ['Mark', 2009, 'blond', 'green']


let basketball = ['ball', 'court', 'players', 'coach', 24, true]

let beaver = {
  color: 'brown',
  teeth: true,
  tail: true,
  isMarried: false,
  size: 'small',
  gender: 'male',
  years: 5, 
}

let animals = ['rabbit', 'tiger', 'elephant', 'capybara']

let sportsEquipment = ['balls', 'sneakers', 'skis', 'skates' ]

let phones = {
  iphone: animals,
  samsung: {
    model: 'galaxy s24',
    color: 'black',
    memory: 256,
    years: 2024,
  },

  google: {
    model: 'pixel 9',
    color: 'green',
    memory: 256,
    years: 2025,
  }
}

console.log(phones.iphone[0])

let food = ['pizza', 'meet', 'salt', 'vegetables']

let show = {
  message1: {
title: 'Кури бамбук',
text: 'Курить бамбук вредно, убивает здоровье'
  },
  message2: {
    title: 'Иди лесом',
    text: 'Ходить лесом опасно, можно заблудиться'
      },
}
console.log(show.message1.title)
console.log(show.message2.text)
// объявление имя = значение

function showMessage(title,text){
console.log(`Пожелание ${title}, и совет ${text}`)
}
showMessage(show.message1.title, show.message1.text)
showMessage(show.message2.title, show.message2.text)
showMessage('лучшему другу', 'учи дз')
showMessage(food[0], food[3])

function showJoke(title, text, joke) {
console.log(`Расскажи ${title}, вопрос ${text}, конец ${joke}`)
}

showJoke('дорого', 'я у тебя на нулевом месте?', 'нет, там мама')