// let boxes = document.querySelectorAll(".box");
// let resetbtn = document.querySelectorAll("#reset");
// let newgamebtn= document.querySelector(".new-btn");
// let msgcontainer = document.querySelectorAll(".msg-container");
// let msg = document.querySelectorAll("#msg")

// let turn0 = true; //playerx, player0

// const winpattern= [
//     [0,1,2],
//     [0,3,6],
//     [0,4,8],
//     [1,4,7],
//     [2,5,8],
//     [2,4,6],
//     [3,4,5],
//     [6,7,8],
// ];

// const resetgame= ()=>{
//     turn0 = true;
//     enableboxes();
//     msgcontainer.classList.add("hide"); 
// };

// boxes.forEach((box)=>{
//     box.addEventListener("click",()=>{
//         console.log("button was clicked")  //optional
//         if (turn0) {
//             //player0
//             box.innerText = "O";
//             turn0 = false;
//         } else {
//             //playerX
//             box.innerText = "X";
//             turn0 = true;
//         }
//         box.disabled = true;
//         checkwinner();
//     })
// });

// const disableboxes = ()=>{
//     for(let box of boxes){
//         box.disabled = true;
//     }
// }

// const enableboxes = ()=>{
//     for(let box of boxes){
//         box.disabled = false;
//         box.innerText = "";
//     }
// };

// const showwinner = (winner)=>{
//     msg.innerText = `Congratulation, Winner is ${winner} `;
//     msgcontainer.classList.remove("hide");
//     disableboxes();
// }

// const checkwinner= ()=>{
//     for(let pattern of winpattern){
//         let post1val =boxes[pattern[0]].innerText;
//         let post2val =boxes[pattern[1]].innerText;
//         let post3val =boxes[pattern[2]].innerText;

//         if(post1val !="" && post2val !="" && post3val !=""){
//             if(post1val == post2val && post2val == post3val){
//                 console.log("winnner",post1val); //optional
//                 showwinner(post1val);
//             }
//         }
//     }
// };

// newgamebtn.addEventListener("click", resetgame);
// resetbtn.addEventListener("click", resetgame);











let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //playerX, playerO
let count = 0; //To Track Draw

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  turnO = true;
  count = 0;
  enableBoxes();
  msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      //playerO
      box.innerText = "O";
      turnO = false;
    } else {
      //playerX
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    count++;

    let isWinner = checkWinner();

    if (count === 9 && !isWinner) {
      gameDraw();
    }
  });
});

const gameDraw = () => {
  msg.innerText = `Game was a Draw.`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
        return true;
      }
    }
  }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);

