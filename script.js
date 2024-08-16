let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newBtn = document.querySelector("#new");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");



let turn0 = true//playerx , player O;
let count = 0;

const resetgame = () => {
    turn0 = true;
    boxes.forEach((box) =>{
        box.innerText = "";
    })
    msgcontainer.classList.add("hide");
    boxenabler();
    count = 0;
}

const WinPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        count++;
        if(turn0 === true){
            box.innerText = "O";
            turn0 = false;
        }
        else if(turn0 === false){
            box.innerText = "X";
            turn0 = true;
        } 
       box.disabled = true;
       checkWinner();
    })
})

const boxdisabler = () =>{
    boxes.forEach((box) =>{
        box.disabled = true;
    })
}

const boxenabler = () =>{
    boxes.forEach((box) =>{
        box.disabled = false;
    })
}

const ShowWinner = (winner)=>{
 msg.innerText = `Well Played "${winner}" , You Win!`;
 msgcontainer.classList.remove("hide");
 boxdisabler();
}

const checkWinner = () =>{
    for( let pattern of WinPatterns){
       
let pos1val = boxes[pattern[0]].innerText //position1
let pos2val = boxes[pattern[1]].innerText //position2
let pos3val = boxes[pattern[2]].innerText //position3

if(pos1val != "" && pos2val != "" && pos3val != ""){
    if(pos1val === pos2val && pos3val === pos2val){
        
        ShowWinner(pos1val);   
    }

    else{
        if(count === 9){
            msg.innerText = "It's a draw, Niggas";
            msgcontainer.classList.remove("hide");
            boxdisabler();
        }
    }
}
}
}

newBtn.addEventListener("click", resetgame);
resetBtn.addEventListener("click", resetgame);