import React from "react";
import { AgeBtnProps } from "src/interfaces/VolunteerAplication";
import useToggle from "src/services/useToggle";

function AgeBtn({ id, content }: AgeBtnProps) {
  const [active, toggleActive] = useToggle(false);
  return (
    <div
      id={id}
      className={`Montserrat fs-16 fw-400 lh-40 ageBtn r-100 d-flex justify-content-center align-items-center  ${
        active ? "darkBtn" : ""
      }`}
      onClick={toggleActive}
    >
      {content}
    </div>
  );
}

export default AgeBtn;
