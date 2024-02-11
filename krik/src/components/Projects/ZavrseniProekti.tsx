import React from "react";
import Link from "next/link";
import { Stack, Pagination } from "@mui/material";
import { TekovniZavrsniProjectsProps } from "src/interfaces/Projects";
import { useProjectPagination } from "src/services/useProjectPagination";
function ZavrseniProekti({ project }: TekovniZavrsniProjectsProps) {
  const projectsPerPage = 8;
  const { currentProjects, currentPage, pageCount, handlePageChange } =
    useProjectPagination(project, projectsPerPage);

  if (currentProjects.length === 0) {
    return <div>Loading projects...</div>;
  }

  return (
    <div className="row zavrseni-row">
      <div className="col-12 col-lg-6 mb-5">
        <div className="row me-1">
          <Link
            href={`/proekti/${currentProjects[0].id}`}
            className="r-30 cover text-decoration-none p-0 zp-1 me-3"
            style={{ backgroundImage: `url(${currentProjects[0].image} )` }}
          >
            <div className=" custom-bg-color-03 custom-color-01 w-100 zp1-Name mulish fs-24 fw-700 lh-40 d-flex justify-content-center align-items-center">
              Project Name
            </div>
          </Link>
          <div className="w-48">
            <div className="row">
              <Link
                href={`/proekti/${currentProjects[1].id}`}
                className="col-12  p-0 cover r-30 position-relative zp-2 mb-3 text-decoration-none"
                style={{ backgroundImage: `url(${currentProjects[1].image})` }}
              >
                <div className=" custom-bg-color-02 custom-color-01 w-100  mulish fs-24 fw-700 lh-40 d-flex justify-content-center align-items-center position-absolute zp2-Name">
                  Project Name
                </div>
              </Link>
              <Link
                href={`/proekti/${currentProjects[2].id}`}
                className="col-12 p-0 cover r-30 position-relative zp-3 r-30"
                style={{ backgroundImage: `url(${currentProjects[2].image})` }}
              >
                <div className=" custom-bg-color-01 custom-color-01 w-100  mulish fs-24 fw-700 lh-40 d-flex justify-content-center align-items-center position-absolute zp3-Name">
                  Project Name
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Link
        href={`/proekti/${currentProjects[3].id}`}
        className="w-48 mb-5 p-0 text-decoration-none r-30 cover position-relative zp-4"
        style={{ backgroundImage: `url(${currentProjects[3].image} )` }}
      >
        <div className="custom-bg-color-01 custom-color-01 w-100  mulish fs-48 fw-800 lh-64 d-flex justify-content-center align-items-center position-absolute zp4-Name">
          Project Name
        </div>
      </Link>

      <Link
        href={`/proekti/${currentProjects[4].id}`}
        className="w-48 text-decoration-none r-30 cover p-0 zp-5"
        style={{ backgroundImage: `url(${currentProjects[4].image} )` }}
      >
        <div className=" custom-bg-color-02 custom-color-01 w-100 tp1-Name mulish fs-48 fw-800 lh-64 d-flex justify-content-center align-items-center">
          Project Name
        </div>
      </Link>

      <div className="col-12 col-lg-6">
        <div className="row ps-5">
          <Link
            href={`/proekti/${currentProjects[5].id}`}
            className="mb-4 zp-6 text-decoration-none r-30 cover p-0 position-relative"
            style={{ backgroundImage: `url(${currentProjects[5].image} )` }}
          >
            <div className=" custom-bg-color-03 custom-color-01 w-100 zp6-Name mulish fs-24 fw-400 lh-40 d-flex justify-content-center align-items-center position-absolute">
              Project Name
            </div>
          </Link>
          <div className="col-12">
            <div className="row">
              <Link
                href={`/proekti/${currentProjects[6].id}`}
                className="w-48 text-decoration-none r-30 cover p-0 position-relative zp-7 me-4"
                style={{ backgroundImage: `url(${currentProjects[6].image} )` }}
              >
                <div className=" custom-bg-color-01 custom-color-01 w-100 zp6-Name mulish fs-24 fw-400 lh-40 d-flex justify-content-center align-items-center position-absolute">
                  Project Name
                </div>
              </Link>
              <Link
                href={`/proekti/${currentProjects[7].id}`}
                className="w-48 text-decoration-none r-30 cover p-0  zp-7"
                style={{ backgroundImage: `url(${currentProjects[7].image} )` }}
              >
                <div className=" custom-bg-color-02 custom-color-01 w-100 mulish fs-24 fw-400 lh-40 d-flex justify-content-center align-items-center zp7-Name">
                  Project Name
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="paginationGap">
        <Stack spacing={2}>
          <Pagination
            count={pageCount}
            page={currentPage}
            onChange={handlePageChange}
            size="small"
          />
        </Stack>
      </div>
    </div>
  );
}

export default ZavrseniProekti;
