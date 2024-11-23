const grid = document.getElementById("sudoku-grid");
const checkButton = document.getElementById("check-button");
const reloadButton = document.getElementById("reload-button");

// Create the Sudoku grid dynamically
function createGrid() {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const cell = document.createElement("input");
      cell.classList.add("cell");
      cell.setAttribute("type", "number");
      cell.setAttribute("min",   
 "1");
      cell.setAttribute("max", "9");
      cell.setAttribute("data-row", i);
      cell.setAttribute("data-col", j);
      grid.appendChild(cell);
    }
  }
}

// Check if the Sudoku solution is correct
function checkSolution() {
  const cells = grid.querySelectorAll(".cell");
  let isCorrect = true;

  // Check rows, columns, and 3x3 blocks
  for (let i = 0; i < 9; i++) {
    const rowValues = [];
    const colValues = [];
    const blockValues = [];

    for (let j = 0; j < 9; j++) {
      const cell = cells[i * 9 + j];
      const value = cell.value;

      if (value === "") {
        isCorrect = false;
        break;
      }

      rowValues.push(value);
      colValues.push(cells[j * 9 + i].value);
      blockValues.push(cells[(Math.floor(i / 3) * 3 + Math.floor(j / 3)) * 9 + (i % 3) * 3 + (j % 3)].value);
    }

    if (!isCorrect || !checkValues(rowValues) || !checkValues(colValues) || !checkValues(blockValues)) {
      isCorrect = false;
      break;
    }
  }

  // Highlight correct or incorrect cells
  cells.forEach(cell => {
    cell.classList.remove("correct", "incorrect");
    if (isCorrect) {
      cell.classList.add("correct");
    } else {
      cell.classList.add("incorrect");
    }
  });

  return isCorrect;
}

// Check if a given array of values is valid
function checkValues(values) {
  const valueSet = new Set();
  for (const value of values) {
    if (valueSet.has(value)) {
      return false;
    }
    valueSet.add(value);
  }
  return true;
}

// Reload the Sudoku grid
function reloadGrid() {
  const cells = grid.querySelectorAll(".cell");
  cells.forEach(cell => {
    cell.value = "";
    cell.classList.remove("correct", "incorrect");
  });
}

// Event listeners
checkButton.addEventListener("click", checkSolution);
reloadButton.addEventListener("click", reloadGrid);

// Create the initial grid
createGrid();