import Link from "next/link";
import React from "react";
import { OdborProps } from "src/interfaces/OurTeam";

function Odbor({ odbor }: OdborProps) {
  return (
    <div className="w-100 odbor">
      {odbor.map((el) => (
        <Link
          href={`/nashiotTim/${el.id}`}
          className="celenNaOdborot d-flex text-decoration-none justify-content-center custom-color-02"
          key={el.id}
        >
          <img src={el.image} className="r-40 odborGap clen-img" alt="Member" />

          <div className="clen-text odborGap text-start ms-5">
            <h4 className="mulish fs-32 fw-700 lh-700 xl-content-40">
              {el.name}
            </h4>
            <p className="mulish fs-24 fw-700 lh-40 clen-pozicija xl-content-30">
              {el.position}
            </p>
            <p className="Montserrat fs-20 fw-400 lh-40 xl-content-26">
              {el.about}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Odbor;
