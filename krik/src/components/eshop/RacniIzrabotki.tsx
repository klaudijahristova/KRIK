import React from "react";
import { EShopPageProps } from "src/interfaces/EShop";
import ShopCard from "./ShopCard";
import { useProductDisplay } from "src/services/functions";

function RacniIzrabotki({ all_products }: EShopPageProps) {
  const { displayedProducts, showAllProducts, toggleShowAllProducts } =
    useProductDisplay(all_products);

  return (
    <div className="racniIzrabotki">
      <h3 className="mulish fs-56 fw-800 lh-72 racniIzrabotki-naslov xl-title">
        Рачно изработен накит
      </h3>
      <div className="row">
        {displayedProducts.map((product) => (
          <ShopCard
            key={product.id}
            id={product.id}
            title={product.title}
            content={product.content1}
            image={product.image}
            price={product.price}
          />
        ))}
        {!showAllProducts && (
          <div className="text-center mt-3">
            <button
              className="mulish fs-24 fw-700 lh-32 r-30 vidiPovekeBtn custom-color-01 custom-bg-color-01"
              onClick={toggleShowAllProducts}
            >
              Види Повеќе Продукти
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default RacniIzrabotki;
