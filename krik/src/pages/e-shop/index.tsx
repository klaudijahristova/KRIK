import { GetServerSideProps } from "next";
import React from "react";
import AnimationComponent from "src/components/eshop/AnimationComponent";
import RacniIzrabotki from "src/components/eshop/RacniIzrabotki";
import { EShopPageProps } from "src/interfaces/EShop";

function EshopPage({ shopData }: { shopData: EShopPageProps }) {
  const { all_products } = shopData;

  return (
    <div>
      <h2 className="mulish fs-56 fw-800 lh-72 eshop-title text-center xl-title">
        E-shop KРИК на младите
      </h2>
      <AnimationComponent all_products={all_products} />
      <RacniIzrabotki all_products={all_products} />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const shopRes = await fetch("http://localhost:5002/eshop_page");
  const shopData: EShopPageProps = await shopRes.json();

  return {
    props: {
      shopData,
    },
  };
};

export default EshopPage;
