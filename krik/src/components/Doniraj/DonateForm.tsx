import React from "react";
import { InputsDonatePage } from "src/data/data";
import InputsAplication from "../Prijava/InputsAplication";
import InputCardNum from "./InputCardNum";
import InputSmall from "./InputSmall";
import DonateSubmitBtn from "./DonateSubmitBtn";
function DonateForm() {
  return (
    <div className="row DonateInpusWrapper">
      <div className="col-6">
        {InputsDonatePage.map((el) => (
          <InputsAplication
            id={el.id}
            type={el.type}
            label={el.label}
            placeholder={el.placeholder}
          />
        ))}
      </div>
      <div className="col-6 InputsRight">
        <div className="row">
          <InputCardNum />
          <InputSmall />
          <InputsAplication
            id={"sopstvenik"}
            type={"text"}
            label={"Име на сопственик*"}
            placeholder={"Example Namington"}
          />
          <DonateSubmitBtn />
        </div>
      </div>
    </div>
  );
}

export default DonateForm;
