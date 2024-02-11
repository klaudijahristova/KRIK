import React from "react";
import { MoneyButtonsArray } from "src/data/data";
import MoneyBtn from "./MoneyBtn";
import Valute from "./Valute";
import DonateInput from "./DonateInput";
import DonateBtn1 from "./DonateBtn1";
import PayPalBtn from "./PayPalBtn";

function DonateCard() {
  return (
    <div className="DonateCard w-100 h-100 r-40 custom-bg-color-04">
      <h3 className="mulish fs-24 fw-700 lh-40 xl-content-30">
        Lorem ipsum dolor sit amet consectetur.
      </h3>
      <div className="row">
        {MoneyButtonsArray.map((btn) => (
          <MoneyBtn id={btn.id} content={btn.content} />
        ))}
        <Valute />
      </div>
      <p className="Montserrat fs-20 fw-400 lh-40 donateCard-text xl-content-26">
        Lorem ipsum dolor sit amet consectetur. In sed lobortis donec a cras
        feugiat mattis velit venenatis. Adipiscing viverra praesent tristique
        non. Nunc blandit turpis tellus natoque mi odio viverra fermentum.
      </p>
      <DonateInput />
      <div className="row DonateBtnwrapper">
        <div className="col-6">
          <div className="row">
            <DonateBtn1 />
            <PayPalBtn />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DonateCard;
