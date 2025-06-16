const { v4: uuidv4 } = require('uuid');

// Game configuration
const GRID_SIZE = 10;
const OBSTACLE_COUNT = 5;

// Initialize game state
let games = {};

// Create game board with obstacles
function createBoard() {
    const board = Array(GRID_SIZE).fill().map(() =>
        Array(GRID_SIZE).fill(null)
    );

    // Place obstacles
    for (let i = 0; i < OBSTACLE_COUNT; i++) {
        let obstaclePlaced = false;
        while (!obstaclePlaced) {
            const x = Math.floor(Math.random() * GRID_SIZE);
            const y = Math.floor(Math.random() * GRID_SIZE);
            if (board[x][y] === null) {
                board[x][y] = 'obstacle';
                obstaclePlaced = true;
            }
        }
    }

    return board;
}

// Create new game
function createGame(player1, player2) {
    const gameId = uuidv4();

    const game = {
        id: gameId,
        players: {
            [player1]: { position: { x: 0, y: 0 }, base: { x: 0, y: 0 }, isAlive: true },
            [player2]: { position: { x: GRID_SIZE - 1, y: GRID_SIZE - 1 }, base: { x: GRID_SIZE - 1, y: GRID_SIZE - 1 }, isAlive: true }
        },
        board: createBoard(),
        currentTurn: player1,
        status: 'active'
    };

    games[gameId] = game;
    return game;
}

// Handle player movement
function makeMove(game, player, direction) {
    const playerData = game.players[player];
    if (!playerData || !playerData.isAlive) {
        throw new Error('Player not in game or eliminated');
    }

    const { x, y } = playerData.position;
    const { x: baseX, y: baseY } = playerData.base;
    const opponent = Object.keys(game.players).find(p => p !== player);
    const opponentData = game.players[opponent];

    // Calculate new position
    let newX = x, newY = y;
    switch (direction) {
        case 'up': newX = x - 1; break;
        case 'down': newX = x + 1; break;
        case 'left': newY = y - 1; break;
        case 'right': newY = y + 1; break;
        default: throw new Error('Invalid direction');
    }

    // Validate move
    if (newX < 0 || newX >= GRID_SIZE || newY < 0 || newY >= GRID_SIZE) {
        throw new Error('Move out of bounds');
    }

    if (game.board[newX][newY] === 'obstacle') {
        throw new Error('Cannot move through obstacle');
    }

    // Check if adjacent to opponent base
    const isAdjacentToBase = Math.abs(newX - opponentData.base.x) + Math.abs(newY - opponentData.y) === 1;
    if (isAdjacentToBase) {
        // Attack logic - for simplicity, capture base on next move
        game.players[opponent].isAlive = false;
        game.status = 'ended';
        return { success: true, gameState: game, message: 'Base captured!' };
    }

    // Update player position
    playerData.position = { x: newX, y: newY };
    game.currentTurn = opponent;

    return { success: true, gameState: game };
}

module.exports = {
    createGame,
    makeMove
};
