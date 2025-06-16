// Client-side game logic
document.addEventListener('DOMContentLoaded', () => {
    const setupForm = document.getElementById('setup');
    const gameContainer = document.getElementById('game-container');
    const gameBoard = document.getElementById('game-board');
    const currentTurn = document.getElementById('current-turn');
    const statusText = document.getElementById('status');
    const playerNameInput = document.getElementById('player-name');
    const moveButtons = document.querySelectorAll('#controls button');

    let playerName = null;
    let gameId = null;

    // Initialize game
    setupForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        playerName = document.getElementById('player1').value.trim();
        const player2Name = document.getElementById('player2').value.trim();
        if (!playerName || !player2Name) {
            alert('Please enter both player names');
            return;
        }

        // Start new game
        try {
            const response = await fetch('/api/game/start', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ player1: playerName, player2: player2Name })
            });
            const data = await response.json();
            if (data.success) {
                gameId = data.gameState.id;
                setupForm.style.display = 'none';
                gameContainer.style.display = 'block';
                pollGameStatus();
            }
        } catch (err) {
            statusText.textContent = 'Error starting game';
            console.error(err);
        }
    });

    // Handle movement
    moveButtons.forEach(button => {
        button.addEventListener('click', async () => {
            if (!playerName || !gameId) return;

            try {
                const response = await fetch('/api/game/move', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ player: playerName, direction: button.id })
                });
                const data = await response.json();
                if (data.success) {
                    updateUI(data.gameState);
                }
            } catch (err) {
                statusText.textContent = err.message;
            }
        });
    });

    // Poll for game updates
    function pollGameStatus() {
        if (!gameId) return;

        fetch(`/api/game/status`)
            .then(res => res.json())
            .then(data => {
                if (data.gameState) {
                    updateUI(data.gameState);
                }
                setTimeout(pollGameStatus, 3000); // Poll every 3 seconds
            })
            .catch(err => {
                console.error('Status poll error:', err);
                setTimeout(pollGameStatus, 5000);
            });
    }

    // Update UI with game state
    function updateUI(gameState) {
        if (!gameState) return;

        // Update turn indicator
        currentTurn.textContent = gameState.currentTurn;

        // Update status message
        statusText.textContent = gameState.message || '';

        // Render game board
        gameBoard.innerHTML = '';
        gameBoard.style.gridTemplateColumns = `repeat(${gameState.board.length}, 40px)`;

        gameState.board.forEach((row, x) => {
            row.forEach((cell, y) => {
                const cellDiv = document.createElement('div');
                cellDiv.className = 'cell';

                // Add player positions
                if (gameState.players[playerName].position.x === x &&
                    gameState.players[playerName].position.y === y) {
                    cellDiv.classList.add('player1');
                    cellDiv.textContent = 'You';
                } else {
                    const opponent = Object.keys(gameState.players).find(p => p !== playerName);
                    if (gameState.players[opponent].position.x === x &&
                        gameState.players[opponent].position.y === y) {
                        cellDiv.classList.add('player2');
                        cellDiv.textContent = opponent;
                    }
                }

                // Add obstacles
                if (cell === 'obstacle') {
                    cellDiv.classList.add('obstacle');
                }

                gameBoard.appendChild(cellDiv);
            });
        });

        // Update player status indicators
        const player1Status = document.getElementById('player1-status');
        const player2Status = document.getElementById('player2-status');
        if (player1Status && player2Status) {
            player1Status.textContent = gameState.players.player1.isAlive ? 'Active' : 'Eliminated';
            player1Status.className = gameState.players.player1.isAlive ? 'status-active' : 'status-eliminated';
            player2Status.textContent = gameState.players.player2.isAlive ? 'Active' : 'Eliminated';
            player2Status.className = gameState.players.player2.isAlive ? 'status-active' : 'status-eliminated';
        }

        // Enable buttons only for current player
        const isCurrentPlayer = gameState.players[gameState.currentTurn]?.isAlive;
        moveButtons.forEach(btn => {
            btn.disabled = !isCurrentPlayer || gameState.currentTurn !== playerName;
        });
    }
});
