import React from "react";
import { ButtonF1Props } from "src/interfaces/FooterIterfaces";

function ButtonF1({ content }: ButtonF1Props) {
  return (
    <div className="buttonF1 r-30 custom-bg-color-02 custom-color-02 d-flex align-items-center justify-content-center fs-24 fw-bold">
      {content}
    </div>
  );
}

export default ButtonF1;
