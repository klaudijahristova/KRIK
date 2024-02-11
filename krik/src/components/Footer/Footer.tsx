import React from "react";
import FooterBilten from "./FooterBilten";
import Kontakt from "./Kontakt";

function Footer() {
  return (
    <div
      className=" w-100 custom-bg-color-01 custom-color-01 footer"
      id="footer"
    >
      <FooterBilten />
      <Kontakt />
    </div>
  );
}

export default Footer;
