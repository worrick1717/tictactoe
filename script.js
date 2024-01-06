console.log("Welcome to my Tic Tac Toe");
let turn = "X";

//Function to change the turn
const changeTurn=()=>{
    return turn ==="X"? "O" :"X";
}

//Function to check for a win - this function will check if X wins or 0 wins
const checkWin=()=>{

}
//Main Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText ===''){
            boxtext.innerText = turn;
            turn = changeTurn();
            checkWin();
            document.getElementsByClassName("info")[0].innerText = "Turn for  " +turn;
        }
    })
})