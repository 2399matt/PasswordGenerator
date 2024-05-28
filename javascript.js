const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
"U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s",
"t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#",
"$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let passOneEl = document.getElementById("passOne");
let passTwoEl = document.getElementById("passTwo");
let PassLengthEl = document.getElementById("form");
let questionEl = document.getElementById("length");
let buttonEl = document.getElementById("ask");
let specificLength = false;
PassLengthEl.hidden=true;
questionEl.hidden=true;
function generatePassword(){
    
    if(specificLength === true){
        let passwordOne = "";
        let passwordTwo = "";

        for(let i = 0;i<PassLengthEl.value;i++){
            let randomNumber = Math.floor(Math.random()*characters.length);
            passwordOne += characters[randomNumber];
        }
        for(let i = 0;i<PassLengthEl.value;i++){
            let randomNumber = Math.floor(Math.random()*characters.length);
            passwordTwo += characters[randomNumber];
        }
        passOneEl.textContent = passwordOne;
        passTwoEl.textContent = passwordTwo;
        console.log(PassLengthEl.value)
    }
    else{
        let passwordOne = "";
        let passwordTwo = "";

        for(let i = 0;i<15;i++){
            let randomNumber = Math.floor(Math.random()*characters.length);
            passwordOne += characters[randomNumber];
        }
        for(let i = 0;i<15;i++){
            let randomNumber = Math.floor(Math.random()*characters.length);
            passwordTwo += characters[randomNumber];
        }
        passOneEl.textContent = passwordOne;
        passTwoEl.textContent = passwordTwo;
        console.log(PassLengthEl.value)
    }
}
function uncover(){
    buttonEl.hidden=true;
    PassLengthEl.hidden=false;
    questionEl.hidden=false;
    specificLength = true;
}