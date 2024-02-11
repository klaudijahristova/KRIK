import React, { useRef, useState, useEffect } from "react";
import { VolunteerProjectsPartProps } from "src/interfaces/OurVolunteer";
import VolunteerPageBtn from "./VolunteerPageBtn";
import ProjectCard from "../HomePage/ProjectCard";
import { ProjectsScrollHandle } from "src/services/functions";

function VolunteerProjects({ projects }: VolunteerProjectsPartProps) {
  const { handleMouseDown, handleMouseMove, handleMouseUp, cardsWrapperRef } =
    ProjectsScrollHandle();

  return (
    <div className="participating">
      <h3 className="mulish fs-48 fw-800 lh-64 mb-0 xl-subtitle">
        Проекти во кои учествува
      </h3>
      <div
        className="d-flex w-100 v-projects"
        ref={cardsWrapperRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        {projects.map((project) => (
          <div key={project.id} className="w-100 v-projectCardGap">
            <VolunteerPageBtn isDone={project.isDone} />
            <ProjectCard
              id={project.id}
              title={project.title}
              date={project.date}
              content={project.content}
              image={project.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default VolunteerProjects;
