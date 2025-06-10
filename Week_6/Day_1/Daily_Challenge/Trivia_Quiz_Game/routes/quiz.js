const triviaQuestions = [
    {
        question: "What is the capital of France?",
        answer: "Paris",
    },
    {
        question: "Which planet is known as the Red Planet?",
        answer: "Mars",
    },
    {
        question: "What is the largest mammal in the world?",
        answer: "Blue whale",
    },
];
let score = 0;
const express = require("express");
const router = express.Router();

router.get("/quiz", (req, res) => {
    return res.json(triviaQuestions[score]);
});
router.post("/quiz", (req, res) => {
    const userAnswer = req.body.answer;
    if (triviaQuestions[score].answer.toLowerCase() != userAnswer.toLowerCase().trim()) {
        return res.status(200).json({
            answer: false,
            message: 'Incorrect',
            score: score,
            next: "/quiz/score"
        });
    }
    else {
        score++;
        if (score == triviaQuestions.length) {
            return res.status(200).json({
                answer: true,
                message: 'Correct',
                next: "/quiz/score"
            });
        }
        else {
            return res.status(200).json({
                answer: true,
                message: 'Correct',
                next: "/quiz"
            });
        }
    }
});
router.get("/quiz/score", (req, res) => {
    console.log(score);
    return res.json(score);
});

module.exports = router;