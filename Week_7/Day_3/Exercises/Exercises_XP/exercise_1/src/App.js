import React from 'react';
import './App.css';
import ErrorBoundary from './ErrorBoundary';

function App() {
  return (
    <div className="app">
      <h4>Click on the numbers to increase the counters.
        The counter is programmed to throw error when it reaches 5. This simulates a JavaScript error in a component.</h4>

      <ErrorBoundary>
        <BuggyCounter />
        <BuggyCounter />
      </ErrorBoundary>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      <BuggyCounter />
    </div>
  );
}

class BuggyCounter extends React.Component {

  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  handleClick = () => {
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    if (this.state.counter >= 5)
      throw new Error('I crashed!');


    return <h1 onClick={this.handleClick}>{this.state.counter}</h1>
  }

}
export default App;
