import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./style.css";

// hook 을 사용하면 function 안에서 event 를 처리할수있음
const useInput = (initialValue, validator /*유효성을 확인하는 명령어 */) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    let willUpdate = true;
    if (typeof validator === "function") {
      // validator 과 function 이 같으면 willUpdate 에 validator결과를 업로드
      willUpdate = validator(value); //value에 대한 유효성 검사를 하는 if문
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange }; // 어떤 변화를 주기전에 기본값(Mr.kim)을 value와 함께 return
};

const App = () => {
  const maxLen = (value) => value.length <= 10; // value의 길이를 체크
  const name = useInput("Mr.kim", maxLen);
  return (
    <div className="App">
      <h1>Hello</h1>
      <input
        placeholder="Name"
        {...name} /* === value={name.value} onChange={name.onChange}*/
      />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
