import React from "react";
import { VolunteerPageBtnProps } from "src/interfaces/OurVolunteer";

function VolunteerPageBtn({ isDone }: VolunteerPageBtnProps) {
  return (
    <div className="isDoneBtn mulish fs-24 fw-700 lh-40 text-center r-100 xl-content-26">
      {isDone ? "Завршен" : "Tековен"}
    </div>
  );
}

export default VolunteerPageBtn;
