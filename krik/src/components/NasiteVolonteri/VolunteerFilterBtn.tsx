import React from "react";
import OurVolunteerCard from "./OurVolunteerCard";
import { VolunteerFilterBtnProps } from "src/interfaces/OurVolunteer";
import { useActiveIndex } from "src/services/useActiveIndex";

function VolunteerFilterBtn({ dolgRok, kratokRok }: VolunteerFilterBtnProps) {
  const { activeIndex, handleButtonClick } = useActiveIndex(0);
  const activeArray = activeIndex === 0 ? dolgRok : kratokRok;

  return (
    <div className="w-100 h-100 ourVolunteer">
      <h2 className="mulish fs-56 fw-800 lh-72 text-center ourVolunteers-title w-100 xl-title">
        Нашите Волонтери
      </h2>
      <div className="row justify-content-center h-100 ourVolunteersBtn">
        {[0, 1].map((index) => (
          <div
            key={index}
            className="col-12 col-lg-6 p-0  fs-32 fw-700 lh-48 text-center position-relative pointer xl-content-40"
            onClick={() => handleButtonClick(index)}
          >
            {index === 0 && "Долг Рок"}
            {index === 1 && "Краток рок"}
            <span
              className={`${
                activeIndex === index ? "v-activeFilter" : ""
              } position-absolute custom-bg-color-05`}
            ></span>
          </div>
        ))}
        <div className="v-scroll-line custom-bg-color-01"></div>
      </div>
      <div className="row">
        {Array.isArray(activeArray) &&
          activeArray.map((volunteer) => (
            <OurVolunteerCard
              key={volunteer.id}
              id={volunteer.id}
              name={volunteer.name}
              image={volunteer.image}
              years={volunteer.years}
              country={volunteer.country}
              description={volunteer.description}
              projects={volunteer.projects}
            />
          ))}
      </div>
    </div>
  );
}

export default VolunteerFilterBtn;
