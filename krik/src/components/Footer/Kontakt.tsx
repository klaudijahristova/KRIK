import React from "react";
import InputF1 from "./InputF1";
import ButtonF1 from "./ButtonF1";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

function Kontakt() {
  const socialIcons = [
    { icon: <FaLinkedinIn size={24} />, name: "LinkedIn" },
    { icon: <FaInstagram size={24} />, name: "Instagram" },
    { icon: <FaFacebookF size={24} />, name: "Facebook" },
    { icon: <FaTwitter size={24} />, name: "Twitter" },
  ];
  return (
    <div className="d-flex kontakt-container row">
      <div className="kontakt col-12 col-lg-4">
        <p className="fs-32 lh-48 fw-bold kontakt-title">Контактирај не!</p>
        <InputF1 type="text" content="Вашето Име" />
        <InputF1 type="email" content="Вашата Емаил Адреса" />
        <ButtonF1 content="СТА" />
      </div>
      <div className="prikluciSe col-12 col-lg-4">
        <p className="fs-32 lh-48 fw-bold mb-0">Приклучи Се</p>
        <p className="fs-16 lh-24 prikluciSe-text mb-0">
          Lorem Ipsum Dolor Sit Amet Consectetur. Non At At Pisus Dolor Accumsan
          Vitae Dignissim. Est Dapibus Turpis Metus Ac Rhoncus Tellus Volutpat.
        </p>
      </div>
      <div className="zaKrik col-12 col-lg-4">
        <p className="mb-0 fs-32 lh-48 fw-bold">За Крик</p>
        <p className="fs-16 lh-24 zaKrik-text">
          Lorem Ipsum Dolor Sit Amet Consectetur. Non At At Risus Dolor Accumsan
          Vitae Dignissim.
        </p>
        <div className="d-flex">
          {socialIcons.map((social, index) => (
            <div
              key={index}
              className="socialMedia rounded-circle d-flex justify-content-center align-items-center"
              title={social.name}
            >
              {social.icon}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Kontakt;
