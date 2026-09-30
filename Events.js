// const bt = document.querySelector("#btn")
// const img = document.querySelector("#img")

// // const heading =  document.createElement("h1")
// // document.body.appendChild(heading)

// bt.addEventListener('click',()=>{
   
//    img.setAttribute("scr","dog.jpg") 
//    console.log();
    
// })

// const btn = document.querySelector("#btn");
// const img = document.querySelector("#img");

// btn.addEventListener("click", () => {
//    btn.disabled = true;
//    btn.textContent ="submitted"

// });


// const input  = document.querySelector("#input")
// const count = document.querySelector("#count")

// input.addEventListener('input',(e)=>{
//     // e.value
    
//    const len = e.target.value.length
//     count.textContent = len
//     console.log(len);
    
// })

// const input = document.querySelector("#input")
// const button = document.querySelector("#btn")
// const h1 = document.querySelector("h1")

// button.addEventListener('click',(e)=>{
    
//    h1.textContent = e.target.value 
//     //   h1.textContent = input.value
//    document.body.style.backgroundColor = "black"

// })

// const input = document.querySelector("#input")

// const count = document.querySelector("#count")

// input.addEventListener('click',(e)=>{
//    const len = e.target.value.length
//    count.textContent = len

// })  

// const btn = document.querySelector("#btn")

// btn.addEventListener('click',()=>{
//     if(btn.textContent === "ON"){
//         btn.textContent = "off"
//         btn.style.backgroundColor = "red"
//         btn.style.width = "400px"
//         btn.style.heigth = "300px"
//     }

//     else{
//         btn.textContent ="ON"
//         btn.style.background = "green"

//     }
        
// })

let userScore = 0;

let compScore = 0;

const choices = document.querySelectorAll(".choice")

const drawGame = ()=>{
    console.log("game was draw");
    
}

const genCompChoice = ()=>{
     const options = ["rock","paper","Scissors"]
    const randIdx = Math.floor(Math.random()*3)
    return options[randIdx]
}

const playgame = (userChoice)=>{
     console.log("user choice",userChoice);
    //  generate computer choice
    
    const comChoice = genCompChoice()
    console.log("comp choice = ",comChoice);

    if(userChoice === comChoice){
        //Draw game 
        drawGame();
      }  
        else{
            let userWin = true;
            if(userChoise === "rock"){
                //
             userWin = comChoice === "paper" ? false : true;   
            }
            else if(userChoise === "paper"){
                userWin = compChoice === "scissors" ?false :true;
            }
            else{
                // rock,paper
                userwin = comChoice === "rock" ?false:true;
            }
        
        }


    
     
      
     
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id")
        // console.log("choice was clicked",userChoice);
        playgame(userChoice)
    })

})






