import React from "react";
import "./Header.css";
export default function Header() {
  return (
    <div className="Header">
      <h3>🎈Today🎈</h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  );
}
