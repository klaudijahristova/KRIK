import { GetServerSideProps } from "next";
import React from "react";
import TekovniProekti from "src/components/Projects/TekovniProekti";
import ZavrseniProekti from "src/components/Projects/ZavrseniProekti";
import { ProjectsPageProps } from "src/interfaces/Projects";

function Projects({ projectsData }: { projectsData: ProjectsPageProps }) {
  const { tekovni, zavrseni } = projectsData;
  return (
    <div className="w-100 projects">
      <h2 className="mulish fs-56 fw-800 lh-72 text-center mb-0 xl-title">
        Проекти
      </h2>
      <div>
        <h3 className="mulish fs-48 fw-800 lh-64 tekovni-naslov xl-subtitle">
          Тековни
        </h3>
        <TekovniProekti project={tekovni} />
      </div>
      <div>
        <h3 className="mulish fs-48 fw-800 lh-64 zavrsni-naslov xl-subtitle">
          Завршени
        </h3>
        <ZavrseniProekti project={zavrseni} />
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const projectsRes = await fetch("http://localhost:5002/projects_page");
  const projectsData: ProjectsPageProps = await projectsRes.json();

  return {
    props: {
      projectsData,
    },
  };
};

export default Projects;
