var generateBtn = document.getElementById('colorBtn');


function generateColor(){
    var color ='#';
    var letters = '0123456789ABCDEF';
    for(var i=0;i<6;i++){
        color +=letters[Math.floor(Math.random()*16)];
    }
    document.getElementById('hexCode').innerHTML = color;
    document.body.style.backgroundColor = color;
    return color;
}
generateBtn.addEventListener("click",generateColor);
