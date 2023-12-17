let userScore = 0;
let comScore = 0;

const choices = document.querySelectorAll(".choise");
const user = document.getElementById("userScore");
const com = document.getElementById("comScore");
const result = document.getElementById("result");


const Draw = () => {
    console.log("Game was Draw")
    result.innerHTML = "Game Was Draw";
    result.classList.add("bg-black")
    result.style.backgroundColor = "black";
}

const showWinner = (userWin, userChoice , comChoise) => {
    if(userWin) {
       userScore++;
       user.innerText = userScore;
        result.innerHTML = `You Win! ${userChoice} beats ${comChoise}`;
        result.classList.add("bg-green-500")
        result.style.backgroundColor = "green";
    }else {
        comScore++;
        com.innerText = comScore;
        result.innerHTML = `You Lost! ${comChoise} beats ${userChoice}`;;
        result.classList.add("bg-red-500");
        result.style.backgroundColor = "red"
        result.classList.remove("bg-green-500");
        result.classList.remove("bg-black");
    }
}




const genComChoise = () => {
    const option = ["rock", "paper", "scissiors"];
    const randIdx = Math.floor(Math.random()*3);
    return option[randIdx];
}




const playGame = (userChoice) => {
    console.log("user --", userChoice);

    //genrate com choice 
    const comChoise = genComChoise();
    console.log("com --> ", comChoise);

    if(userChoice === comChoise){
        //Draw Game
        Draw();
    }else{
        let userWin = true;
        if(userChoice === "rock") {
            //scissor , paper
            userWin = comChoise === "paper" ? false : true;
        }else if (userChoice === "paper") {
            //rock, scissor
           userWin =  comChoise === "scissor" ? false : true;
        } else {
            //rock, paper
            userWin = comChoise === "rock" ? false : true;
        }

        showWinner(userWin, userChoice , comChoise);
    }
}




    choices.forEach((choice) => {
        console.log(choice);
        choice.addEventListener("click", () => {

            const userChoice = choice.getAttribute("id");
            console.log("choice was clicked", userChoice);
            playGame(userChoice);

        })
    })
