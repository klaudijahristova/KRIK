import React from "react";
import { useArhivaFilter } from "src/services/functions";
import { ArchivePageProps } from "src/interfaces/Archive";
import ByYear from "./ByYear";

function ArhivaFilterBtns(props: ArchivePageProps) {
  const { activeIndex, filteredData, handleActiveClass } =
    useArhivaFilter(props);

  return (
    <div className="row h-100">
      {[0, 1, 2].map((index) => (
        <div
          key={index}
          className={`col-12 col-lg-4 p-0 mulish fs-32 fw-700 lh-48 text-center position-relative filterBtn xl-content-40`}
          onClick={() => handleActiveClass(index)}
        >
          {index === 0 && "Годишни извештаи"}
          {index === 1 && "Финансиски извештаи"}
          {index === 2 && "Политички документи"}
          <span
            className={`${
              activeIndex === index ? "activeFilter" : ""
            } position-absolute custom-bg-color-05`}
          ></span>
        </div>
      ))}
      <div className="scroll-line custom-bg-color-01"></div>
      <div className="col-12 allDocuments r-40 ">
        {filteredData.map((data) => (
          <ByYear key={data.year} year={data.year} documents={data.documents} />
        ))}
      </div>
    </div>
  );
}

export default ArhivaFilterBtns;
