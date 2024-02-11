import React from "react";
import { SuccsessCardProps } from "src/interfaces/HomePageInterfaces";

function SuccessCard({ success, content }: SuccsessCardProps) {
  return (
    <div className="success-content d-flex flex-column justify-content-center align-items-center">
      <div className="fs-80 fw-bolder success-number">{success}+</div>
      <div className="fs-20 lh-40 success-text">{content}</div>
    </div>
  );
}

export default SuccessCard;
