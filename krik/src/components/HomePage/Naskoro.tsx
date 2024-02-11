import React from "react";
import { NaskoroProps } from "src/interfaces/HomePageInterfaces";
import EventButton from "./EventButton";
import { EventButtonsArray } from "src/data/data";

function Naskoro({ title, content, day, month }: NaskoroProps) {
  return (
    <div className="position-absolute naskoro start-50 translate-middle r-40  d-flex w-100 ">
      <div className="d-flex w-100 custom-bg-color-01 r-40">
        <div className="w-50 custom-bg-color-01 event">
          <h2 className="custom-color-03 fs-32 lh-48 fw-700 naskoro-title text-uppercase mulish">
            Наскоро
          </h2>
          <h5 className="custom-color-01 fs-24 fw-700 lh-40 event-title mulish">
            {title}
          </h5>
          <p className="custom-color-01 event-content fs-20 lh-40 Montserrat">
            {content}
          </p>
          <div className="d-flex justify-content-between eventButtons">
            {EventButtonsArray.map((btn) => (
              <EventButton
                content={btn.content}
                url={btn.url}
                color={btn.color}
                key={btn.url}
              />
            ))}
          </div>
        </div>
        <div className="w-50 event-occur position-relative">
          <div className="d-flex flex-column custom-bg-color-01 r-30 custom-color-01 event-date justify-content-center align-items-center position-absolute top-0">
            <span className="fs-56 lh-40 fw-700 Raleway">{day}</span>
            <span className="fs-24 fw-500 Raleway">{month}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Naskoro;
