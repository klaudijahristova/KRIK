import React from "react";
import {
  PartneriComponentProps,
  PartneriProps,
} from "src/interfaces/HomePageInterfaces";

function Partneri({ partneri }: PartneriComponentProps) {
  return (
    <div className="w-100 partneri">
      <h2 className="partneri-title mulish fs-56 fw-800 lh-72">Партнери</h2>
      <div className="logosWrapper w-100">
        <div className="partneri-logo w-100 d-flex align-items-center">
          {partneri.map((partner: PartneriProps) => (
            <img key={partner.img} src={partner.img} alt="logo" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Partneri;
