import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

import "./style.css";

const useClick = (onClick) => {
  const element = useRef();
  useEffect(() => {
    if (typeof onClick !== "function") {
      return;
    }
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);
  return element;
};
// element를 return하여 App() 안에 넣어주고 useCLick안에 eventListener를 생성해 줬다.
const App = () => {
  // const cake = useRef(); // 요소를 선택할수있게하는 방법
  // setTimeout(() => cake.current.focus(), 3000);
  const sayHello = () => console.log("반갑습니다");
  const title = useClick(sayHello);
  return (
    <div className="App">
      <h1 ref={title}>안녕하세요</h1>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
