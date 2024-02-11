import React from "react";
import ProjectBtn from "./ProjectBtn";

function InterestingIn() {
  return (
    <div className="d-flex justify-content-end align-items-center">
      <div>
        <p className="mulish fs-24 fw-700 lh-40 BtnGap xl-content-30 ">
          Заинтересиран/а си?
        </p>
        <p className="mulish fs-24 fw-700 lh-40 pb-4   mb-0 xl-content-30">
          Сакаш да не поддржиш?
        </p>
      </div>
      <div className="d-flex flex-column">
        <ProjectBtn
          content={"Пријави Се!"}
          color={"custom-bg-color-01 "}
          url={"/prijava"}
          hover={"hover2"}
        />
        <ProjectBtn
          content={"Донирај"}
          color={"custom-bg-color-05"}
          url={"/doniraj"}
          hover={"hover1"}
        />
      </div>
    </div>
  );
}

export default InterestingIn;
