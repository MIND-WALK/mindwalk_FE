import React from "react";

export default function ClickBtnSm({ onClick, className, text }) {
  return (
    <button type="button" onClick={onClick} className={className}>
      {text}
    </button>
  );
}
