const board = document.querySelector('#board');
const squaresNumber = +prompt('Введите количество ячеек игрового поля (от 100 до 1000)', '');
const typeColor = prompt('Введите цвет - pink, blue или green', '');
const pinkColors = ['#CC66FF', '#CC33FF', '#CC00FF', '#9900CC', '#996699', '#660066'];
const blueColors = ['#000080', '#00008B', '#0000CD', '#0000FF', '#1E90FF'];
const greenColors = ['#006400', '#008000', '#008080', '#00FF00', '#228B22'];


for (let i = 0; i < squaresNumber; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseover', () => {
        setColor(square);
    });

    square.addEventListener('mouseleave', () => {
        removeColor(square);
    })

    board.append(square);
}

function setColor(element) {
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
    if (typeColor === 'pink') {
        const index = Math.floor(Math.random() * pinkColors.length);
        return pinkColors[index];
    } else if (typeColor === 'green') {
        const index = Math.floor(Math.random() * greenColors.length);
        return greenColors[index];
    } else if (typeColor === 'blue') {
        const index = Math.floor(Math.random() * blueColors.length);
        return blueColors[index];
    } else {
        console.log('error');
    }
}