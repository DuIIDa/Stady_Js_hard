"use strict" 

let lang;
let rezDay;
let namePerson;
let position;
let days = [
    ['Понедельник', 'вторник', 'среда', 'четврг', 'пятница', 'суббота', 'воскресенье'],
    ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
]

while(lang !== 'ru' && lang !== 'en') {
    lang  = prompt('Введите ru или en');
}

console.log('IF');
if(lang === 'ru') {
    console.log('Понедельник, вторник, среда, четврг, пятница, суббота, воскресенье');
} else {
    console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
}

console.log('swich/case');
switch(lang){
    case 'ru': {
        console.log('Понедельник, вторник, среда, четврг, пятница, суббота, воскресенье');
    }break;
    case 'en': {
        console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
    }break;
}
console.log('Многомерный массив + тернарный оператор');
rezDay =  lang === 'ru' ? 0 : 1;
console.log('days: ', days[rezDay]);

namePerson = prompt('Введите имя');
position = namePerson === 'Артем' ? 'Директор' : namePerson === 'Максим' ? 'Преподаватель': 'Студент';
console.log('position: ', position);
