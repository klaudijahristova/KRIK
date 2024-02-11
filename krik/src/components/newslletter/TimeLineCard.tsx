import Link from "next/link";
import React from "react";
import { NewsletterPageProps } from "src/interfaces/NewsletterPage";

function TimeLineCard({
  id,
  month,
  content,
  image,
  reverseOrder,
}: NewsletterPageProps & { reverseOrder: boolean }) {
  return (
    <div className="col-12">
      <div className={`row ${reverseOrder ? " flex-row-reverse" : ""}`}>
        <div
          className={`col-6 ${
            reverseOrder ? "reverse-text" : "regular-text text-end"
          }`}
        >
          <div className="position-relative">
            <h3
              className={`mulish fs-48 fw-800 lh-64 ${
                reverseOrder ? "" : "toRight"
              }`}
            >
              {month}{" "}
              <img
                src="/images/newsletter/timeline.svg"
                alt="orange circle"
                className={`position-relative ${
                  reverseOrder ? "orangeCircle-reverce" : "orangeCircle"
                }`}
              />
            </h3>
          </div>

          <p
            className={`mulish fs-24 fw-700 lh-40  xl-content-30 ${
              reverseOrder ? "news-content" : "news-contentRev"
            }`}
          >
            {content}
          </p>
        </div>
        <div
          className={`col-6 ${reverseOrder ? "reverse-img" : "regular-img"}`}
          id={id}
        >
          <Link href={`/newsletter/${id}`} className="r-40 news-links">
            <img src={image} alt="Newsletter Image" className="r-40 news-img" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TimeLineCard;
