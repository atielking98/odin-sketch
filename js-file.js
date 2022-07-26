const container = document.querySelector('#container');
for (let x = 0; x < 16; x++) {
    for (let y = 0; y < 16; y++) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
    }
}

let squares = document.querySelectorAll('.square');
squares.forEach(square => {
    square.addEventListener('mouseover', changeColor);
});

let resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', resetBoard);


function changeColor() {
    this.style.backgroundColor = getRandomRgb();
} 

function resetBoard() {
    let squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.style.backgroundColor = "white";
    });
}

function getRandomRgb() {
    var num = Math.round(0xffffff * Math.random());
    var r = num >> 16;
    var g = num >> 8 & 255;
    var b = num & 255;
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}