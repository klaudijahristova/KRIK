import { GetServerSideProps } from "next";
import React from "react";
import ProductContent from "src/components/eshop/ProductContent";
import ProductImages from "src/components/eshop/ProductImages";
import { EShopPageProps, EShopProductProps } from "src/interfaces/EShop";

interface SingleEShopProductPageProps {
  shopProductData: EShopProductProps | null;
}

function SingleEShopProductPage({
  shopProductData,
}: SingleEShopProductPageProps) {
  if (!shopProductData) {
    return <div>Product not found!</div>;
  }

  return (
    <div className="shopSinglePage">
      <ProductImages
        image={shopProductData.image}
        gallery={shopProductData.galery}
      />
      <ProductContent
        title={shopProductData.title}
        price={shopProductData.price}
        content={shopProductData.content2}
      />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const shopProductRes = await fetch("http://localhost:5002/eshop_page");
  const shopProductData: EShopPageProps = await shopProductRes.json();

  const foundProduct = shopProductData.all_products.find(
    (product) => product.id === params?.id
  );

  return {
    props: {
      shopProductData: foundProduct || null,
    },
  };
};

export default SingleEShopProductPage;
