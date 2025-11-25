import { useState } from "react";
import Header from "./component/Header.jsx";
import Editor from "./component/Editor.jsx";
import List from "./component/List.jsx";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Editor />
      <List />
    </>
  );
}

export default App;
