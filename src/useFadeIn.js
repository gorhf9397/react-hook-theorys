import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

import "./style.css";

const useFadeIn = (duration = 1, delay = 0) => {
  const element = useRef();
  useEffect(() => {
    console.log("H1", duration, "P", delay);
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s`; //원래는 ease-in-out ${delay}s` 형태도 추가 됏으나 적용이 안댐.
      current.style.opacity = 1;
    }
  }, [duration, delay]); // fadein 에 요소를 배열에 넣어줘 한번씩만 실행하게 변경
  if (typeof duration !== "number" || typeof delay !== "number") {
    return;
  }
  return { ref: element, style: { opacity: 0 } };
};

const App = () => {
  const fadeInH1 = useFadeIn(2, 4);
  const fadeInP = useFadeIn(5, 6);
  return (
    <div className="App">
      <h1 {...fadeInH1}>안녕하세요</h1>
      <p {...fadeInP}>하하하하하하</p>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
