import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { TopNovostiComponentProps } from "src/interfaces/MonthNewsPage";

function TopNovosti({ top_novosti }: TopNovostiComponentProps) {
  const router = useRouter();
  const asPath = router.asPath.split("/")[2];
  return (
    <div className="w-100 topNovosti">
      <h2 className="mulish fs-56 fw-800 lh-72 topNovosti-naslov xl-title">
        ТОП НОВОСТИ
      </h2>
      <div className="row w-100">
        <div className="col-6" id={top_novosti[0].id}>
          <img
            src={top_novosti[0].images}
            alt="News Image"
            className="monthNewsImg r-40"
          />
          <span className="mulish fs-24 fw-700 lh-32 mn-date r-200">
            {top_novosti[0].date}
          </span>
          <h4 className="mulish fs-56 fw-800 lh-72 tn-title xl-title">
            {top_novosti[0].title}
          </h4>
          <p className="Montserrat fs-20 fw-400 lh-40 tn-content xl-content-26">
            {top_novosti[0].content}
          </p>
          <Link
            href={`/newsletter/${asPath}/${top_novosti[0].id}`}
            className="text-decoration-none custom-bg-color-01 custom-color-01 monthNewsBtn r-30 mulish fs-24 fw-700 lh-32"
          >
            CTA
          </Link>
        </div>
        <div className="col-6">
          <div className="row">
            <div className="col-6">
              <img
                src={top_novosti[1].images}
                alt="News Image"
                className="monthNewsImg r-40"
              />
              <span className="mulish fs-24 fw-700 lh-32 mn-date r-200">
                {top_novosti[1].date}
              </span>
              <h5 className="mulish fs-32 fw-700 lh-48 tn-title1 xl-content-40">
                {top_novosti[1].title}
              </h5>
              <p className="Montserrat fs-20 fw-400 lh-40 tn-content xl-content-26">
                {top_novosti[1].content}
              </p>
              <Link
                href={`/newsletter/${asPath}/${top_novosti[1].id}`}
                className="text-decoration-none custom-bg-color-01 custom-color-01 monthNewsBtn2 r-30 mulish fs-24 fw-700 lh-32"
              >
                CTA
              </Link>
            </div>
            <div className="col-6">
              <img
                src={top_novosti[2].images}
                alt="News Image"
                className="monthNewsImg r-40"
              />
              <span className="mulish fs-24 fw-700 lh-32 mn-date r-200">
                {top_novosti[2].date}
              </span>
              <h5 className="mulish fs-32 fw-700 lh-48 tn-title1 xl-content-40">
                {top_novosti[2].title}
              </h5>
              <p className="Montserrat fs-20 fw-400 lh-40 tn-content xl-content-26">
                {top_novosti[2].content}
              </p>
              <Link
                href={`/newsletter/${asPath}/${top_novosti[2].id}`}
                className="text-decoration-none custom-bg-color-01 custom-color-01 monthNewsBtn2 r-30 mulish fs-24 fw-700 lh-32"
              >
                CTA
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopNovosti;
