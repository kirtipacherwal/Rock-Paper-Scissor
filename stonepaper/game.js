let user = 0;
let comp = 0;

const choices = document.querySelectorAll( '.choose' );
const msg = document.querySelector("#msg");



const compchoice = () =>{
 const option = [ 'rock', 'paper','scissors'];
    const randomnum = Math.floor(Math.random() * 3);
    return  option[randomnum]; 
    // returns the choices under option using randomnum.
};

const draw =() => {
    console.log("It's a Draw!");
    msg.textContent ="It's a Draw!";
};

// for choosing game
const playGame = (userchoice) => {
    console.log("user choice", userchoice);

    const compchoices = compchoice();
    console.log("comp choice", compchoices);

    if(userchoice === compchoices){
        draw();
    } else{
        let userwin = true;
        if(userchoice ==='rock'){
            // computer choose paper and scissor
        userwin =  compchoices === "paper" ?  false : true ;
        }else if(userchoice==="paper"){
             // computer choose rock and scissor
             userwin= compchoices=== "rock" ? false : true ;
            }else{
                // computer choose paper and rock
                userwin = compchoices === "scissor" ? false : true;
                }
                showWinner(userwin);
}};


const showWinner  = (userwin)=>{
    if(userwin){
    console.log("WIN!");
    msg.innerHTML = "You Win!";
    msg.style.backgroundColor = "red";
    } else {
        (console.log("LOSE!"))
    msg.innerHTML = "You  Lose!";
    }
;}

// adding eventlistner to the images
choices.forEach( (choose) => {
    choose.addEventListener("click", () => {
        const choiceId = choose.getAttribute("id");
    playGame(choiceId);
});
});



