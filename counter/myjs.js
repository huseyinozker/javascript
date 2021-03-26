var counterText = document.getElementById('counterTxt');
var decreaseBtn = document.getElementById('decreaseBtn');
var resetBtn= document.getElementById('resetBtn');
var increaseBtn = document.getElementById('increaseBtn');

var counter = 0;

function increase(){
    counter++;
    updateCounter();
}
function reset(){
    counter=0;
    updateCounter();
}
function decrease(){
    counter--;
    updateCounter();
}
function updateCounter(){
    if(counter>0)
        changeColor('green');
    else if(counter<0)
        changeColor('red');
    else
        changeColor('black');
    counterText.innerHTML = counter;
    counterText.i
}
function changeColor(name){
    counterText.style.color = name;
}
decreaseBtn.addEventListener("click",decrease);
increaseBtn.addEventListener("click",increase);
resetBtn.addEventListener("click",reset);
