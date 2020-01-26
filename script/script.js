let num = 266129;
let array;
let rez = 1;
let rezPow;

array = String(num).split("");

for(let i = 0; i < array.length; i++) {
    rez *= array[i];
}

console.log('rez: ', rez);
rez **= 3; 
console.log('rez: ', rez);
console.log('rez: ', String(rez).slice(-2));

