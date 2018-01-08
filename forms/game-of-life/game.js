let table = document.createElement('table')
table.id = 'table'
const dimension = 24
let grid = document.getElementById('grid')
function idGenerator(j, i) {
      let x = j;
      let y = i;
      let coords = x+','+y;
      return coords
    }


function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function randomCoords(dimension) {
  let output = []
  let amount =  Math.round(getRandomArbitrary(0, dimension*dimension))
  for (let i = 1; i <= amount; i ++) {
    let x = Math.round(getRandomArbitrary(1, dimension))
    let y = Math.round(getRandomArbitrary(1, dimension))
    let id = idGenerator(x, y);
    output.push(id)
  }
  return output
}



function makeGrid(dimension, table) {
  let initalCoords = randomCoords(dimension)
  for (let i = dimension; i > 0; i --) {
    let row = document.createElement('tr');
    for (let j = 1; j <= dimension ; j++) {
      let columnPiece = document.createElement('td');
      let box = document.createElement('input');
      box.type = 'checkbox';

      box.id = idGenerator(j, i)
      if (initalCoords.includes(box.id)) {
        box.checked = true;
      }
      columnPiece.appendChild(box)
      row.appendChild(columnPiece)
    }
    table.appendChild(row);
  }
  return table
}

function newGridMaker (dimension) {
  let newTable = document.createElement('table')
  for (let i = dimension; i > 0; i --) {
    let row = document.createElement('tr');
    for (let j = 1; j <= dimension ; j++) {
      let columnPiece = document.createElement('td');
      let box = document.createElement('input');
      box.type = 'checkbox';

      box.id = idGenerator(j, i)
      columnPiece.appendChild(box)
      row.appendChild(columnPiece)
    }
    newTable.appendChild(row);
}
return newTable
}

function NeighbourArrayBuilder(inputs, coordArray, i) {
  let x = coordArray[0];
  let y = coordArray[1];
  let left = x - 1;
  let right = x + 1;
  let up = y + 1;
  let down = y - 1;
  let neighbourhoodArray = [[left, y], [left, up], [x, up], [right, up], [right, y], [right, down], [x, down], [left, down]]
  let neighbourhood = []
  for (shift of neighbourhoodArray) {
    let toString = shift.map(String)
    let toId = shift.join(',')
    if (document.getElementById(toId)) {
      let neighbour = document.getElementById(toId)
      neighbourhood.push(neighbour)
    }
  }
  return neighbourhood
}
var firstGrid = makeGrid(dimension, table)
grid.appendChild(firstGrid)

var next = document.getElementById('next');
next.addEventListener('click', function() {
  let oldGrid = grid.firstChild
  console.log(oldGrid)
  let cells = document.getElementsByTagName('td')
  let newGrid = newGridMaker(dimension);
  let newCells = newGrid.getElementsByTagName('td')
  for (var i = 0; i < dimension*dimension; i++) {
    let inputs = cells[i].childNodes
    let input = inputs[0];
    let outputs = newCells[i].childNodes;
    let output = outputs[0]
    let coordString = input.getAttribute('id')
    let coordArray = coordString.split(',').map(Number)
    let neighbours = NeighbourArrayBuilder(inputs, coordArray, i)
    let count = 0;
    for (neighbour of neighbours) {
      if (neighbour.checked == true) {
        count += 1;
      }
    }
    if (input.checked == true) {
      if (count < 2 || count > 3) {
        output.checked = false;

      }
      if (count == 2 || count == 3) {
        output.checked = true;
      }
    }

    if (input.checked == false) {
      if (count == 3) {
        output.checked = true;
      }
    }

    }
    grid.removeChild(oldGrid)
    grid.appendChild(newGrid)
})

//insantiate neighbours
//left, up left, up, up right, right, down right, down, down left
//[x-1, y], [x-1, y+1], [x, y+1], [x+1, y+1], [x+1, y], [x+1, y-1], [x, y-1], [x-1, y-1]
