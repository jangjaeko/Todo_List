import React from "react";
import "./TodoItem.css";
export default function TodoItem() {
  return (
    <div className="TodoItem">
      <input type="checkbox" />
      <div className="content"> Temp Todo </div>
      <div className="date"> Date mm yy</div>
      <button> Delete </button>
    </div>
  );
}
