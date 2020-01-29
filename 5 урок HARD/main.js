let arr = [];
let temp = 0;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

for (let i = 0; i < 7; i++) {
     arr[i] = String(getRandomInt(100, 9999));
     if(arr[i][0] ==='2'|| arr[i][0] ==='4') {
         console.log('arr[i]: ', arr[i]);
         temp++;
     } 
}

if(temp === 0) {
    console.log('Таких чисел не найдено!');
}

temp = 0;

for (let i = 0; i < 100; i++) {
    for (let g = 1; g <= i; g++) {
          if(i%g === 0){
              temp++;
          }   
    }
    if(temp === 2){
        console.log('i = ' + i);
    }
    temp = 0;
}
