const container = document.querySelector('#container');


function createDiv(index) {
    let animationClass = Math.floor(Math.random() * 5) + 1;
    let div = document.createElement('div');
    div.class = 'box' + animationClass;
    div.id = index;
    return div;
}



for (let i = 0; i < 16; i++) {
    container.appendChild(createDiv(i));
}

