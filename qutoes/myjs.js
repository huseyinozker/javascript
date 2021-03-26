var leftBtn = document.getElementById('leftBtn');
var rightBtn = document.getElementById('rightBtn');
var surpriseBtn = document.getElementById('surpriseBtn');
var currentIndex = 0;
window.onload = function(){
    sendRequest();
}
leftBtn.addEventListener("click",function(){
    if(currentIndex>0)
        currentIndex--;
    else if(currentIndex==0)
        currentIndex=3;
    sendRequest();
})
rightBtn.addEventListener("click",function(){
    if(currentIndex<3)
        currentIndex++;
    else if(currentIndex==3)
        currentIndex=0;
    sendRequest();
})
surpriseBtn.addEventListener("click",function(){
    surprise();
})
function surprise(){
    currentIndex = Math.floor(Math.random()*4);
    sendRequest();
}
function displayQuote(data,index){
    var personName = document.getElementById("person");
    var job = document.getElementById('job');
    var quote = document.getElementById('quote');
    var img = document.getElementById('imgCircle');
    console.log(data + " sadasd");
    personName.innerHTML = data[index].name;
    job.innerHTML = data[index].job;
    quote.innerHTML = data[index].quote;
    img.style.backgroundImage = "url(" + (data[index].img) + ")";
}
function sendRequest(){
    var myRequest = new XMLHttpRequest();
    myRequest.open('GET','data.json');
    myRequest.onload = function(){
        data = JSON.parse(myRequest.responseText);
        displayQuote(data,currentIndex);
    }
    myRequest.send();
}