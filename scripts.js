const grid = document.querySelector('#grid');
const button = document.querySelector('#set-squares');

button.addEventListener('click', () => setSquaresPerSide());

function drawGrid(squaresPerSide) {
    const squareDimensions = Math.floor(grid.offsetWidth / squaresPerSide);
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

function setSquaresPerSide() {
    let squaresPerSide = parseInt(prompt("How many squares per side? (Max: 100)"), 10);
    if(isNaN(squaresPerSide) || squaresPerSide < 1) return;
    if(squaresPerSide > 100) squaresPerSide = 100;

    deleteGrid();
    drawGrid(squaresPerSide);
}

drawGrid(16);
