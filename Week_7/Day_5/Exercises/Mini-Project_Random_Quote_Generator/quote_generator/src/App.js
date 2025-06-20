import React, { useState } from "react";
import QuoteAndAuthor from "./components/Quote.js";
import quotes from './data/QuotesDatabase.js';
import "./App.css";


const App = () => {
  const [quote, setQuote] = useState(quotes[0].quote);
  const [author, setAuthor] = useState(quotes[0].author);

  const randomQuote = () => {
    const randomNumber = Math.floor(Math.random() * quotes.length);
    return quotes[randomNumber];
  };

  const shuffleQuotes = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const handleClick = () => {
    const generateRandomQuote = randomQuote();
    setQuote(generateRandomQuote.quote);
    setAuthor(generateRandomQuote.author);
    shuffleQuotes(quotes);
  };

  const randomColor = () => {
    return `rgb(
      ${Math.floor(Math.random() * 155)},
      ${Math.floor(Math.random() * 155)},
      ${Math.floor(Math.random() * 155)})`;
  };

  return (
    <div>
      <QuoteAndAuthor
        displayColor={randomColor}
        handleClick={handleClick}
        quote={quote}
        author={author}
      />
    </div>
  );
}



export default App;