import React from "react";
import ProjectCarousel from "../SingleProject/ProjectCarousel";
import { SingleNewsPageProps } from "src/interfaces/MonthNewsPage";

function CaroselNews({ singleNewsData }: SingleNewsPageProps) {
  if (!singleNewsData) {
    return <p>Loading...</p>;
  }

  const info = singleNewsData.singleNews[0];
  return (
    <div>
      <h3 className="mulisg fs-32 fw-700 lh-48 n-carouselTitle xl-content-40">
        Галерија со активности:
      </h3>
      <ProjectCarousel carosel={info.carosel} />
    </div>
  );
}

export default CaroselNews;
