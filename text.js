window.addEventListener('load',init);

//Level
const levels ={
    easy:5,
    medium:3,
    hard:1
}

//Globals
//const currentLevel = levels.medium;
let time= 0;   //time=currentLevel; //vrns khali time =5 or upar wali poori line ni likhenge
let score=0;
let isPlaying;

//DOM Elements
const wordInput=document.querySelector("#word-input");
const currentWord=document.querySelector("#current-word");
const scoreDisplay=document.querySelector("#score");
const timeDisplay=document.querySelector("#time");
const message=document.querySelector("#message");

// Array of words
const words=[
    'hat',
    'river',
    'lucky',
    'statue',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'definition'

];

//Initialize Game
function init(){
ShowWord(words);

//call countdown every second
setInterval(countdown,1000);

//check game status
setInterval(checkStatus,50);

//static matching on word input
wordInput.addEventListener('input',startMatch);

}

function startMatch(){
    if(matchWords()){
     //console.log("mahak");
        isPlaying=true;
        time=5; //time=currentLevel; //vrna khali time=5
        ShowWord(words); //random words
        wordInput.value=''
        score++;
    }
    if(score === -1){//agr time 0 hogya to score b 0 hona chaie
       scoreDisplay.innerHTML = 0;
    }

    scoreDisplay.innerHTML= score;
}

function matchWords(){
    if(wordInput.value === currentWord.innerHTML){
        message.innerHTML = "Correct !!!";
        return true;
    }
    else{
        message.innerHTML ="";  agar khali HAT ka H likha to kch ni show hoga
        return false;
    }
}

function ShowWord(words){
   //generate random array index
   const randIndex = Math.floor(Math.random() * words.length);  // Math.floor return 5.4=>5 Math.random 0.123*30 
    //console.log(randIndex);
    currentWord.innerHTML = words[randIndex];
}

function countdown(){
   //console.log("hello");
     if(time>0){
        //Decrement 
        time--;
    }
    else if(time === 0){
        isPlaying=false;

    }
    timeDisplay.innerHTML = time;
    
}

function checkStatus(){
if(!isPlaying && time === 0)
//!isplaying=true
{
    message.innerHTML ="Game Over!!";
    score = -1; //phla trial hona chaie
    //-1 lenge qki gameover k baad first chance hmari trial hogi uspe 0 hona chaie na ki 1
}
}







