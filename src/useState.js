import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const App = () => {
  // reactHook을 사용 했을떄
  const [item, setItem] = useState(1);
  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);
  return (
    <div className="App">
      <h1>Hello {item}</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={incrementItem}>IncrementItem</button>
      <button onClick={decrementItem}>DecrementItem</button>
    </div>
  );
};

class AppUgly extends React.Component {
  // reactHook을 사용 안했을때
  state = {
    item: 1,
  };
  render() {
    const { item } = this.state;
    return (
      <div className="App">
        <h1>Hello {item}</h1>
        <h2>Start editing to see some magic happen!</h2>
        <button onClick={this.incrementItem}>IncrementItem</button>
        <button onClick={this.decrementItem}>DecrementItem</button>
      </div>
    );
  }
  incrementItem = () => {
    this.setState((state) => {
      return {
        item: state.item + 1,
      };
    });
  };
  decrementItem = () => {
    this.setState((state) => {
      return {
        item: state.item - 1,
      };
    });
  };
}

const rootElement = document.getElementById("root");
ReactDOM.render(<AppUgly />, rootElement);
