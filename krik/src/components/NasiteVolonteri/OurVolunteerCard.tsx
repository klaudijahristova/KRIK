import Link from "next/link";
import React from "react";
import { OurVolonteerProps } from "src/interfaces/OurVolunteer";

function OurVolunteerCard({
  id,
  name,
  years,
  country,
  image,
}: OurVolonteerProps) {
  return (
    <Link
      href={`/nashiteVolonteri/${id}`}
      className="col-12 col-lg-3 text-decoration-none custom-color-02 card-link"
    >
      <div className=" card ">
        <img src={image} className="card-img-top" alt="Volunteer" />
        <div className="card-body">
          <p className="card-text mulish fs-24 fw-700 lh-40 xl-content-26">
            {name}
          </p>
          <p className="Montserrat fs-16 fw-400 lh-24 xl-content-18">
            <span>
              {years} Години, <span>{country}</span>
            </span>
          </p>
        </div>
      </div>
    </Link>
  );
}

export default OurVolunteerCard;
