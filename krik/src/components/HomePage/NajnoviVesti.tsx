import React from "react";
import ProjectCard from "./ProjectCard";
import { NajnoviVestiProps } from "src/interfaces/HomePageInterfaces";
import { useScrollHandler } from "../../services/functions";
import Link from "next/link";

function NajnoviVesti({ project }: NajnoviVestiProps) {
  const {
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    cardsWrapperRef,
    scrollbarRef,
    handleScrollbarMouseDown,
  } = useScrollHandler();

  return (
    <div className="w-100 najnoviVesti position-relative">
      <h2 className="fw-800 lh-72 fs-56 vest-naslov mulish">Најнови вести</h2>
      <div
        className="d-flex w-100 cardsWrapper"
        ref={cardsWrapperRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {project.map((el, index) => (
          <ProjectCard
            key={index}
            id={el.id}
            title={el.title}
            date={el.date}
            content={el.content}
            image={el.image}
          />
        ))}
      </div>
      <div className="mt-1 additionalDiv"></div>
      <div
        className="customScrollbar"
        ref={scrollbarRef}
        onMouseDown={handleScrollbarMouseDown}
      ></div>
      <Link
        href={"/newsletter"}
        className="zaMesec text-decoration-none custom-color-02 position-absolute r-30 custom-bg-color-03 d-flex justify-content-center align-items-center mulish fs-24 fw-700 lh-32"
      >
        Види за цел Месец
      </Link>
    </div>
  );
}

export default NajnoviVesti;
