const quotes = [
    {
        id: 0,
        author: "Charles Lindbergh",
        quote: "Life is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance."
    },
    {
        id: 1,
        author: "Albert Einstein",
        quote: "Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world, stimulating progress, giving birth to evolution."
    },
    {
        id: 2,
        author: "Maya Angelou",
        quote: "Try to be a rainbow in someone's cloud."
    },
    {
        id: 3,
        author: "Nelson Mandela",
        quote: "It always seems impossible until it's done."
    },
    {
        id: 4,
        author: "Eleanor Roosevelt",
        quote: "The future belongs to those who believe in the beauty of their dreams."
    },
    {
        id: 5,
        author: "Steve Jobs",
        quote: "Your time is limited, so don't waste it living someone else's life."
    }
];


const generateQuote = () => {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    const id = document.querySelector('.quote-text').getAttribute('data-id');

    while (id == quotes[randomIndex].id) {
        randomIndex = Math.floor(Math.random() * quotes.length);
    }

    const randomQuote = quotes[randomIndex];
    const quoteBox = document.querySelector('.quote-box');
    quoteBox.innerHTML = `
        <p class="quote-text" data-id="${randomQuote.id}"><span class="quotation-mark">“</span>${randomQuote.quote}</p>
        <p class="author">- ${randomQuote.author}</p>
    `;
};

const generateBtn = document.querySelector('.generate-btn');
generateBtn.addEventListener('click', generateQuote);

