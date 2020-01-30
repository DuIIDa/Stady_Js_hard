'use strict'

const isNumber = (n) => {
    return !isNaN(parseFloat(n)) && isFinite(n) && n > 0 && n <= 100;
};

const errorInput = (data) => {
    data = prompt('Введите число от 1 до 100!)');

    if(!data){
        return data;
    }

    return !isNumber(data) ? errorInput() : data;
};

const random = (max, min) => {
    return Math.floor(Math.random() * (max - min)) + min;
};

const game = () => {
    let gussedNumber = random(100, 1);

    let temp = 10;

    const gameProc = () => {
        let replay;
        let guessableNumber = prompt('Угадайте число от 1 до  100!)');
        if(!guessableNumber){
            alert('Досвидания!');
            return 0;
        }
        if(!isNumber(guessableNumber)){
            guessableNumber = errorInput();
            if(!guessableNumber){
                alert('Досвидания!');
                return 0;
            }
        }

        if(temp === 1) {
            replay = confirm('Попытки закончились, хотите попытаться еще?)');
            if(replay){
                temp = 10;
                game();
            }
        }else if(guessableNumber > gussedNumber) {
            temp--;
            alert('Загаданное число меньше! ' + 'Осталось '+ temp + ' попыток');
            gameProc();
        }else if(guessableNumber < gussedNumber) {
            temp--;
            alert('Загаданное число больше! ' + 'Осталось '+ temp + ' попыток');
            gameProc();
        }else {
            replay = confirm('Поздравляем, вы угодали число, хотите продолжить?!)))');
            if(replay){
                temp = 10;
                game();
            }
        }


    };
    
    gameProc();
    console.dir(gameProc);
};

game();