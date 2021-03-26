var navbar = document.getElementById("myNav");
var barBtn = document.getElementById("barBtn");
var linkList = document.getElementById("linkList");
barBtn.addEventListener("click",function(){
    if(navbar.className == "navbar"){
        navbar.className = "navbarResponse"
        linkList.className="linksResponse"
    }else{
        navbar.className = "navbar"
        linkList.className="links"
    }
})
