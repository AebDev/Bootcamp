const game = document.getElementById("game");
const start = document.getElementById("start");
const form = document.getElementById("quizForm");
const questionElement = document.getElementById("question"); // renamed to questionElement
const answer = document.getElementById("answer");
const submit = document.getElementById("submit");
const message = document.getElementById("message");
const scoreText = document.getElementById("scoreText");
const score = document.getElementById("score");

const url = "http://localhost:3000";

const startGame = async () => {
    try {
        await getQuestion();

        start.style.display = "none";
        form.style.display = "block";
    } catch (err) {
        console.error("Failed to load question:", err);
    }
};

const getQuestion = async () => {
    try {
        const res = await fetch(`${url}/quiz`);

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        questionElement.textContent = data.question;
    } catch (err) {
        console.error("Error fetching question:", err.message);
    }
};

const submitAnswer = async () => {

    try {
        const res = await fetch(`${url}/quiz`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ answer: answer.value }),
        });

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        console.log(data);
        message.textContent = data.message;
        next(data);
    }
    catch (err) {
        console.error("Error submitting answer:", err.message);
    }
}

const getScore = async () => {
    try {
        const res = await fetch(`${url}/quiz/score`);

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        form.style.display = "none";
        score.textContent = data;
        scoreText.style.display = "block";
    } catch (err) {
        console.error("Error fetching score:", err.message);
    }
};


const next = (data) => {
    if (data.answer) {
        console.log("bravo");
        setTimeout(() => {
            answer.value = "";
            message.textContent = "";
            getQuestion();
        }, 1000);
    }

    else {
        console.log("merde");
        setTimeout(() => {
            answer.value = "";
            message.textContent = "";
            getScore();
        }, 1000);
    }

};


start.addEventListener("click", startGame);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    submitAnswer();
});