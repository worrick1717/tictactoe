console.log("Welcome to my Tic Tac Toe");
let turn = "X";

//Function to change the turn
const changeTurn=()=>{
    return turn ==="X"?"O":"X";
}

//Function to check for a win - this function will check if X wins or 0 wins
const checkWin=()=>{

}
//Main Game Logic
const gameLogin=()=>{
    let boxes = document.getElementsByClassName("box");
    Array.from(boxes).forEach(element=>){
        let boxtext = document.querySelector('.boxtext');
        boxtext.addEventListener('click',()=>{
            if(e.innerText === ''){
                e.innerText = turn;
                changeTurn();
                checkWin();
            }
        })
    }
}