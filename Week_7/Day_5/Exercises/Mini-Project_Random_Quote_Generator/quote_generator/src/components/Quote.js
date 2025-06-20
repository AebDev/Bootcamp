import React, { useState } from "react";

const Quote = ({ quote, author, handleClick, displayColor }) => {
    const [color, setColor] = useState(displayColor());

    const changeBackgroundColor = () => {
        const newColor = displayColor();
        setColor(newColor);
        document.documentElement.style.backgroundColor = newColor;
    };

    return (
        <div style={{ backgroundColor: "white" }} className="quotebox">
            <div className="fadeIn" key={Math.random()} style={{ color: color }}>
                <h1 id="quote"> "{quote}" </h1>
                <h5 id="author"> -{author ? author : "Unknown"} - </h5>
            </div>
            <button
                style={{ backgroundColor: color }}
                id="newquote"
                onClick={() => {
                    handleClick();
                    changeBackgroundColor();
                }}
            >
                New quote
            </button>
        </div>
    );
};

export default Quote;