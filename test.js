function getGridSize() {
   let gridSize = prompt('Enter a number between 1 and 100 (for example: 100 generates a grit of 100 x 100 squares)');
   while (gridSize < 1 || gridSize > 100 || isNaN(gridSize)) {
    gridSize = prompt('Enter a number between 1 and 100 (for example: 100 generates a grit of 100 x 100 squares)s');
   }
   return gridSize;
}

function genSquares(number) {
    let grid = document.querySelector('#grid');
    for (i=0; i<number; i++) {
        let row = document.createElement('div');
        row.className = 'row';
        for(let x = 1; x <= number; x++) {
            let cell = document.createElement('div') 
            cell.className = 'cell';
            row.appendChild(cell);
        }
        grid.appendChild(row);
    }
}

genSquares(16);

let isDrawing = false;
const cells = document.querySelectorAll('.cell');
const grid = document.querySelector('#grid')
cells.forEach((cell) => {
    cell.addEventListener('mousedown', (e) => {
        isDrawing = true;
        cell.style.backgroundColor = 'gold'   
        console.log('down');
    });
    cell.addEventListener('mousemove', (e) => {
        if (isDrawing) {
            cell.style.backgroundColor = 'gold'
        }
    });
    cell.addEventListener('mouseup', (e) => {
        if (isDrawing) {
            isDrawing = false;
        }
    });
    grid.addEventListener('mouseleave', (e) => {
        if (isDrawing) {
            isDrawing = false;
        }
    })
});