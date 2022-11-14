import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

import "./style.css";
// useNotification : 웹을통해 시스템에 알람을 뜨게 하는 HOOK
const useNotification = (title, options) => {
  if (!("Notification" in window)) {
    return;
  }
  const fireNotif = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  };
  return fireNotif;
};

const App = () => {
  const triggerNotif = useNotification("김치 좋아하냐?", {
    body: "김치 좋아하냐고",
  });
  return (
    <div className="App">
      <button onClick={triggerNotif}>반갑습니다</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
