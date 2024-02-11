import Link from "next/link";
import React from "react";
import { ProjectBtnProps } from "src/interfaces/Projects";

function ProjectBtn({ url, color, content, hover }: ProjectBtnProps) {
  return (
    <Link
      href={url}
      className={`${color} custom-color-01 text-decoration-none mulish fs-24 fw-700 lh-32 text-center projectBtn r-30 ${hover}`}
    >
      {content}
    </Link>
  );
}

export default ProjectBtn;
