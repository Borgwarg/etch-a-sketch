const divEL = document.querySelector('div');
divEL.addEventListener('dragstart', (e) => {
    e.preventDefault();
})


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
 
function rainbowMode() {
    const body = document.querySelector('body');
    const title = document.querySelector('h1');
    body.classList.toggle('rainbow');
    title.classList.toggle('gradient');
}

function clearGrid(elementID) {
    document.getElementById(elementID).innerHTML ='';
}

const gridButton = document.querySelector('#gridsize');
gridButton.addEventListener('click', () => {
    clearGrid('grid');
    genSquares(getGridSize());
    draw();
});
 
const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', () => {
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
        cell.style.backgroundColor = 'rgb(232, 232, 232)';
    })
});

function toggle(button) {
    if (button.value == 'off') {
        button.value ='on';
    }
    else {
        button.value = 'off';
    }
    return button.value;
}

const rainbowButton = document.querySelector('#rainbow');
rainbowButton.addEventListener('click', () => {
    toggle(document.getElementById('rainbow'));
    rainbowMode();
});

function draw() {
    let isDrawing = false;
    const cells = document.querySelectorAll('.cell');
    const grid = document.querySelector('#grid');
    const button = document.getElementById('rainbow');
    cells.forEach((cell) => {
        cell.addEventListener('mousedown', (e) => {
            isDrawing = true;
        });
        cell.addEventListener('mousemove', (e) => {
            if (isDrawing && button.value == 'off') {
                cell.style.backgroundColor = 'gold';
            }
            else if (isDrawing && button.value == 'on') {
                cell.style.backgroundColor = randomColor();
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
}

function randomColor() {
    return('#' + Math.floor(Math.random()*16777215).toString(16))
}
 
genSquares(16);
draw();
