import React from "react";
import "./Editor.css";
export default function Editor() {
  return (
    <div className="Editor">
      <input placeholder="new Todo ...." />
      <button>Add</button>
    </div>
  );
}
