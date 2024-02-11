import React from "react";
import { ArchiveDocProps } from "src/interfaces/Archive";

function DocumentsCard({ id, title }: ArchiveDocProps) {
  return (
    <div id={id} className="documendCard">
      <h3 className="mulish fs-24 fw-700 lh-40 xl-content-26">{title}</h3>
    </div>
  );
}

export default DocumentsCard;
