import { useState, useMemo } from "react";
import "./List.css";
import TodoItem from "./TodoItem";

export default function List({ toDos, onUpdate, onDelete }) {
  const [searchTerm, setSearchTerm] = useState("");
  const onChangeSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  };

  const getFilterdData = () => {
    if (searchTerm === "") {
      return toDos;
    }
    return toDos.filter((todo) =>
      todo.content.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };
  const filteredToDos = getFilterdData();

  // const genAnalyzeData = () => {
  //   const totalCout = toDos.length;
  //   const doneCount = toDos.filter((todo) => todo.isDone).length;
  //   const notDoneCount = totalCout - doneCount;
  //   return {
  //     totalCout,
  //     doneCount,
  //     notDoneCount,
  //   };
  // };
  // const { totalCout, doneCount, notDoneCount } = genAnalyzeData();

  //memorization to avoid re-calculation on each render
  const { totalCout, doneCount, notDoneCount } = useMemo(() => {
    const totalCout = toDos.length;
    const doneCount = toDos.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCout - doneCount;
    return {
      totalCout,
      doneCount,
      notDoneCount,
    };
  }, [toDos]);

  return (
    <div className="List">
      <h4>Todo List</h4>
      <div> total : {totalCout} </div>
      <div> done : {doneCount} </div>
      <div> not done : {notDoneCount} </div>
      <input placeholder="search..." onChange={onChangeSearchTerm} />
      <div className="todos_wrapper">
        {filteredToDos.map((todo) => (
          <TodoItem
            key={todo.id}
            {...todo}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
}
