const ShowComponent = (props) => {
    return (
        <>
            <h2>Entered information:</h2>
            <div className="info">
                <p>Your name:</p>
                <p>{props.firstName} {props.lastName}</p>
            </div>
            <div className="info">
                <p>Your age:</p>
                <p>{props.age}</p>
            </div>
            <div className="info">
                <p>Your gender: </p>
                <p>{props.gender}</p>
            </div>
            <div className="info">
                <p>Your destination: </p>
                <p>{props.destination}</p>
            </div>
            <div>
                <p>our dietary restrictions: </p>
                <div className="info">
                    <p>**Nuts free</p>
                    <p>{props.restrictions.some(item => item === "Nuts free") ? 'Yes' : 'No'}</p>
                </div>
                <div className="info">
                    <p>**Lactose free</p>
                    <p>{props.restrictions.some(item => item === "Lactose free") ? 'Yes' : 'No'}</p>
                </div>
                <div className="info">
                    <p>**Vegan meal</p>
                    <p>{props.restrictions.some(item => item === "Vegan") ? 'Yes' : 'No'}</p>
                </div>
            </div>
        </>
    );
}

export default ShowComponent;