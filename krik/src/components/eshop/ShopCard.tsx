import React from "react";
import { ShopCardProps } from "src/interfaces/EShop";
import { useHeartToggle } from "src/services/functions";

function ShopCard({ image, title, content, price, id }: ShopCardProps) {
  const {
    heartSrc,
    bgColor,
    handleHeartClick,
    handleMouseEnter,
    handleMouseLeave,
  } = useHeartToggle();

  return (
    <div className="col-4 r-30 shopCardWrapper" id={id}>
      <div className="r-30 custom-bg-color-04 shopCard">
        <img src={image} className="card-img-top r-30" alt={title} />
        <div className="card-body position-relative">
          <h5 className="card-title mulish fs-32 fw-700 lh-48 xl-content-40">
            {title}
          </h5>
          <p className="card-text Montserrat fs-20 fw-400 lh-40 xl-content-26">
            {content}
          </p>
          <p className="mulish fs-32 fw-700 lh-48 xl-content-40">{price} MKD</p>
          <div className="position-absolute d-flex w-100 align-items-center justify-content-evenly">
            <a
              href={`/e-shop/${id}`}
              className="text-decoration-none mulish fs-24 fw-700 lh-32 custom-bg-color-05 custom-color-01 kupiBtn r-30"
            >
              Купи
            </a>
            <img
              src={heartSrc}
              alt="Heart"
              className="heartWhite rounded-circle"
              onClick={handleHeartClick}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{ backgroundColor: bgColor }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopCard;
