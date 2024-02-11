import React from "react";
import { UslogiComponentProps } from "src/interfaces/HomePageInterfaces";
import ServiceCard from "./ServiceCard";

function Uslogi({ uslogi }: UslogiComponentProps) {
  return (
    <div className="w-100 uslogi h-100">
      <h2 className="mulish fs-56 fw-800 lh-72 uslogi-naslov">Нашите услуги</h2>
      <div className="row uslogi-wrapper">
        <div className="col-6 r-40 hp-uslogiImg"></div>

        <div className="col-6 uslogi-content ps-4">
          {uslogi.map((el, index) => (
            <ServiceCard
              id={el.id}
              title={el.title}
              content={el.content}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Uslogi;
