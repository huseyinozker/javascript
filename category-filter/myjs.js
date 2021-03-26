const filterBtns = document.querySelectorAll(".filterBtn");
var bookContainer = document.getElementById('bookContainer');
const htmlstring = "<div class='bookDiv'><div class='bookImg' style='background-image: url({img});'></div>" +
"<div class='bookDetail'>" +
  "<p class='bookName'>{name}</p>" +
  "<hr class='bookLine'>" + 
  "<p class='author'>{author}</p>" +
  "<p class='details'>{details}</p></div></div>";

filterBtns.forEach(function(btn){
    btn.addEventListener("click",function(e){
        console.log(e.currentTarget.id);
        sendRequest(e.currentTarget.id)
    })
});
function sendRequest(categoryName){
    var myRequest = new XMLHttpRequest();
    myRequest.open('GET','data.json');
    myRequest.onload = function(){
        var myData = JSON.parse(myRequest.responseText);
        updateBooks(categoryName,myData);
    }
    myRequest.send();
}
function updateBooks(categoryName,arr){
    bookContainer.innerHTML="";
    console.log(arr);
    for(i=0;i<arr.length;i++){
        if(arr[i].category==categoryName || categoryName=="all"){
            var bookDiv = htmlstring;
            bookDiv = bookDiv.replace("{name}",arr[i].name);
            bookDiv = bookDiv.replace("{author}",arr[i].author);
            bookDiv = bookDiv.replace("{details}",arr[i].details);
            bookDiv = bookDiv.replace("{img}",arr[i].cover);
            bookContainer.innerHTML +=bookDiv;
        }
    }
    updateCovers(arr);
}
function updateCovers(){
    var books = document.getElementsByClassName("bookDiv");
    for(i=0;i<books.length;i++){
        books[i].sty
    }
}
window.onload = function(){
    sendRequest("all");
}