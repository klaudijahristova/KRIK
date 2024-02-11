import React from "react";
import { ForWhoProps } from "src/interfaces/Projects";

function ForWho({ forWho, contentImage }: ForWhoProps) {
  return (
    <div className="forWho row">
      <div className="col-12 col-lg-8 namena r-40">
        <h3 className="mulish fs-56 fw-800 lh-72 namena-naslov xl-title">
          За кого е наменет овој проект?
        </h3>
        <p className="Montserrat fw-20 fw-400 lh-40 xl-content-26">{forWho}</p>
      </div>
      <div className="col-12 col-lg-4 r-40">
        <img src={contentImage} alt="Meeting" className="projectsImages r-40" />
      </div>
    </div>
  );
}

export default ForWho;
