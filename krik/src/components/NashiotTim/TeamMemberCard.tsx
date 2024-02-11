import React from "react";
import { TeamMemberProps } from "src/interfaces/OurTeam";

function TeamMemberCard({ image, name, about }: TeamMemberProps) {
  return (
    <div className="row">
      <div className="col-12 col-lg-5 r-40">
        <img src={image} alt="Member" className="member-img r-40" />
      </div>

      <div className="col-12 col-lg-7 d-flex flex-column justify-content-center">
        <h4 className="mulish fs-48 fw-800 lh-64 xl-subtitle">{name}</h4>
        <p className="Montserrat fs-20 fw-400 lh-40 xl-content-26">{about}</p>
      </div>
    </div>
  );
}

export default TeamMemberCard;
