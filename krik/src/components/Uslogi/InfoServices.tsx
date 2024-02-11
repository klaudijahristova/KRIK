import React from "react";
import { InfoServicesProps } from "src/interfaces/ServicesPage";
import ServiceContent from "./ServiceContent";
import ServiceGalery from "./ServiceGalery";
import { useServiceInfo } from "src/services/functions";

function InfoServices({ info, images }: InfoServicesProps) {
  const { activeIndex, handleActiveClass } = useServiceInfo();
  return (
    <div className="servicess w-100 h-100">
      <div className="row justify-content-center h-100 servicesBtn ">
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            className={`col-12 col-lg-4 p-0 mulish fs-24 fw-700 lh-40 text-center position-relative filterBtn xl-content-30`}
            onClick={() => handleActiveClass(index)}
          >
            {index === 0 && "Центар Крикни"}
            {index === 1 && "Независни станбени единици"}
            {index === 2 && "Советувалиште"}
            <span
              className={`${
                activeIndex === index ? "activeFilter" : ""
              } position-absolute custom-bg-color-05`}
            ></span>
          </div>
        ))}
        <div className="scroll-line custom-bg-color-01"></div>
      </div>
      {info.map((el, index) => (
        <ServiceContent
          key={el.id}
          id={el.id}
          title={el.title}
          content={el.content}
          isActive={activeIndex === index}
        />
      ))}
      <h3 className="mulish fs-32 fw-700 lh-48 galery-title xl-content-40">
        Галерија Со Активности
      </h3>
      {images.map((el, index) => (
        <ServiceGalery
          key={el.id}
          id={el.id}
          src={el.src}
          isActive={activeIndex === index}
        />
      ))}
    </div>
  );
}

export default InfoServices;
