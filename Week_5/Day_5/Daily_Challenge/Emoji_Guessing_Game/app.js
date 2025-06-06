const EmojiManager = require("./data/EmojiManager");
const express = require('express');

const app = express();
const player = {
    emoji: EmojiManager.getRandomEmoji().emoji,
    name: "Player",
    score: 0
}

app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {

    res.sendFile('public/index.html');
});

app.get('/emoji', (req, res) => {
    const emoji = EmojiManager.getRandomEmoji();
    const names = EmojiManager.getFalseNames(emoji).concat(emoji.name);
    names.sort();
    res.status(200).json({ player: player, emoji: emoji.emoji, names: names });
}
);

app.post('/', (req, res) => {

    const guess = req.body.guess;
    const emoji = req.body.emoji;
    if (EmojiManager.checkGuess(emoji, guess)) {
        player.score++;
        res.json({ message: 'Correct!', score: player.score });
    } else {
        res.json({ message: 'Incorrect!', score: player.score });
    }

});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
