import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

import "./style.css";

const useFullscreen = () => {
  const element = useRef();
  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullscreen();
    }
  };
  const exitFull = () => {
    document.exitFullscreen();
  };
  return { element, triggerFull, exitFull };
};

const App = () => {
  const { element, triggerFull, exitFull } = useFullscreen();
  return (
    <div className="App">
      <div ref={element}>
        <img
          alt="imgee"
          src="http://image.cine21.com/resize/cine21/still/2018/1121/19_06_16__5bf52e186f884[W578-].jpg"
        />
        <button onClick={triggerFull}>전체화면</button>
        <button onClick={exitFull}>전체화면종료</button>
      </div>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
