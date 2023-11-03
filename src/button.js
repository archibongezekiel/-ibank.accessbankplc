import React from "react";
import "./style.css";
export default function Button(p) {
  const i = [
    "1 Lowercase",
    "1 Uppercase",
    "At least 8 characters",
    "1 Special Character",
    "1 Number",
  ];
  const m = i.map((li) => (
    <li key={li} id="b" style={{ color: p.orange }}>
      {li}
    </li>
  ));
  return (
    <div id="button-container">
      <p id="must-have">Password must have</p>
      <ul id="list-item">{m}</ul>
    </div>
  );
}
/* <span id="b">1 Lowercase</span>
<span id="b">1 Uppercase</span>
<span id="b">At least 8 characters</span>
<span id="b">1 Special Character</span>
<span id="b">1 Number</span> */
