let date = new Date;

const weekDay = () => {
    let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    let day = date.getDay();
    return days[day];
};

const correntMonth = () => {
    let months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая',
        'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'
    ];
    let month = date.getMonth();

    return months[month];
};

const correntHours = (value) => {
    let masHours = ['Час', 'Часов', 'Часа']
    if (value === 1 || value === 21) {
        return masHours[0];
    } else if ((value > 1 && value < 5) || value > 21) {
        return masHours[2];
    } else {
        return date.getHours() + ' ' + masHours[1];
    }
};

const formatB = (value) => {
    if(value<10){
        return '0' + value;
    }
    return value;
};

setInterval(() => {
    date = new Date;
    document.getElementById("Fulltime").innerHTML = ('Сегодня ' + weekDay() + ', ' + date.getDate() + ' ' + correntMonth() +
        " " + date.getFullYear() + ' Года' + ', ' + correntHours(date.getHours()) + ' ' +
        date.getMinutes() + ' Минут' + ' ' + date.getSeconds() +

        ' Cекунд');

    document.getElementById("time").innerHTML = ('\n' + formatB(date.getDate()) + '.' + formatB(date.getMonth()) +
        ' ' + date.getFullYear() + ' - ' + formatB(date.getHours()) + ':' +
        formatB(date.getMinutes()) + ':' + formatB(date.getSeconds()));

}, 1000);



