import React from "react";
import { YearDocProps } from "src/interfaces/Archive";
import DocumentsCard from "./DocumentsCard";
import { useDocumentVisibility } from "src/services/functions";
function ByYear({ year, documents }: YearDocProps) {
  const {
    showAll,
    setShowAll,
    hoveredIcons,
    handleIconHover,
    visibleDocuments,
  } = useDocumentVisibility(documents);

  return (
    <div className="row">
      <p className="mulish fs-48 fw-800 lh-64 year-title xl-subtitle">{year}</p>
      {visibleDocuments.map((doc) => (
        <div
          key={doc.id}
          className="documendCardCol custom-bg-color-04 r-40 position-relative mb-5"
        >
          <DocumentsCard id={doc.id} title={doc.title} />
          <div
            className="DownloadIcon d-flex justify-content-center align-items-center position-absolute"
            onMouseOver={() => handleIconHover(doc.id, true)}
            onMouseOut={() => handleIconHover(doc.id, false)}
          >
            <img
              src={
                hoveredIcons[doc.id]
                  ? "/images/arhiva/downloadHover.svg"
                  : "/images/arhiva/system-uicons_download.svg"
              }
              alt="Download Icon"
            />
          </div>
        </div>
      ))}
      <div className="d-flex justify-content-end showAllWrapper">
        {documents.length > 4 && (
          <span
            onClick={() => setShowAll(!showAll)}
            className="showAll r-30 mulish fs-24 fw-700 lh-32 custom-bg-color-03 text-center"
          >
            {showAll ? "Сокриј" : "Види ги сите"}
          </span>
        )}
      </div>
    </div>
  );
}

export default ByYear;
