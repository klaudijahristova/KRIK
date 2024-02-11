import Link from "next/link";
import React from "react";
import { FoundProjectsProps } from "src/interfaces/SearchPage";

const FoundProjects = ({ projects, title }: FoundProjectsProps) => {
  if (!projects || projects.length === 0) return null;
  return (
    <>
      <h3 className="mulish fs-48 fw-800 lh-64  text-center mt-3 xl-subtitle">
        {title}
      </h3>
      {projects.map((el) => (
        <Link
          href={`/proekti/${el.id}`}
          key={el.id}
          className="col-12 col-lg-5 r-30 cover text-decoration-none p-0 m-3 tp-1"
          style={{ backgroundImage: `url(${el.image})` }}
        >
          <div className="custom-bg-color-02 custom-color-01 w-100 tp1-Name mulish fs-48 fw-800 lh-64 d-flex justify-content-center align-items-center">
            {"Project Name"}
          </div>
        </Link>
      ))}
    </>
  );
};

export default FoundProjects;
