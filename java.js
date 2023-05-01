function genSquares(number) {
    let grit = document.querySelector('#container');
    for (i=0; i<number; i++) {
        let row = document.createElement('div');
        row.className = 'row';
        for(let x = 1; x <= number; x++) {
            let cell = document.createElement('div') 
            cell.className = 'gridsquare';
            cell.innerText = (i * number) + x;
            row.appendChild(cell);
        }
        grit.appendChild(row);
    }
    document.getElementById('code').innerText = grit.innerHTML;
}

genSquares(16)