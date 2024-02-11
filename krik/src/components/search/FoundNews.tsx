import Link from "next/link";
import React from "react";
import { FoundNewsProps } from "src/interfaces/SearchPage";

function FoundNews({ news, month }: FoundNewsProps) {
  return (
    <>
      {news.map((foundNews) => (
        <div className="col-4 news-col" key={foundNews.id}>
          <span className="mulish fs-24 fw-700 lh-32 mn-date r-200">
            {foundNews.date}
          </span>
          <h3 className="mulish fs-32 fw-700 lh-48 tn-title2 xl-content-40">
            {foundNews.title}
          </h3>
          <p className="Montserrat fs-20 fw-400 lh-40 tn-content xl-content-26">
            {foundNews.content}
          </p>
          <Link
            href={`/newsletter/${month}/${foundNews.id}`}
            className="text-decoration-none custom-bg-color-01 custom-color-01  r-30 mulish fs-24 fw-700 lh-32 monthNewsBtn3"
          >
            CTA
          </Link>
        </div>
      ))}
    </>
  );
}

export default FoundNews;
