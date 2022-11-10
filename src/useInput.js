import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

// hook 을 사용하면 function 안에서 event 를 처리할수있음
const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e) => {
    console.log(e.target);
  };
  return { value }; // 어떤 변화를 주기전에 기본값(Mr.kim)을 value와 함께 return
};

const App = () => {
  const name = useInput("Mr.kim");
  return (
    <div className="App">
      <h1>Hello</h1>
      <input
        placeholder="Name"
        {...name} /* === value={name.value} onChange={name.onChange}*/
      />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
