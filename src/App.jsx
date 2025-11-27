import { useState, useRef } from "react";
import Header from "./component/Header.jsx";
import Editor from "./component/Editor.jsx";
import List from "./component/List.jsx";

import "./App.css";

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

function App() {
  const [toDos, setToDos] = useState(mockData);
  const idRef = useRef(2);

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content,
      date: new Date().getTime(),
    };

    setToDos([newTodo, ...toDos]);
  };
  const onUpdate = (targetId) => {
    // in todos array toggle isDone value of the todo item whose id is equal to targetIds
    setToDos(
      toDos.map((todo) =>
        todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };
  const onDelete = (targetId) => {
    // in todos array filter out the todo item whose id is equal to targetId
    setToDos(toDos.filter((todo) => todo.id !== targetId));
  };

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List toDos={toDos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;
