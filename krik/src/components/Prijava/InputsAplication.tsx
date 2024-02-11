import React from "react";
import { InputsAplicationProps } from "src/interfaces/VolunteerAplication";

function InputsAplication({
  type,
  label,
  placeholder,
  id,
}: InputsAplicationProps) {
  return (
    <div className="col-12 d-flex flex-column inputWrapper">
      <label
        htmlFor={id}
        className="mulish fs-24 fw-700 aplicationLabel lh-40 xl-content-30"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className="inputAplication r-30"
      />
    </div>
  );
}

export default InputsAplication;
