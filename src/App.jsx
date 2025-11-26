import { useState, useRef } from "react";
import Header from "./component/Header.jsx";
import Editor from "./component/Editor.jsx";
import List from "./component/List.jsx";

import "./App.css";

function App() {
  const mockData = [
    {
      id: 0,
      isDone: false,
      content: "react",
      date: new Date().getTime(),
    },
    {
      id: 1,
      isDone: false,
      content: "learn singing",
      date: new Date().getTime(),
    },
  ];
  const [toDos, setToDos] = useState([mockData]);
  const idRef = useRef(2);

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };

    setToDos([newTodo, ...toDos]);
  };
  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List />
    </div>
  );
}

export default App;
