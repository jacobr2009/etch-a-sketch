let gridSize = 16;
let highlightStyle = 'black';
const grid = document.querySelector('.grid');
grid.style.setProperty('--grid-size', gridSize);

let blackHighlight = (e) => {
  e.target.style.backgroundColor = '#000';
}

let rainbowHighlight = (e) => {
  let red = (Math.floor(Math.random() * 255));
  let green = (Math.floor(Math.random() * 255));
  let blue = (Math.floor(Math.random() * 255));
  let bgColor = `rgb(${red}, ${green}, ${blue})`;
  e.target.style.backgroundColor = bgColor;
}

let shadeHighlight = (e) => {
  if (e.target.style.backgroundColor == '') {
    e.target.style.backgroundColor = 'rgb(122, 122, 122)';
  } else {
    let color = parseInt(e.target.style.backgroundColor.substr(4,3));
    if (color > 0) {
      let newColor = color - 14;
      e.target.style.backgroundColor = `rgb(${newColor}, ${newColor}, ${newColor})`;
    } 
  }
}

let clearGrid = () => {
  const gridItems = document.querySelectorAll('.grid-item');
  gridItems.forEach((item) => {
    item.style.backgroundColor = '';
  })
}

let changeSize = () => {
  gridSize = parseInt(prompt('Enter a Value Between 2 and 100'));
  buildGrid(grid, gridSize, highlightStyle);
  grid.style.setProperty('--grid-size', gridSize);
}

let buildGrid = (grid, gridSize, highlightStyle) => {
  grid.innerHTML = '';
  for (let i = 0; i < (gridSize ** 2); i++) {
    const gridItem = document.createElement('div');
    gridItem.innerHTML = `<div class="grid-item"></div>`;
    
    if (highlightStyle == 'black') {
      gridItem.addEventListener('mouseover', blackHighlight);
    } else if (highlightStyle == 'rainbow') {
      gridItem.addEventListener('mouseover', rainbowHighlight);
    } else if (highlightStyle == 'shade') {
      gridItem.addEventListener('mouseover', shadeHighlight);
      gridItem.style.backgroundColor = 'rgb(136, 136, 136)';
      gridItem.backgroundColor = 'rgb(136, 136, 136)';
    } 

    grid.appendChild(gridItem);
  }
}

let useRainbow = () => {
  highlightStyle = 'rainbow';
  buildGrid(grid, gridSize, highlightStyle);
}

let useBlack = () => {
  highlightStyle = 'black';
  buildGrid(grid, gridSize, highlightStyle);
}

let useGreyScale = () => {
  highlightStyle = 'shade';
  buildGrid(grid, gridSize, highlightStyle);
}

let alertNothing = () => {
  alert('This button does nothing!!');
}

buildGrid(grid, gridSize, highlightStyle);

const clearButton = document.querySelector('#clear-btn');
clearButton.addEventListener('click', clearGrid);

const sizeButton = document.querySelector('#size-btn');
sizeButton.addEventListener('click', changeSize);

const greyButton = document.querySelector('#grey-btn');
greyButton.addEventListener('click', useGreyScale);

const rainbowButton = document.querySelector('#rainbow-btn');
rainbowButton.addEventListener('click', useRainbow);

const blackButton = document.querySelector('#black-btn');
blackButton.addEventListener('click', useBlack);
