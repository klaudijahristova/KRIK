import React from "react";
import { EShopPageProps } from "src/interfaces/EShop";

function AnimationComponent({ all_products }: EShopPageProps) {
  return (
    <div className="animationComponent">
      <div className="shopProductWrapperRight d-flex w-100">
        {all_products.map((product, index) => (
          <div
            className={`shopProducts r-30 ${
              index % 3 === 0 ? " long" : "small"
            }`}
            key={product.id}
          >
            <img
              src={product.image}
              alt="Product Image"
              className={`r-30 ${index % 3 === 0 ? " longImg" : "smallImg"}`}
            />
          </div>
        ))}
      </div>
      <div className="shopProductWrapperLeft d-flex w-100">
        {all_products.map((product, index) => (
          <div
            className={`shopProducts r-30 ${
              index % 3 === 0 ? " long" : "small"
            }`}
            key={product.id}
          >
            <img
              src={product.image}
              alt="Product Image"
              className={`r-30 ${index % 3 === 0 ? " longImg" : "smallImg"}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AnimationComponent;
