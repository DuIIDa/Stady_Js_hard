let btnstart = document.querySelector('#start');
let btnpause = document.querySelector('#pause');
let btnreset = document.querySelector('#reset');
let blockAnim = document.querySelector('.anim');
let count = 0;
let id;

const startAmine = () => {
    id = requestAnimationFrame(startAmine);
    if(count < 1000){
        count +=2;
        blockAnim.style.left = `${count}px`;
    } else if(count > 1000){
 
        count-=2;
        blockAnim.style.left = `${count}px`;
    }
    
};

btnstart.addEventListener('click', () =>{

    id = requestAnimationFrame(startAmine,50);

    btnstart.style.display = 'none';
    btnpause.style.display = 'block';
});

btnpause.addEventListener('click', () =>{
    cancelAnimationFrame(id);
    btnpause.style.display = 'none';
    btnstart.style.display = 'block';
});

btnreset.addEventListener('click', () =>{
    count = 0;
    blockAnim.style.left = `${count}px`;
    btnpause.style.display = 'none';
    btnstart.style.display = 'block';
});