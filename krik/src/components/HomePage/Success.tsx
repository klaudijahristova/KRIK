import React from "react";
import { SuccsessProps } from "src/interfaces/HomePageInterfaces";
import SuccessCard from "./SuccessCard";

function Success({ proekti, volonteri, partneri }: SuccsessProps) {
  return (
    <div className="success w-100 d-flex justify-content-center align-items-center custom-color-04">
      <SuccessCard success={proekti} content="Проекти" />
      <SuccessCard success={volonteri} content="Волонтери" />
      <SuccessCard success={partneri} content="Партнери" />
    </div>
  );
}

export default Success;
