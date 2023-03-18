const ticGame = document.querySelector(".tic-game");
const cells = ["", "", "", "", "", "", "", "", ""];

let go = "cross";

function createBoard() {
  cells.forEach((cell, index) => {
    const cellElement = document.createElement("div");
    cellElement.classList.add("cell");
    cellElement.id = index;
    cellElement.addEventListener('click', addGo);
    ticGame.append(cellElement);
  });
}

createBoard();

function addGo(e) {
  const action = document.createElement('div');
  action.classList.add(go);
  e.target.append(action);
  if (go == "cross") {
    go = "circle";
  } else {
    go = "cross";
  }

  e.target.removeEventListener("click", addGo); //play only once per cell
  checkScore();
}

function checkScore() {
  const winningCombo = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];
  
}
