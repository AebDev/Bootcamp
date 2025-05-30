const board = document.getElementById('game-board');
const statusText = document.getElementById('status');
const resetButton = document.getElementById('reset-button');

let gameState = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let isGameActive = true;

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const renderBoard = () => {
    board.innerHTML = '';
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.textContent = gameState[i];

        cell.setAttribute('data-cell-index', i);
        cell.addEventListener('click', () => {
            if (currentPlayer === 'X' && isGameActive) {
                makeMove(i)
            }
        });
        board.appendChild(cell);
    }
};

const handleResultValidation = () => {
    let winner = checkWin();

    if (winner) {
        statusText.textContent = winner === 'X' ? 'You Won!' : 'AI  won!';
        isGameActive = false;
        highlightWinningCells(winner);
        return;
    }


    if (!gameState.includes('')) {
        statusText.textContent = 'It\'s a tie!';
        isGameActive = false;
        return;
    }
};

const highlightWinningCells = (winner) => {
    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (gameState[a] === winner && gameState[b] === winner && gameState[c] === winner) {
            document.querySelector(`[data-cell-index="${a}"]`).classList.add('winning-cell');
            document.querySelector(`[data-cell-index="${b}"]`).classList.add('winning-cell');
            document.querySelector(`[data-cell-index="${c}"]`).classList.add('winning-cell');
            break;
        }
    }
};


const makeMove = (cellIndex) => {
    if (gameState[cellIndex] === '' && isGameActive) {
        gameState[cellIndex] = currentPlayer;
        renderBoard();
        handleResultValidation();

        if (isGameActive) {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            statusText.textContent = currentPlayer === 'X' ? 'Your turn' : 'AI\'s turn';

            if (currentPlayer === 'O') {

                setTimeout(() => {
                    makeMove(getComputerMove());
                }, 500);
            }
        }
    }
};

const getComputerMove = () => {
    // 1. Check if the computer can win in the next move
    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        const potentialWin = [gameState[a], gameState[b], gameState[c]];

        if (potentialWin.filter(cell => cell === 'O').length === 2 && potentialWin.includes('')) {
            const emptyCellIndex = combination.find(index => gameState[index] === '');
            if (emptyCellIndex !== undefined) {
                return emptyCellIndex;
            }
        }
    }


    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        const potentialBlock = [gameState[a], gameState[b], gameState[c]];

        if (potentialBlock.filter(cell => cell === 'X').length === 2 && potentialBlock.includes('')) {
            const emptyCellIndex = combination.find(index => gameState[index] === '');
            if (emptyCellIndex !== undefined) {
                return emptyCellIndex;
            }
        }
    }

    if (gameState[4] === '') {
        return 4;
    }


    const corners = [0, 2, 6, 8];
    const availableCorners = corners.filter(index => gameState[index] === '');
    if (availableCorners.length > 0) {
        return availableCorners[Math.floor(Math.random() * availableCorners.length)];
    }


    const sides = [1, 3, 5, 7];
    const availableSides = sides.filter(index => gameState[index] === '');
    if (availableSides.length > 0) {
        return availableSides[Math.floor(Math.random() * availableSides.length)];
    }

    return -1;
};

const checkWin = () => {
    for (let i = 0; i < winningCombinations.length; i++) {
        const [a, b, c] = winningCombinations[i];
        if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
            return gameState[a];
        }
    }
    return null;
};

const resetGame = () => {
    gameState = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    isGameActive = true;
    statusText.textContent = 'Your turn';
    renderBoard();

    document.querySelectorAll('.cell').forEach(cell => {
        cell.classList.remove('winning-cell');
    });
};


renderBoard();
resetButton.addEventListener('click', resetGame);
statusText.textContent = 'Your turn';