import React from "react";
import ZaKrikRow from "./ZaKrikRow";
import { ZaKrikProps, ZaKrikRowProps } from "src/interfaces/AboutPage";

function ZaKrik({ zaKrik }: ZaKrikProps) {
  return (
    <div className="za-Krik w-100">
      <h2 className="mulish fs-48 fw-800 lh-64 zaKrik-title xl-subtitle">
        За Крик
      </h2>
      <div className="zaKrik-content">
        {zaKrik.map((el: ZaKrikRowProps) => (
          <ZaKrikRow key={el.title} title={el.title} content={el.content} />
        ))}
      </div>
    </div>
  );
}

export default ZaKrik;
