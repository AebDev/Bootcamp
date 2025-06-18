import React from "react";

class Color extends React.Component {
    constructor(props) {
        super(props);
        this.state = { favoriteColor: 'red' };
    }

    componentDidMount() {
        alert("componentDidMount reached");
        this.setState({ favoriteColor: 'yellow' });
    }

    changeColor = () => this.setState({ favoriteColor: 'blue' });


    shouldComponentUpdate() {
        return true;
    }

    componentDidUpdate() {
        console.log("after update");
    }

    getSnapshotBeforeUpdate() {
        console.log("in getSnapshotBeforeUpdate");
    }

    render() {
        return (
            <>
                <h1>My Favorite Color is {this.state.favoriteColor}</h1>
                <button onClick={this.changeColor}>Change Color</button>
            </>
        );
    }
}

export default Color;