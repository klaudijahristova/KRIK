import React from "react";
import { ProductImagesProps } from "src/interfaces/EShop";

function ProductImages({
  image,
  gallery,
}: {
  image: string;
  gallery: ProductImagesProps[];
}) {
  return (
    <div className="row">
      <div className="col-8 pb-4">
        <img
          src={image}
          alt="Image of the Product"
          className="singlePrductPageImg r-30 "
        />
      </div>
      <div className="col-4">
        <div className="row">
          {gallery.map((product) => (
            <div className="col-12 pb-4 shopGaleryCol">
              <img
                src={product.img}
                alt="Image of the Product"
                className="singlePrductPageImg r-30"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductImages;
