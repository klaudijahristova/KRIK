import React from "react";
import {
  SingleNewsPageProps,
  SingleNewsProps,
} from "src/interfaces/MonthNewsPage";

function FirstRow({ singleNewsData }: SingleNewsPageProps) {
  if (!singleNewsData) {
    return <p>Loading...</p>;
  }

  const info = singleNewsData.singleNews[0];

  return (
    <div className="row firstRow">
      <div className="col-6">
        <img
          src={info.image1}
          alt="News Image"
          className="singleNews-img1 r-40"
        />
      </div>
      <div className="col-6 pt-2 ps-5">
        <span className="mulish fs-24 fw-700 lh-32 singleNews-date r-40">
          {info.date}
        </span>
        <h2 className="Mulish fs-56 fw-800 lh-72 singleNews-title xl-title">
          {info.title}
        </h2>
        <p className="Montserrat fs-20 fw-400 lh-40 xl-content-26">
          {info.content1}
        </p>
      </div>
    </div>
  );
}

export default FirstRow;
