let currentEmoji = '';

function loadNewQuestion() {
    fetch('/emoji')
        .then(res => res.json())
        .then(data => {
            currentEmoji = data.emoji;
            document.getElementById('emoji').textContent = currentEmoji;
            document.getElementById('score').textContent = 'Score: ' + data.player.score;

            const optionsContainer = document.getElementById('options');
            optionsContainer.innerHTML = '';
            data.names.forEach(name => {
                const btn = document.createElement('button');
                btn.textContent = name;
                btn.onclick = () => submitGuess(name);
                optionsContainer.appendChild(btn);
            });
        });
}

function submitGuess(guess) {
    fetch('/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ guess: guess, emoji: currentEmoji })
    })
        .then(res => res.json())
        .then(feedback => {

            document.getElementById('feedback').textContent = feedback.message;


            document.getElementById('score').textContent = 'Score: ' + feedback.score;


            setTimeout(() => {
                document.getElementById('feedback').textContent = '';
                loadNewQuestion();
            }, 1000);
        })
        .catch(err => {
            console.error("Error submitting guess:", err);
            document.getElementById('feedback').textContent = 'Oops! Something went wrong.';
        });
}


loadNewQuestion();