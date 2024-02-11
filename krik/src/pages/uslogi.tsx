import { GetStaticProps } from "next";
import React from "react";
import InfoServices from "src/components/Uslogi/InfoServices";
import { ServicesPageProps } from "src/interfaces/ServicesPage";

function uslogi({ servicesPageData }: { servicesPageData: ServicesPageProps }) {
  const { info, images } = servicesPageData;
  return (
    <>
      <InfoServices info={info} images={images} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const servicesPageRes = await fetch("http://localhost:5002/services_page");
  const servicesPageData: ServicesPageProps = await servicesPageRes.json();

  return {
    props: {
      servicesPageData,
    },
  };
};
export default uslogi;
