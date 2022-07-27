const container = document.querySelector('#container');
for (let x = 0; x < 16; x++) {
    for (let y = 0; y < 16; y++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.addEventListener('mouseover', changeColor);
        container.appendChild(square);
    }
}

let resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', resetBoard);

let newGridButton = document.querySelector('#new-grid');
newGridButton.addEventListener('click', makeNewGrid);

function changeColor() {
    this.style.backgroundColor = getRandomRgb();
} 

function resetBoard() {
    let squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.style.backgroundColor = "white";
    });
}

function isValidSize(userInput) {
    let newSize = parseInt(userInput);
    if (isNaN(newSize)) {
        return false;
    }
    if (newSize > 100 || newSize < 1) {
        return false;
    }
    return true;
}

function makeNewGrid() {
    let promptStr = "Enter a new size for your square grid, between 1-100 (i.e. " + 
        "entering 100 would make a 100x100 grid):"
    let newSize = prompt(promptStr);
    while (!isValidSize(newSize)) {
        newSize = prompt(promptStr);   
    }
    let containerSize = container.offsetWidth;
    let newSquareSize = containerSize / newSize;
    let squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        container.removeChild(square);
    });
    for (let x = 0; x < newSize; x++) {
        for (let y = 0; y < newSize; y++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.style.width = newSquareSize + "px";
            square.style.height = newSquareSize + "px";
            square.style.outlineWidth = (newSquareSize * 0.0833).toFixed(2) + "px";
            square.addEventListener('mouseover', changeColor);
            container.appendChild(square);
        }
    }

}

function getRandomRgb() {
    var num = Math.round(0xffffff * Math.random());
    var r = num >> 16;
    var g = num >> 8 & 255;
    var b = num & 255;
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}