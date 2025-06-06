const emojis = [
    {
        emoji: "🐶",
        name: "dog"
    },
    {
        emoji: "🐱",
        name: "cat"
    },
    {
        emoji: "🐰",
        name: "rabbit"
    },
    {
        emoji: "🐭",
        name: "mouse"
    },
    {
        emoji: "🐹",
        name: "hamster"
    },
    {
        emoji: "🐨",
        name: "koala"
    },
    {
        emoji: "🐯",
        name: "tiger"
    },
    {
        emoji: "🐮",
        name: "cow"
    },
    {
        emoji: "🐷",
        name: "pig"
    },
    {
        emoji: "🐸",
        name: "frog"
    },
    {
        emoji: "🐵",
        name: "monkey"
    },
    {
        emoji: "🐔",
        name: "chicken"
    },
    {
        emoji: "🐦",
        name: "bird"
    },
    {
        emoji: "🐥",
        name: "penguin"
    },
    {
        emoji: "🐙",
        name: "octopus"
    },
    {
        emoji: "😀",
        name: "smile"
    },
    {
        emoji: "😊",
        name: "laugh"
    },
    {
        emoji: "😍",
        name: "heart"
    },
    {
        emoji: "😎",
        name: "sunglasses"
    },
    {
        emoji: "😡",
        name: "angry"
    },
    {
        emoji: "😭",
        name: "cry"
    },
    {
        emoji: "😏",
        name: "smirk"
    },
    {
        emoji: "😒",
        name: "unhappy"
    },
    {
        emoji: "😘",
        name: "kiss"
    },
    {
        emoji: "😜",
        name: "wink"
    },
    {
        emoji: "😝",
        name: "laughing"
    },
    {
        emoji: "😞",
        name: "sad"
    },
    {
        emoji: "😛",
        name: "blush"
    },
    {
        emoji: "😗",
        name: "kissing"
    }
];

const getRandomEmoji = () => emojis[Math.floor(Math.random() * emojis.length)];

const getFalseNames = (emoji) => {
    let emoji1 = getRandomEmoji();
    let emoji2 = getRandomEmoji();
    while (emoji.name === emoji1.name || emoji.name === emoji2.name || emoji1.name === emoji2.name) {
        emoji1 = getRandomEmoji();
        emoji2 = getRandomEmoji();
    }
    return [emoji1.name, emoji2.name];
}

const checkGuess = (emoji, name) => emojis.some((e) => e.name === name && e.emoji === emoji);
module.exports = { getRandomEmoji, getFalseNames, checkGuess };