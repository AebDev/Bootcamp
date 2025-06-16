import React from 'react';
import "./Exercise.css";

const style_header = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
};

class Exercise extends React.Component {
    render() {
        return (
            <div>
                <h1 style={style_header}>This is Header</h1>
                <p className="para">This is paragraph</p>
                <a href="https://www.google.com/">This is link</a>
                <form action="">
                    <label htmlFor="name">Enter your name:</label>
                    <input type="text" name="name" />
                    <button type="Submit">Submit</button>
                </form>
                <img
                    width="400px"
                    src="https://www.goodworklabs.com/wp-content/uploads/2016/10/reactjs.png"
                    alt="React JS"
                />
                <ul>
                    This is a List
                    <li>Coffee</li>
                    <li>Tea</li>
                    <li>Milk</li>
                </ul>
            </div>
        );
    }
}

export default Exercise