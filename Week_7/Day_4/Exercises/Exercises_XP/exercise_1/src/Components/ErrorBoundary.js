import { Component } from "react";

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: '',
            infoError: '',
            hasError: false
        };
    }

    componentDidCatch(error, infoError) {
        this.setState({
            error: error,
            infoError: infoError
        });
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return <h1>An error has occured</h1>
        }

        return this.props.children;
    }

}
