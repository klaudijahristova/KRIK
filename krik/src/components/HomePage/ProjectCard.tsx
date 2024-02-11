import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { ProjectsProps } from "src/interfaces/HomePageInterfaces";

function ProjectCard({ id, title, date, content, image }: ProjectsProps) {
  const router = useRouter();
  const isVolunteerPage = router.pathname.includes("/nashiteVolonteri/");
  return (
    <Link
      href={`/proekti/${id}`}
      id={id}
      className={`projectCard r-40 position-relative d-flex text-decoration-none custom-color-01 c-hover ${
        isVolunteerPage ? "v-projectCardGap" : "projectCardGap"
      }`}
    >
      <img
        src={image}
        alt={title}
        className="r-40 project-img position-absolute top-0 start-0"
      />
      <div className="projectCard-content z-2">
        <div className="d-flex w-100">
          <span className="custom-bg-color-02 custom-color-02 activnost-naslov mulish r-100 fs-16 fw-600 lh-20 text-center">
            {title}
          </span>
          <div className="project-date d-flex">
            <img src="/images/HomePage/calender.png" alt="calender" />
            <span className="ms-2 p-date Montserrat fw-400 fs-16 lh-24 w-100">
              {date}
            </span>
          </div>
        </div>
        <p className="Montserrat fw-400 fw-16 lh-24 project-decription">
          {content}
        </p>
        <span className="Montserrat fs-16 fw-400 lh-24 me-2 ">
          Види повеќе{" "}
        </span>{" "}
        <img src="/images/HomePage/ArrowRight.png" alt="arrow" />
      </div>
    </Link>
  );
}

export default ProjectCard;
