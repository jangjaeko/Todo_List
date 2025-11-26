import React from "react";
import "./Editor.css";
import { useState, useRef } from "react";
export default function Editor({ onCreate }) {
  const [content, setContent] = useState("");
  const contentRef = useRef();
  const onChangeContent = (e) => {
    setContent(e.target.value);
  };
  const onSubmit = () => {
    if (content === "") {
      contentRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  };
  const okKeyDown = (e) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };
  return (
    <div className="Editor">
      <input
        onKeyDown={okKeyDown}
        ref={contentRef}
        value={content}
        onChange={onChangeContent}
        placeholder="new Todo ...."
      />
      <button onClick={onSubmit}>Add</button>
    </div>
  );
}
