import { useState, useRef, useReducer, useCallback } from "react";
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
const reducer = (state, action) => {
  switch (action.type) {
    case "create":
      return [action.data, ...state];
    case "update":
      return state.map((item) =>
        item.id === action.targetId ? { ...item, isDone: !item.isDone } : item
      );
    case "delete":
      console.log("delete");
      return state.filter((item) => item.id !== action.targetId);
    default:
      return state;
  }
};

function App() {
  // const [toDos, setToDos] = useState(mockData);
  const [toDos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(2);

  //after component is mounted once, functions are created once and reused
  const onCreate = useCallback((content) => {
    dispatch({
      type: "create",
      data: {
        id: idRef.current++,
        isDone: false,
        content,
        date: new Date().getTime(),
      },
    });
  }, []);

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "delete",
      targetId: targetId,
    });
  }, []);

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "update",
      targetId: targetId,
    });
  }, []);

  // const onCreate = (content) => {
  //     dispatch({
  //       type: "create",
  //       data: {
  //         id: idRef.current++,
  //         isDone: false,
  //         content,
  //         date: new Date().getTime(),
  //       },
  //     });
  //   };
  // const onUpdate = (targetId) => {
  //   // in todos array toggle isDone value of the todo item whose id is equal to targetIds
  //   dispatch({
  //     type: "update",
  //     targetId: targetId,
  //   });

  // setToDos(
  //   toDos.map((todo) =>
  //     todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo
  //   )
  // );
  // };
  // const onDelete = (targetId) => {
  //   // in todos array filter out the todo item whose id is equal to targetId
  //   // setToDos(toDos.filter((todo) => todo.id !== targetId));
  //   dispatch({
  //     type: "delete",
  //     targetId: targetId,
  //   });
  // };

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List toDos={toDos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;
