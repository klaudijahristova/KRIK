import React from "react";
import { AboutPrjectProps } from "src/interfaces/Projects";

function AboutProject({ title, about }: AboutPrjectProps) {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      <div className="text-center aboutProject ">
        <h3 className="mulish fs-56 fw-800 lh-72 xl-title">{title}</h3>
        <p className="Montserrat fs-20 fw-400 lh-40 xl-content-26">{about}</p>
      </div>
    </div>
  );
}

export default AboutProject;
