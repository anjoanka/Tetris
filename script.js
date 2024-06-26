const PLAYFILED_COLUMNS = 10;
const PLAYFILED_ROWS = 20;

const TETROMINO_NAME = [
    'O'
]

const TETROMINOES = {
    'O' : [
            [1]
        ]
}

let tetromino = {
    name: '',
    matrix: [],
    column: 0,
    row: 0,

}

function generateTetromino() {
    const name = TETROMINO_NAME[0];
    const matrix = TETROMINOES[0];

    const columnTetro = 4;
    const rowTetro = 5;

    tetromino = {
        name: nameTetro,
        matrix: matrix,
        column: columnTetro,
        row: rowTetro,

    }
}


function drawTetromino() {
    const name = tetromino.name;
    const tetrominoMatrixSize = tetromino.matrix.length;
}

function generatePlayfield() {
    for(let i = 0; i < PLAYFILED_COLUMNS * PLAYFILED_ROWS; i++) {
        const div = document.createElement('div');
        document.querySelector('.tetris').append(div);
    }
}

generatePlayfield();
generateTetromino();