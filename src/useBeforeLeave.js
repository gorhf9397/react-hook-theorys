import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

import "./style.css";

const useBeforeLeave = (onBefore) => {
  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
  if (typeof onBefore !== "function") {
    return;
  }
  const handle = (e) => {
    const { clientY } = e;
    if (clientY <= 0) {
      onBefore();
    }
    // console.log(e);
    //onBefore();
  };
};

const App = () => {
  const begForLife = () => console.log("떠나지마시오.");
  useBeforeLeave(begForLife);
  return (
    <div className="App">
      <h1>안녕하세요</h1>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
