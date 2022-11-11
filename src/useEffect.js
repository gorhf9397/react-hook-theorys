import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import "./style.css";

const App = () => {
  const sayHello = () => {
    console.log("hello");
  };
  const [number, setNumber] = useState(0);
  const [aNumber, setAnumber] = useState(0);
  useEffect(sayHello, [aNumber]); // [ ] 안에 들어가는 함수만 호출가능
  console.log(number);
  return (
    <div className="App">
      <div>안녕하세요</div>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setAnumber(aNumber + 1)}>{aNumber}</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
