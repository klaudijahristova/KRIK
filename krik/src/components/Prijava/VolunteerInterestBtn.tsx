import React from "react";
import { VolunteerInterestBtnProps } from "src/interfaces/VolunteerAplication";
import useToggle from "src/services/useToggle";

function VolunteerInterestBtn({ id, content }: VolunteerInterestBtnProps) {
  const [active, toggleActive] = useToggle(false);

  return (
    <div
      className={`Montserrat fs-16 fw-400 lh-24 r-100 volunteerInterestBtn d-flex justify-content-center align-items-center ${
        active ? "darkBtn" : ""
      }`}
      id={id}
      onClick={toggleActive}
    >
      {content}
    </div>
  );
}

export default VolunteerInterestBtn;
