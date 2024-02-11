import React from "react";
import { IsDoneProps } from "src/interfaces/Projects";

function IsDone({ isDone }: IsDoneProps) {
  return (
    <div
      className={`d-flex w-100 isDoneWrapper justify-content-between r-40 align-items-center ${
        isDone === "100%" ? "custom-bg-color-02" : ""
      }`}
    >
      <span
        className=" isDone custom-bg-color-02 r-40"
        style={{ width: isDone }}
      ></span>
      <span className="mulish fs-32 fw-700 lh-48 me-4">{isDone}</span>
    </div>
  );
}

export default IsDone;
