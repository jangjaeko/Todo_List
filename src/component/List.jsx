import { useState } from "react";
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
  return (
    <div className="List">
      <h4>Todo List</h4>
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
