import React from "react";
import { ServiceGaleryProps } from "src/interfaces/ServicesPage";

function ServiceGalery({ id, src, isActive }: ServiceGaleryProps) {
  return (
    <div
      className="servicesGalery w-100 h-100 row"
      id={id}
      style={{ display: isActive ? "flex" : "none" }}
    >
      {src.map((el, index) => (
        <div
          key={index}
          className={`${index === 1 ? "col-lg-8 mb-4" : "col-lg-4 mb-4"}`}
        >
          <img src={el} key={index} className="projectsImages r-40" />
        </div>
      ))}
    </div>
  );
}

export default ServiceGalery;
