const container = document.querySelector('.grid-container')
const size = document.querySelector('#size');
const slider = document.querySelector('#slider');
const btnBlack = document.querySelector('.black')
const btnRainbow = document.querySelector('.rainbow')
const btnColor = document.querySelector('.color')
const colorSelector = document.querySelector('.selector')
const btnEraser = document.querySelector('.eraser')
let paint = 'black'

btnBlack.addEventListener('click', () => paint = 'black')
btnRainbow.addEventListener('click', () => paint = 'rainbow')
btnColor.addEventListener('click', () => paint = 'color')
btnEraser.addEventListener('click', () => paint = 'white')

slider.oninput = () => {
    size.textContent = `${slider.value} x ${slider.value}`;
    reset();
}
size.textContent = `${slider.value} x ${slider.value}`

createGrid(16)

function createGrid (num) {
    const grid = num * num;
    for (let i = 0; i < grid; i++) {
       const div = document.createElement('div');
       div.setAttribute('class', 'block');
       container.appendChild(div);
       container.style.gridTemplate = `repeat(${num}, 1fr) / repeat(${num}, 1fr)`
    }
    const blocks = document.querySelectorAll('.block');
    blocks.forEach(blocks => blocks.addEventListener('mouseover', () => blocks.style.backgroundColor = changeColor()))
}

function randomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color ;
  }

  function changeColor() {
    if (paint === 'rainbow') {
        return randomColor()
    } else if (paint === 'color') {
        return colorSelector.value
    } else if (paint === 'white') {
        return 'white'
    } else {
        return 'black'
    }
  }

function removeAllChildNodes(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}

function reset () {
    removeAllChildNodes(container);
    createGrid(slider.value);
} 

