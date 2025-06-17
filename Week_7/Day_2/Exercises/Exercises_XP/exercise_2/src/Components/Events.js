import { useState } from "react";

const Events = () => {
    const clickMe = () => alert('i was clicked');
    const handleKeyDown = (e) => e.key == 'Enter' ? alert(`The ${e.key} key was pressed,your input is: ${e.target.value}`) : null;
    const [isToggleOn, setIsToggleOn] = useState('True');
    const toggle = () => {
        setIsToggleOn(!isToggleOn);
        const message = isToggleOn === true ? 'ON' : 'OFF';
        alert(message);
    }
    return (
        <>
            <button onClick={clickMe}>click me</button>
            <input type="text" onKeyDown={handleKeyDown} placeholder="Press the Enter key!" />
            <button onClick={toggle}>toggle</button>
        </>
    );
}

export default Events;