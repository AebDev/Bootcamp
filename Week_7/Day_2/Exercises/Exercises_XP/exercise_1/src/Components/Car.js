import { useState } from "react";
import Garage from "./Garage";


const Car = (props) => {

    const { model } = props;
    const [color, setColor] = useState('');
    return (
        <>
            <Garage size="small" />
            <h1>This car is {color} {model}</h1>
        </>
    );
}

export default Car;