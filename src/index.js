import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

import "./style.css";

export const useConfirm = (message = "", onConfirm, onCancel) => {
  if(!onConfirm || typeof onConfirm !== "function") {
     return;
  }
  if(onCancel && typeof onCancel !== "function") {
    return; 
  }
  const confirmAction = () => {
    if(confirm(message)) {
      onConfirm();  
    } else {
      onCancel();
    }
  }
  return confirmAction;
}

const App = () => {
  const deleteWorld = () => console.log("Deleteing World");
  const abort = () => console.log("Aborted");
  const confirmDelete = useConfirm("Are you sure", deleteWorld, abort);
  return (
    <div className="App">
      <button>Delete the world</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
