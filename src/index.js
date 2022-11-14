import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import useAxios from "./useAxios";

import "./style.css";
// useAxios :

const App = () => {
  const { loading, data, error, refetch } = useAxios({
    url: "https://yts.mx/api/v2/list_movies.json",
  });
  console.log(
    `Loading: ${loading}\nError:${error}\nData:${JSON.stringify(data)}`
  );
  return (
    <div className="App">
      <h1>{data && data.status}</h1>
      <h2>{loading ? "loading" : "연결"}</h2>
      <button onClick={refetch}>Refetch</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
