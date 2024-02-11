import React from "react";
import { PrasanjaProps } from "src/interfaces/AboutPage";
import Acordions from "./Acordions";

function Prasanja({ prasanja }: PrasanjaProps) {
  return (
    <div className="accordionWrapper">
      <h3 className="mulish fs-48 fw-800 lh-64 prasanja-title xl-subtitle">
        Најчесто поставувани прашања
      </h3>
      <div id="accordionPanelsStayOpenExample">
        {prasanja.map((el, i) => (
          <Acordions
            key={i}
            title={el.title}
            content={el.content}
            id={i.toString()}
          />
        ))}
      </div>
    </div>
  );
}

export default Prasanja;
