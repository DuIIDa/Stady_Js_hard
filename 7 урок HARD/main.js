"use strict"

let week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let day = new Date();
let dayTamp = 0;
console.log('day: ', day.getDay());
if(dayTamp >= 1){
    dayTamp-=1;
} else if(dayTamp === 0){
    dayTamp = 6;
}


week.forEach((item, i , array) => {
    if(i === dayTamp){
        if(i === 5 || i === 6){
            document.write(`<h4>${item.italics()}\n</h4>`);
        }else{
            document.write(`<h4>${item}\n</h4>`);  
        }  
    } else if(i === 5 || i === 6) {
        document.write(`<p>${item.italics()}\n</p>`); 
    } else {
        document.write(`<p>${item}\n</p>`);  
    }
    
});