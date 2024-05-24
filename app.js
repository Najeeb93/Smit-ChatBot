
var chatMsg = document.getElementById("chatMsg");
var userMsg = document.getElementById("userMsg");


function sendMessage(event){
    if(event.keyCode === 13){
    var elem = event.target;
     var message = elem.value.trim();

      userMsg.innerHTML += `<div class = "my-chat">  ${message}</div> `
      if(['hi', 'hey', 'hello', 'hy',  'salam', 'assalam-0-alikum', 'assalam o alikum'].indexOf(elem.value) !== -1){
        setTimeout(function() {
            chatMsg.innerHTML += '<div class ="client-chat" > Hello </div>' 
        }, 2000);
      }
    
      
      event.target.value = ""  
    }
}