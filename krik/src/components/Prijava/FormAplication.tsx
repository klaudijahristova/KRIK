import React from "react";
import InputsAplication from "./InputsAplication";
import { inputConfigurations } from "src/data/data";
import AgeBtn from "./AgeBtn";
import RangeAplication from "./RangeAplication";
import VolunteerInterestBtn from "./VolunteerInterestBtn";
import { ButtonsAplication } from "src/data/data";
import { AgeButtons } from "src/data/data";
import PrijaviSeBtn from "./PrijaviSeBtn";
function FormAplication() {
  return (
    <div className="w-100 h-100 formAplication row custom-bg-color-04">
      <div className="col-12 col-lg-6">
        <div className="row">
          {inputConfigurations.map((config, index) => (
            <InputsAplication
              key={index}
              type={config.type}
              label={config.label}
              placeholder={config.placeholder}
              id={config.id}
            />
          ))}
        </div>
      </div>
      <div className="col-12 col-lg-6">
        <h3 className="mulish fs-24 fw-700 lh-40 vozrast xl-content-30">
          Возраст*
        </h3>
        <div className="row ageBtnWrapper">
          {AgeButtons.map((btn) => (
            <div className="col-6" key={btn.id}>
              <AgeBtn id={btn.id} content={btn.content} />
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-12">
            <h3 className="mulish fs-24 fw-700 lh-40 xl-content-30">
              Искуство со волонтирање*
            </h3>
          </div>
          <RangeAplication />
        </div>
        <div className="row justify-content-between ps-2">
          <h3 className="mulish fs-24 fw-700 lh-40 InterestBtn-title xl-content-30">
            Волонтерски интереси*
          </h3>
          {ButtonsAplication.map((btn) => (
            <VolunteerInterestBtn
              id={btn.id}
              content={btn.content}
              key={btn.id}
            />
          ))}
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center w-100 h-100">
        <PrijaviSeBtn />
      </div>
    </div>
  );
}

export default FormAplication;
