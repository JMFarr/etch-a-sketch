const grid = document.querySelector('#grid');

function drawGrid(squaresPerSide) {
    const squareDimensions = Math.floor(grid.offsetWidth / squaresPerSide);
    console.log(squareDimensions);
    for(let i = 0; i < (squaresPerSide ** 2); i++) {
        let square = document.createElement('div');
        square.classList.add('square');
        square.style.width = squareDimensions + 'px';
        square.style.height = squareDimensions + 'px';
        square.addEventListener('mouseover', e => colorSquare(e))
        grid.appendChild(square);
    }
}

function colorSquare(event) {
    event.target.style.backgroundColor = 'grey';
}

function deleteGrid() {
    while(grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
}

drawGrid(16);
