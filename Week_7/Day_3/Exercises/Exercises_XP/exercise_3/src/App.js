import Color from './Components/Color';
import './App.css';
import { useState, Component } from 'react';

function App() {
  const [show, setShow] = useState(true);
  const showHandler = () => setShow(false);
  return (
    <>
      {show ? <Child setShow={setShow} /> : null}
      <button onClick={showHandler}>Delete Header</button>
      <Color />
    </>

  );
}

class Child extends Component {

  // constructor(props) {
  //   super(props);

  //   this.showHandler = this.showHandler.bind(this);
  // }

  componentWillUnmount() {
    alert('Header is abou to be Unmounted');
  }
  // showHandler() {
  //   this.props.setShow(false);
  // }
  render() {
    return (
      <>
        <h1>Hello World!</h1>
        {/* <button onClick={this.showHandler}>Delete Header</button> */}
      </>
    );
  }
}

export default App;
