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
function clearGrid() {
    document.querySelectorAll('.black').forEach(item => {
        item.classList.toggle('black')
        });
    document.querySelectorAll('.red').forEach(item => {
        item.classList.toggle('red')
        });
    document.querySelectorAll('.orange').forEach(item => {
        item.classList.toggle('orange')
        });
    document.querySelectorAll('.yellow').forEach(item => {
        item.classList.toggle('yellow')
        });
    document.querySelectorAll('.green').forEach(item => {
        item.classList.toggle('green')
        });
    document.querySelectorAll('.blue').forEach(item => {
        item.classList.toggle('blue')
        });
};

//Clear grid with button//
document.querySelector('#button').addEventListener('click', function() {
    clearGrid()
});
    

document.querySelector('#colorBtn').addEventListener('click', function() {
    clearGrid()
    colorfulBackground()
    document.querySelectorAll('.squares').forEach(item => {
        item.classList.add('colorful')
    });
})

document.querySelector('#blackBtn').addEventListener('click', function() {
    clearGrid()
    document.querySelectorAll('.squares').forEach(item => {
        item.classList.remove('colorful')})
    currentColor = 'black'
    changeBackground()
})
    

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
    currentColor = 'black'
};

//Change background colors of each div to black when mouse enters the div//
function changeBackground() {
    document.querySelectorAll('.squares').forEach(item => {
        item.addEventListener('mouseover', function(e) {
            if (e.target.classList.contains('red')) {
                return
            }
            if (e.target.classList.contains('yellow')) {
                return
            }
            if (e.target.classList.contains('orange')) {
                return
            }
            if (e.target.classList.contains('green')) {
                return
            }
            if (e.target.classList.contains('blue')) {
                return
            }
            if (e.target.classList.contains('colorful')) {
                colorfulBackground()
            }
            
            e.target.classList.add(colors[currentColor])
        });   
    });
};

function colorfulBackground() {
        let randomNumber = Math.floor(Math.random() * 5)
        console.log(randomNumber)
        if (randomNumber === 0) {
            currentColor = 'red'
            return
            }
        
        if (randomNumber === 1) {
            currentColor = 'orange'
            return
            }
        
        if (randomNumber === 2) {
            currentColor = 'yellow'
            return
            }
        
        if (randomNumber === 3) {
            currentColor = 'green'
            return
            }

        if (randomNumber === 4) {
            currentColor = 'blue'}
    }


createDivs()
changeGridSize()
changeBackground()


let currentColor = 'black'

const colors =
    {   black: 'black',
        red: 'red',
        orange: 'orange',
        yellow: 'yellow',
        green: 'green',
        blue: 'blue'
    };