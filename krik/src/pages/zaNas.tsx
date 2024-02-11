import { GetStaticProps } from "next";
import React from "react";
import KrikInfo from "src/components/ZaNas/KrikInfo";
import Prasanja from "src/components/ZaNas/Prasanja";
import ZaKrik from "src/components/ZaNas/ZaKrik";
import { AboutPageProps } from "src/interfaces/AboutPage";

function zaNas({ aboutPageData }: { aboutPageData: AboutPageProps }) {
  const { info, zaKrik, prasanja } = aboutPageData;
  return (
    <>
      <KrikInfo title={info.title} content={info.content} />
      <ZaKrik zaKrik={zaKrik} />
      <Prasanja prasanja={prasanja} />
    </>
  );
}
export const getStaticProps: GetStaticProps = async () => {
  const aboutPageRes = await fetch("http://localhost:5002/about_page");
  const aboutPageData: AboutPageProps = await aboutPageRes.json();

  return {
    props: {
      aboutPageData,
    },
  };
};

export default zaNas;
