import React from "react";
import "./Header.css";
import { memo } from "react";

// no props needed so only render once
function Header() {
  return (
    <div className="Header">
      <h3>🎈Today🎈</h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  );
}

// const memorizationHeader = memo(Header);

export default memo(Header);
