import React from "react";
import { SingleNewsPageProps } from "src/interfaces/MonthNewsPage";

function SecondRow({ singleNewsData }: SingleNewsPageProps) {
  if (!singleNewsData) {
    return <p>Loading...</p>;
  }

  const info = singleNewsData.singleNews[0];

  return (
    <div className="row secondRow">
      <div className="col-6 Montserrat fs-20 fw-400 lh-40 d-flex align-items-center xl-content-26">
        {info.content2}
      </div>
      <div className="col-6 ps-5">
        <img
          src={info.image2}
          alt="News Image"
          className="singleNews-img1 r-40"
        />
      </div>
    </div>
  );
}

export default SecondRow;
