import React from "react";
import { InfoAboutUsProps } from "src/interfaces/AboutPage";

function KrikInfo({ title, content }: InfoAboutUsProps) {
  return (
    <div className="info-krik w-100  row">
      <div className="col-12 col-lg-6">
        <img
          src="/images/ZaNas/zanas1.png"
          alt="KRIK"
          className="info-img r-30"
        />
      </div>

      <div className="info-content col-12 col-lg-6">
        <h2 className="mulish fs-32 fw-700 lh-48 xl-subtitle">{title}</h2>
        <p className="Montserrat fs-20 fw-400 lh-40 xl-content-30">{content}</p>
      </div>
    </div>
  );
}

export default KrikInfo;
