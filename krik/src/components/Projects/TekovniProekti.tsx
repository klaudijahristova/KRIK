import React from "react";
import Link from "next/link";
import {
  TekovniZavrsniProjectsProps,
  ProjectContentProps,
} from "src/interfaces/Projects";
import { Pagination, Stack } from "@mui/material";
import { useProjectPagination } from "src/services/useProjectPagination";

function TekovniProekti({ project }: TekovniZavrsniProjectsProps) {
  const projectsPerPage = 4;
  const { currentProjects, currentPage, pageCount, handlePageChange } =
    useProjectPagination(project, projectsPerPage);

  const renderProject = (proj: ProjectContentProps, index: number) => {
    if (index === 0) {
      return (
        <Link
          href={`/proekti/${proj.id}`}
          key={proj.id}
          className="col-12 col-lg-6 r-30 cover text-decoration-none p-0 tp-1"
          style={{ backgroundImage: `url(${proj.image})` }}
        >
          <div className="custom-bg-color-02 custom-color-01 w-100 tp1-Name mulish fs-48 fw-800 lh-64 d-flex justify-content-center align-items-center">
            {"Project Name"}
          </div>
        </Link>
      );
    } else if (index === 1) {
      return (
        <div className="col-12 col-lg-6 r-30" key={proj.id}>
          <div className="row ms-5">
            <Link
              href={`/proekti/${proj.id}`}
              className="mb-4 r-30 tp-2 text-decoration-none p-0 cover"
              style={{ backgroundImage: `url(${proj.image})` }}
            >
              <div className="custom-bg-color-03 custom-color-01 w-100 tp2-Name mulish fs-32 fw-700 lh-48 d-flex justify-content-center align-items-center">
                {"Project Name"}
              </div>
            </Link>
            <div className="row">
              {currentProjects.slice(2).map((subProj, subIndex) => (
                <Link
                  href={`/proekti/${subProj.id}`}
                  key={subProj.id}
                  className={`col-6 r-30 tp-3 text-decoration-none p-0 cover position-relative ${
                    subIndex === 0 ? "me-3" : ""
                  }`}
                  style={{ backgroundImage: `url(${subProj.image})` }}
                >
                  <div
                    className={`${
                      subIndex === 1
                        ? "custom-bg-color-02 tp4-Name position-absolute"
                        : "custom-bg-color-01 tp3-Name"
                    } custom-color-01 w-100 mulish fs-24 fw-700 lh-40 d-flex justify-content-center align-items-center`}
                  >
                    {"Project Name"}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="row tekovni-row w-100">
      {currentProjects.map((proj, index) => renderProject(proj, index))}
      <Stack spacing={2} className="col-12 paginationGap">
        <Pagination
          count={pageCount}
          page={currentPage}
          onChange={handlePageChange}
          size="small"
        />
      </Stack>
    </div>
  );
}

export default TekovniProekti;
