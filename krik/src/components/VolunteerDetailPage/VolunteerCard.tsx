import React from "react";
import { VolunteerCardProps } from "src/interfaces/OurVolunteer";

function VolunteerCard({ image, name, description }: VolunteerCardProps) {
  return (
    <div className="w-100 d-flex volunteerCard r-40 ">
      <div
        className="volunteerCardImg r-40 "
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="volunteerCardDes h-100">
        <h5 className="mulish fs-48 fw-800 lh-64 voluteerName xl-subtitle">
          {name}
        </h5>
        <p className="Montserrat fs-20 fw-400 lh-40 volonteerDec xl-content-26">
          {description}
        </p>
      </div>
    </div>
  );
}

export default VolunteerCard;
