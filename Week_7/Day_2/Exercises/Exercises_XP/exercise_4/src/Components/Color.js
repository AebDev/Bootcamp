const { useState, useEffect } = require("react")

const Color = () => {
    const [favoriteColor, setFavoriteColor] = useState('red');

    useEffect(() => {
        alert("useEffect reached");
        setFavoriteColor('yellow');
    }, []);

    const changeColor = () => setFavoriteColor('blue');

    return (
        <>
            <h1>My Favorite Color is {favoriteColor}</h1>
            <button onClick={changeColor}>Change Color</button>
        </>
    );
}

export default Color;