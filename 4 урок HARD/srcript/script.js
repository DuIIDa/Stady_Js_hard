"use strict"

let checkString = (data) => {
    console.log('data: ', typeof data);

    if (typeof data !== typeof '') {
        alert("Переданный параметр не является строкой");
    } else {
        data = data.trim();
        if (data.length > 30){
            alert(data.slice(0,30) + '...');
        }
    }
};

checkString('Меня зовут Дмитрий и я прохожу курсы от GloAcademy по JavaScript!');

