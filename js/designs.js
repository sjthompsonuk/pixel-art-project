//Define variables required
const submit = document.querySelector('.submit-button');
let height = document.querySelector('.inputHeight').value;
let width = document.querySelector('.inputWidth').value;
let color = document.querySelector('.colorPicker').value;
const table = document.querySelector('.pixelCanvas');

// When size is submitted by the user, call makeGrid()

function makeGrid() {
  //Update variables
  height = document.querySelector('.inputHeight').value;
  width = document.querySelector('.inputWidth').value;
  //Clear any existing table's children
  while (table.firstChild) {
    table.removeChild(table.firstChild);
  }
  //Create table with loop
  for (let i = 0; i < height; i++) {
    const newRow = document.createElement('tr');
    for (let i = 0; i < width; i++) {
      const newCell = document.createElement('td');
      newRow.appendChild(newCell);
    }
    table.appendChild(newRow);
  }
}

//Event listener for submit - makeGrid()
submit.addEventListener('click', function(evt) {
  evt.preventDefault();
  makeGrid();
})

//Event listener for mousedown within table on cells (background color change)

table.addEventListener('mousedown', function(evt) {
  evt.preventDefault();
  //update color
  color = document.querySelector('.colorPicker').value;
  //verify target is a cell
  if (evt.target.nodeName == "TD") {
    //change background color attribute
    evt.target.style.backgroundColor = color;
  }
})

//Event listener for doubleclick to reset cell to white
table.addEventListener('dblclick', function(evt) {
  evt.preventDefault();
  //update color
  color = document.querySelector('.colorPicker').value;
  //verify target is a cell
  if (evt.target.nodeName == "TD") {
    //change background color attribute
    evt.target.style.backgroundColor = '#fff';
  }
})
