import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

import "./style.css";

const useFullscreen = (callback) => {
  const element = useRef();
  const runCb = (isFull) => {
    if (callback && typeof callback === "function") {
      callback(isFull);
    }
  };
  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullscreen();
    } else if (element.current.mozRequestFullScreen) {
      // 파이어폭스
      element.current.mozRequestFullScreen();
    } else if (element.current.webkitRequestFullScreen) {
      // 웹
      element.current.webkitRequestFullScreen();
    } else if (element.current.msRequestFullScreen) {
      // 마이크로소프트
      element.current.msRequestFullScreen();
    }
    runCb(true);
  };
  const exitFull = () => {
    document.exitFullscreen();
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      // 파이어폭스
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullScreen) {
      // 웹
      document.webkitExitFullScreen();
    } else if (document.msExitFullScreen) {
      // 마이크로소프트
      document.msExitFullScreen();
    }
    runCb(false);
  };
  return { element, triggerFull, exitFull };
};

const App = () => {
  const onFullS = (isFull) => {
    console.log(isFull ? "전체화면입니다." : "전체화면취소했습니다.");
  };
  const { element, triggerFull, exitFull } = useFullscreen(onFullS);
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
