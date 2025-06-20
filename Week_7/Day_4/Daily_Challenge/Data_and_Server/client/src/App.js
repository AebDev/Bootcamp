import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      response: ''
    }
  }

  componentDidMount() {
    const getMessage = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/hello');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        this.setState({ message: data.message });
      } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
      }
    }

    getMessage();
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const post = e.target.message.value;
      const response = await fetch("http://localhost:5000/api/world", {
        "method": "POST",
        "headers": {
          "Content-Type": "application/json"
        },
        "body": JSON.stringify({ post })

      });
      if (!response)
        throw new Error("Network response was not ok");

      const data = await response.json();
      this.setState({ response: data.message });
      e.target.reset();
    } catch (error) {
      console.log(error.message);
    }

  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.message}</h1>
        <h2>Post to Server</h2>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="message" required />
          <button type='submit'>Submit</button>
        </form>
        <p>{this.state.response}</p>
      </div>
    );
  }
}
export default App;
