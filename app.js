const ticGame = document.querySelector(".tic-game");
const scoreElement = document.querySelector(".score");
const cells = ["", "", "", "", "", "", "", "", ""];

let go = "cross";
scoreElement.textContent = `Let the game begin`;

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
  scoreElement.textContent = `It is ${go}'s turn.`;
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

//   const allCells = document.querySelectorAll(".cell");

//   winningCombo.forEach(array => {

//     let winCirle = array.every((cell) =>
//       allCells[cell].firstChild?.classList.contains("circle")
//     );

//     let winCross = array.every((cell) =>
//       allCells[cell].firstChild?.classList.contains("cross")
//     );

//     if (winCirle) {
//       scoreElement.textContent = "Circle Wins";
//       // allCells.forEach(cell => cell.removeEventListener('click', addGo))
//       allCells.forEach(cell => cell.replaceWith(cell.cloneNode(true))) //it will do the same thing as remove the listener off the cells.
//     }

//     if (winCross) {
//       scoreElement.textContent = "Cross Wins";
//       allCells.forEach((cell) => cell.removeEventListener("click", addGo));
//     }

//   })
// }
