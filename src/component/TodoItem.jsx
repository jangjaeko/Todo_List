import React from "react";
import "./TodoItem.css";
import { memo } from "react";

function TodoItem({ id, isDone, content, date, onUpdate, onDelete }) {
  return (
    <div className="TodoItem">
      <input type="checkbox" checked={isDone} onChange={() => onUpdate(id)} />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}

// High order component to memorize the component (HOC)
export default memo(
  TodoItem
  // , (prevProps, nextProps) => {
  // return true if props are equal, preventing re-render
  // true : do not re-render
  // false : re-render

  // if (prevProps.isDone !== nextProps.isDone) return false;
  // if (prevProps.content !== nextProps.content) return false;
  // if (prevProps.date !== nextProps.date) return false;
  // if (prevProps.id !== nextProps.id) return false;

  // return true;}
);
