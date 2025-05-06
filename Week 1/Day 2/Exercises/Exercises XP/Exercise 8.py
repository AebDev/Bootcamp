data = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]

def ask_question(question, answer):
    user_answer = input(question + " ").strip().lower()
    if user_answer == answer.lower():
        print("Correct!")
        return True
    else:
        print(f"Incorrect! The correct answer is: {answer}")
        return False
    

print("Welcome to the Star Wars quiz!")

for item in data:
    ask_question(item["question"], item["answer"])