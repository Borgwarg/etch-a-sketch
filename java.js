function getGridSize() {
   let gridSize = prompt('Enter a number between 1 and 100');
   while (gridSize < 1 || gridSize > 100 || gridSize === isNaN) {
    gridSize = prompt('Enter a number between 1 and 100');
   }
   return gridSize;
}

function genSquares(number) {
    let grit = document.querySelector('#grit');
    for (i=0; i<number; i++) {
        let row = document.createElement('div');
        row.className = 'row';
        for(let x = 1; x <= number; x++) {
            let cell = document.createElement('div') 
            cell.className = 'cell';
            row.appendChild(cell);
        }
        grit.appendChild(row);
    }
}

function draw() {
    let isDrawing = false;
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
        cell.addEventListener('mousedown', (e) => {
            isDrawing = true;
            cell.style.backgroundColor = 'green'
        })
        cell.addEventListener('mousemove', (e) => {
            if (isDrawing) {
                cell.style.backgroundColor = 'green'
            }
        })
        cell.addEventListener('mouseup', (e) => {
            if (isDrawing) {
                isDrawing = false;
            }
        })
    })
}



function clearGrit(elementID) {
    document.getElementById(elementID).innerHTML = '';
} 

function draw() {
    let isDrawing = false;
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
        cell.addEventListener('mousedown', (e) => {
            isDrawing = true;
            cell.style.backgroundColor = 'green'
        });
        cell.addEventListener('mousemove', (e) => {
            if (isDrawing) {
                cell.style.backgroundColor = 'green'
            }
        });
        cell.addEventListener('mouseup', (e) => {
            if (isDrawing) {
                isDrawing = false;
            }
        });
    });
}

const gridButton = document.querySelector('#gridsize');
gridButton.addEventListener('click', () => {
    clearGrit('grit');
    genSquares(getGridSize());
    draw();
    clearButton();
});

function clearButton() {
    const clearButton = document.querySelector('#clear');
    const cells = document.querySelectorAll('.cell');
    clearButton.addEventListener('click', () => {  
        cells.forEach((cell) => {
            cell.style.backgroundColor = 'rgb(232, 232, 232)'
        });
    });
}





