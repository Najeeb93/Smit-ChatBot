
var chatMsg = document.getElementById("chatMsg");
var userMsg = document.getElementById("userMsg");


function sendMessage(event){
    if(event.keyCode === 13){
    var elem = event.target;
    var message = elem.value.trim()
      userMsg.innerHTML += `<div class = "my-chat">  ${message}</div> `
      event.target.value = ""  
    }
}