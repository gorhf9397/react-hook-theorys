import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import "./style.css";

const useTitle = (e) => {
  const [title, setTitle] = useState(e);
  console.log(e);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};

const App = () => {
  const titleUpdater = useTitle("로딩중...");
  setTimeout(() => {
    titleUpdater("Home");
    // console.log(titleUpdater);
  }, 5000);
  return (
    <div className="App">
      <div>안녕하세요</div>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
