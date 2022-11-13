import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

import "./style.css";

const usePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault();
    event.returnValue = "";
  };
  const enablePrevent = () => window.addEventListener("beforeunload", listener);    // 사이트 로드 add이벤트
  const disablePrevent = () =>  // 사이트 로드 remove이벤트
    window.removeEventListener("beforeunload", listener);
  return { enablePrevent, disablePrevent };
};

const App = () => {
  const { enablePrevent, disablePrevent } = usePreventLeave();
  return (
    <div className="App">
      <button onClick={enablePrevent}>Product</button>
      <button onClick={disablePrevent}>unProduct</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
