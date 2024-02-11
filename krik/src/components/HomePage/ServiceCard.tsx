import Link from "next/link";
import React from "react";
import { UslogiProps } from "src/interfaces/HomePageInterfaces";
import { useRouter } from "next/router";

function ServiceCard({ id, title, content }: UslogiProps) {
  const router = useRouter();

  const handleChosenService = () => {
    router.push({
      pathname: "/uslogi",
      query: {
        q: id,
      },
    });
  };

  return (
    <div id={id} className="serviceCard ">
      <div className="d-flex">
        <span className="mulish fs-32 fw-700 lh-48 u-content-title">
          {title}
        </span>
        <div onClick={handleChosenService}>
          <div className="custom-bg-color-01 rounded-circle u-arrow d-flex justify-content-center align-items-center">
            <img src="/images/HomePage/arrow-tr.png" alt="arrow" />
          </div>
        </div>
      </div>
      <p className="u-decription Montserrat fs-20 fw-400 lh-40">{content}</p>
    </div>
  );
}

export default ServiceCard;
