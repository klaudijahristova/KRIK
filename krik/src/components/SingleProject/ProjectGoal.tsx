import React from "react";
import { GoalProjectProps } from "src/interfaces/Projects";

function ProjectGoal({ goal }: GoalProjectProps) {
  return (
    <div className="projectGoal row">
      <div className="col-12 col-lg-4 mulish fs-56 fw-800 lh-72 custom-bg-color-01 r-40 custom-color-01 goal-title">
        Цел на проектот
      </div>
      <div className="col-12 col-lg-8 Montserrat fs-20 fw-400 lh-40 goal-text xl-content-26">
        {goal}
      </div>
    </div>
  );
}

export default ProjectGoal;
