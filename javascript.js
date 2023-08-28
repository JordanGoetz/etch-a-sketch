const container = document.querySelector('#container');
let squareSize = 50


function createDivs() {
    let totalDivs = squareSize * squareSize
    for (let i = 0; i < totalDivs; i++) {
    container.appendChild(createDiv(i));
}}


function createDiv(index) {
    let animationClass = Math.floor(Math.random() * 5) + 1;
    let div = document.createElement('div');
    div.classList.add('squares');
    div.id = index;
    return div;
}


function changeGridSize() {
    container.style.gridTemplateColumns = `repeat(${squareSize}, 1fr)`
    container.style.gridTemplateRows = `repeat(${squareSize}, 1fr)`
}


//Clear grid with button//
document.querySelector('#button').addEventListener('click', function() {
    document.querySelectorAll('.hovered').forEach(item => {
        item.classList.toggle('hovered')
        });
    });

    

const slider = document.getElementById("myRange");
const output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value
    squareSize = this.value
    document.querySelectorAll('.squares').forEach(item => {
        item.remove()
    });
    createDivs()
    changeGridSize()
    changeBackground()
};

//Change background colors of each div to black when mouse enters the div//
function changeBackground() {
    document.querySelectorAll('.squares').forEach(item => {
    item.addEventListener('mouseover', function(e) {
        e.target.classList.add('hovered');
    });
});
}

createDivs()
changeGridSize()
changeBackground()