import React from "react";
import { ServicesContentProps } from "src/interfaces/ServicesPage";

function ServiceContent({
  id,
  title,
  content,
  isActive,
}: ServicesContentProps) {
  return (
    <div id={id} style={{ display: isActive ? "block" : "none" }}>
      <h2 className="mulish fs-48 fw-800 lh-64 services-title xl-subtitle">
        {title}
      </h2>
      <p className="Montserrat fw-400 lh-40 fs-20 xl-content-26">{content}</p>
    </div>
  );
}

export default ServiceContent;
