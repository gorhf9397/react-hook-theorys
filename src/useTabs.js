import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./style.css";

const content = [
  {
    tab: "Section 1",
    content: "반갑습니다. 우하하하하",
  },
  {
    tab: "Section 2",
    content: "안녕하세요. 우하하하하",
  },
];

const useTabs = (initialTab, allTabs) => {
  // Hook 은 최상위에서만 선언되어야 한다
  // 오직 React 함수 내에서만 Hook을 호출해야 한다.
  const [currentIndex, setCurrentIdex] = useState(initialTab);
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIdex,
  };
};

const App = () => {
  const { currentItem, changeItem } = useTabs(0, content);
  return (
    <div className="App">
      {content.map((section, index) => (
        <button onClick={() => changeItem(index)}>{section.tab}</button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
