const express = require('express');
module.exports = function () {
    const router = express.Router();
    const gameModel = require('../models/gameModel');

    // Initialize game state
    let gameState = null;

    // Start new game
    router.post('/start', (req, res) => {
        const { player1, player2 } = req.body;
        if (!player1 || !player2) {
            return res.status(400).json({ error: 'Both player names required' });
        }

        gameState = gameModel.createGame(player1, player2);
        res.json({ success: true, gameState });
    });

    // Make move
    router.post('/move', (req, res) => {
        const { player, direction } = req.body;
        if (!gameState) {
            return res.status(400).json({ error: 'No active game' });
        }

        if (gameState.currentTurn !== player) {
            return res.status(400).json({ error: 'Not your turn' });
        }

        try {
            const result = gameModel.makeMove(gameState, player, direction);
            res.json(result);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    });

    // Attack base
    router.post('/attack', (req, res) => {
        const { player } = req.body;
        if (!gameState) {
            return res.status(400).json({ error: 'No active game' });
        }

        if (gameState.currentTurn !== player) {
            return res.status(400).json({ error: 'Not your turn' });
        }

        try {
            const opponent = Object.keys(gameState.players).find(p => p !== player);
            const playerData = gameState.players[player];
            const opponentData = gameState.players[opponent];

            // Check if adjacent to opponent base
            const isAdjacentToBase = Math.abs(playerData.position.x - opponentData.base.x) +
                Math.abs(playerData.position.y - opponentData.base.y) === 1;

            if (isAdjacentToBase) {
                gameState.players[opponent].isAlive = false;
                gameState.status = 'ended';
                return res.json({ success: true, gameState, message: 'Base captured!' });
            } else {
                return res.json({ success: false, message: 'Not adjacent to base' });
            }
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    });

    // Get game status
    router.get('/status', (req, res) => {
        if (!gameState) {
            return res.status(404).json({ error: 'No active game' });
        }
        res.json({ gameState });
    });

    return router;
}
