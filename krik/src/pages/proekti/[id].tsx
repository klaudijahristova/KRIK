import { GetServerSideProps } from "next";
import Head from "next/head";
import React from "react";
import AboutProject from "src/components/SingleProject/AboutProject";
import ForWho from "src/components/SingleProject/ForWho";
import InterestingIn from "src/components/SingleProject/InterestingIn";
import IsDone from "src/components/SingleProject/IsDone";
import ProjectCarousel from "src/components/SingleProject/ProjectCarousel";
import ProjectGoal from "src/components/SingleProject/ProjectGoal";
import {
  ProjectContentProps,
  ProjectsPageProps,
} from "src/interfaces/Projects";

function SingleProjectPage({
  singleProjectData,
}: {
  singleProjectData: ProjectContentProps;
}) {
  const {
    id,
    image,
    isDone,
    carosel,
    title,
    about,
    goal,
    forWho,
    contentImage,
  } = singleProjectData;

  return (
    <div className="singleProject">
      <ProjectCarousel carosel={carosel} />
      <AboutProject title={title} about={about} />
      <ProjectGoal goal={goal} />
      <ForWho forWho={forWho} contentImage={contentImage} />
      <IsDone isDone={isDone} />
      <InterestingIn />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const singleProjectRes = await fetch("http://localhost:5002/projects_page");
  const singleProjectData: ProjectsPageProps = await singleProjectRes.json();

  const foundProjects = singleProjectData.tekovni
    .concat(singleProjectData.zavrseni)
    .find((project) => project.id === params?.id);

  return {
    props: {
      singleProjectData: foundProjects || null,
    },
  };
};

export default SingleProjectPage;
