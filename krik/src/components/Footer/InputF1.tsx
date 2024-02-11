import React from "react";
import { InputF1Props } from "src/interfaces/FooterIterfaces";

function InputF1({ type, content }: InputF1Props) {
  return (
    <input
      type={type}
      className="inputF1 d-flex align-items-center fs-24 fw-bold custom-color-01 r-30"
      placeholder={content}
    />
  );
}

export default InputF1;
