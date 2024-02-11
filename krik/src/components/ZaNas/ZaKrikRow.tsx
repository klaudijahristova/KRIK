import React from "react";
import { ZaKrikRowProps } from "src/interfaces/AboutPage";

function ZaKrikRow({ title, content }: ZaKrikRowProps) {
  return (
    <div className="d-flex zaKrikRow justify-content-between align-items-center">
      <span className="mulish fs-32 fw-700 lh-48 zaKrikRow-title custom-color-04 xl-content-40">
        {title}
      </span>
      <span className="Montserrat fs-20 fw-400 lh-40 zaKrikRow-text xl-content-30">
        {content}
      </span>
    </div>
  );
}

export default ZaKrikRow;
