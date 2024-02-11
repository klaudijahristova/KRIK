import React from "react";
import ButtonF1 from "./ButtonF1";
import InputF1 from "./InputF1";

function FooterBilten() {
  return (
    <div className="footerBilet d-flex row w-100">
      <div className="col-12 col-lg-4">
        <p className="m-0 fs-56 bilten-title fw-bolder lh-72">Месечен билтен</p>
      </div>
      <div className="col-12 col-lg-4">
        <p className="bilten-text fs-20 lh-40">
          Lorem ipsum dolor sit amet consectetur. Non at at risus dolor accumsan
          vitae dignissim.
        </p>
      </div>
      <div className="col-12 col-lg-4 p-0">
        <div>
          <InputF1 type="email" content="Вашата Емаил Адреса" />
          <ButtonF1 content="СТА" />
        </div>
      </div>
    </div>
  );
}

export default FooterBilten;
