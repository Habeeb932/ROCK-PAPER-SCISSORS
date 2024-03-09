let userScore = 0;
let compScore = 0;

const uScore = document.querySelector("#user-score");
const cScore = document.querySelector("#comp-score");
const choices = document.querySelectorAll(".choice");
// const refreshBtn = document.querySelector("button");


const msg = document.querySelector("#msg");


const compChoice = () =>{
    let options = ["rock","paper","scissor"];
    const cChoice = Math.floor(Math.random()*3);
    return options[cChoice];
}

const drawGame = (userChoice) =>{
    console.log("draw");
    msg.innerText = `Game Draw!!! Both choose ${userChoice}`;
    msg.style.backgroundColor = "gray";
};

const winner = (game,userChoice,cChoice) =>{
    if(game){
        console.log("User Wonn");
        msg.innerText = `You win ${userChoice} beats ${cChoice}`;
        msg.style.backgroundColor = "green";
        userScore = userScore + 1;
        uScore.innerText = userScore;
    }
    else{
        console.log("Comp won");
        msg.innerText = `You lost! ${cChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
        compScore = compScore + 1;
        cScore.innerText = compScore;
    }
}
const playGame= (userChoice) =>{
    const cChoice = compChoice();
    console.log("user "+userChoice);
    console.log("computer "+cChoice);
    
    if(userChoice === cChoice){
        drawGame(userChoice);
    }
    else {
        let game = true;
        if(userChoice === "rock"){
            game = cChoice === "paper"?false:true;
        }else if(userChoice === "paper"){
            game = cChoice === "scissor"?false:true;
        }else{
            game = cChoice === "rock"?false:true;
        }
        winner(game , userChoice ,cChoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let choiceId = choice.getAttribute("id");
        playGame(choiceId);
    })
});

// refreshBtn.addEventListener(("click"), ()=>{
//     let userScore = 0;
//     let compScore = 0;
//     cScore.innerText = 0;
//     uScore.innerText = 0;
//     msg.innerText = "Choose Your Move";
//     msg.style.backgroundColor = "gray";
// });