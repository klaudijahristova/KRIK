import { useEffect, useState } from "react";
import { ProjectContentProps } from "src/interfaces/Projects";

export const useProjectPagination = (
  projects: ProjectContentProps[],
  projectsPerPage = 4
) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentProjects, setCurrentProjects] = useState<ProjectContentProps[]>(
    []
  );

  useEffect(() => {
    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    setCurrentProjects(projects.slice(indexOfFirstProject, indexOfLastProject));
  }, [currentPage, projects, projectsPerPage]);

  const pageCount = Math.ceil(projects.length / projectsPerPage);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    pageNumber: number
  ) => {
    setCurrentPage(pageNumber);
  };

  return { currentProjects, currentPage, pageCount, handlePageChange };
};
