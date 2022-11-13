import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

import "./style.css";

const useNetwork = (onChange) => {
  const [status, setStatus] = useState(navigator.onLine);
  const handleChange = () => {
    if (typeof onChange === "function") {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, []);
  return status;
};

const App = () => {
  const handleNetworkChange = (online) => {
    console.log(online ? "로그인했습니다." : "오프라인했습니다.");
  };
  const online = useNetwork(handleNetworkChange);
  return (
    <div className="App">
      <h1> {online ? "Online" : "Offline"}</h1>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
