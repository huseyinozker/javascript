/*const itemSnippet = '<div class="item" data-itemNum="{itemNumber}">{itemName}' +
'<div class="btnContainer"><button class="iconBtn editBtn"><i class="fa fa-edit"></i></button>' +
  '<button class="iconBtn removeBtn"><i class="fa fa-trash"></i></button></div>'*/
const itemContent = '<span class="itemCounter"></span><div class="btnContainer"><button class="iconBtn editBtn"><i class="fa fa-edit"></i></button>' +
  '<button class="iconBtn removeBtn"><i class="fa fa-trash"></i></button>'

const submitBtn = document.querySelector('.submitBtn');
const inputText = document.querySelector('.textInput');
const itemContainer = document.querySelector('.itemContainer');
const messageContainer = document.getElementById('messageContainer');


var items =[];
var itemAmounts = [];
window.onload = function(){
    //localStorage.clear();
    items = getItems();
    itemAmounts = getItemAmounts();
    displayItems();
}
submitBtn.addEventListener("click",function(){
    var itemName = inputText.value.toString();
    if(itemName != ""){
        if(!items.includes(itemName)){
            addNewItem(itemName);
        }else{
            increaseItem(itemName);
        }
        clearInput();
    }
})

function storageItems(){
    localStorage.setItem("items",JSON.stringify(items));
    localStorage.setItem("itemAmounts",JSON.stringify(itemAmounts));
}
function getItems(){
    return JSON.parse(localStorage.getItem("items")) || [];
}
function getItemAmounts(){
    if(JSON.parse(localStorage.getItem("itemAmounts"))!=null)
        return JSON.parse(localStorage.getItem("itemAmounts"));
    else{
        var a = [];
        for(var i=0;i<items.length;i++){
            a.push(0);
        }
        return a;
    }
}
function addNewItem(itemName){
    items.push(itemName);
    storageItems();
    createItem(itemName);
    itemAmounts.push(1);
    displayMessage("added",itemName);
}
function increaseItem(itemName){
    var i = items.indexOf(itemName);
    itemAmounts[i] +=1;
    var idString = "item" + i.toString();
    document.getElementById(idString).children[0].innerHTML = itemAmounts[i];
    displayMessage("added +1",itemName);
    storageItems();
}
function decreaseItem(index){
    itemAmounts[index] -=1;
    var idString = "item" + index.toString();
    document.getElementById(idString).children[0].innerHTML = itemAmounts[index];
    displayMessage("removed -1",items[index]);
    storageItems();
}
function createItem(itemName){
    var newItem = document.createElement("div");
    newItem.classList.add("item");
    newItem.setAttribute("data-itemnum",items.length-1);
    var idString = "item" + (items.length-1).toString();
    newItem.id = idString;
    newItem.innerHTML += itemName;
    newItem.innerHTML += itemContent;
    itemContainer.insertAdjacentElement("beforeend",newItem);
    
    var removeBtn = newItem.children[1].children[1];
    removeBtn.addEventListener("click",function(){
        removeItem(newItem.getAttribute("data-itemnum"));
    })   
}
function removeItem(index){
    if(itemAmounts[index] <=1){
        var idString = "item" + index.toString();
        document.getElementById(idString).remove();
        items.splice(index,1);
    }else{
        decreaseItem(index);
    }
    storageItems();
    displayMessage("removed",items[index]);
}
function displayItems(){
    for(var i=0;i<items.length;i++){
        createItem(items[i]);
        var idString = "item" + i.toString();
        document.getElementById(idString).children[0].innerHTML = itemAmounts[i];
    }
}
function clearInput(){
    inputText.value = "";
}
function displayMessage(str,itemName){
    messageContainer.style.visibility= "visible";
    messageContainer.innerHTML = itemName + " " + str; 
    var myVar = window.setTimeout(hideMessage,2000);
}
function hideMessage(){
    messageContainer.style.visibility= "hidden";
}