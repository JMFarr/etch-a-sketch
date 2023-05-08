const container = document.querySelector('.container');

function drawGrid(squaresPerSide) {
    const squareDimensions = Math.floor(container.offsetWidth / squaresPerSide);
    console.log(squareDimensions);
    for(let i = 0; i < (squaresPerSide ** 2); i++) {
        let square = document.createElement('div');
        square.classList.add('square');
        square.style.width = squareDimensions + 'px';
        square.style.height = squareDimensions + 'px';
        square.addEventListener('mouseover', e => colorSquare(e))
        container.appendChild(square);
    }
}

function colorSquare(event) {
    event.target.style.backgroundColor = 'grey';
}

drawGrid(16);