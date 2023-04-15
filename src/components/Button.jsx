import React from "react";

function Button({ color, bgColor, text, size, borderRadius }) {
  return (
    <button
      type="button"
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={`text-${size} p-3 hover:drop-shadow-xl`}>
      {text}
    </button>
  );
}

export default Button;
