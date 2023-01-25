let gameBoard = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
];

let currentPlayer = 1;
let playerXWins = 0;
let playerOWins = 0;

function handleClick(event) {
  let row = event.target.dataset.row;
  let col = event.target.dataset.col;

  gameBoard[row][col] = currentPlayer;
  currentPlayer = currentPlayer === 1 ? 2 : 1;

  checkForWin();
  updateDisplay();
}

function checkForWin() {
  // Check for horizontal wins
  for (let row = 0; row < gameBoard.length; row++) {
    if (gameBoard[row][0] !== 0 &&
        gameBoard[row][0] === gameBoard[row][1] &&
        gameBoard[row][0] === gameBoard[row][2]) {
      console.log(`Player ${gameBoard[row][0]} has won!`);
      document.getElementById("result").innerHTML = `Player ${gameBoard[row][0]} wins!`;
      return;
    }
  }
  // Check for vertical wins
  for (let col = 0; col < gameBoard[0].length; col++) {
    if (gameBoard[0][col] !== 0 &&
        gameBoard[0][col] === gameBoard[1][col] &&
        gameBoard[0][col] === gameBoard[2][col]) {
      console.log(`Player ${gameBoard[0][col]} has won!`);
      document.getElementById("result").innerHTML = `Player ${gameBoard[0][col]} wins!`;
      return;
      }
    }
    // Check for diagonal wins (from top-left to bottom-right)
    if (gameBoard[0][0] !== 0 &&
        gameBoard[0][0] === gameBoard[1][1] &&
        gameBoard[0][0] === gameBoard[2][2]) {
      console.log(`Player ${gameBoard[0][0]} has won!`);
      document.getElementById("result").innerHTML = `Player ${gameBoard[0][0]} wins!`;
      return;
    }
    // Check for diagonal wins (from top-right to bottom-left)
    if (gameBoard[0][2] !== 0 &&
        gameBoard[0][2] === gameBoard[1][1] &&
        gameBoard[0][2] === gameBoard[2][0]) {
      console.log(`Player ${gameBoard[0][2]} has won!`);
      document.getElementById("result").innerHTML = `Player ${gameBoard[0][2]} wins!`;
      return;
    }

    let isDraw = true;
    for (let row = 0; row < gameBoard.length; row++) {
      for (let col = 0; col < gameBoard[row].length; col++) {
        if (gameBoard[row][col] === 0) {
          isDraw = false;
          break;
        }
      }
    }
    if (isDraw) {
      console.log("It's a draw!");
      document.getElementById("result").innerHTML = "It's a draw!";
    }
}

function updateDisplay() {
  let cells = document.querySelectorAll("#board td");
  cells.forEach((cell) => {
    let row = cell.dataset.row;
    let col = cell.dataset.col;
    if (gameBoard[row][col] === 0) {
      cell.textContent = "";
    } else if (gameBoard[row][col] === 1) {
      cell.textContent = "X";
    } else if (gameBoard[row][col] === 2) {
      cell.textContent = "O";
    }
  });
}

function restartGame() {
  currentPlayer = 1;
  winner = null;
  gameBoard = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  document.getElementById("result").innerHTML = "";
  const cells = document.querySelectorAll("#board td");
  cells.forEach((cell) => {
      cell.textContent = "";
  });
}



 



  

  