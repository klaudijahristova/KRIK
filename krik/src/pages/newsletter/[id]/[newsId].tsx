import { GetServerSideProps } from "next";
import React from "react";
import CaroselNews from "src/components/singleNews/CaroselNews";
import FirstRow from "src/components/singleNews/FirstRow";
import SecondRow from "src/components/singleNews/SecondRow";
import {
  MonthNewsPageProps,
  SingleNewsPageProps,
} from "src/interfaces/MonthNewsPage";

function SingleNewsPage({ singleNewsData }: SingleNewsPageProps) {
  return (
    <div className="singleNewsPage">
      <FirstRow singleNewsData={singleNewsData} />
      <SecondRow singleNewsData={singleNewsData} />
      <CaroselNews singleNewsData={singleNewsData} />
    </div>
  );
}

const getMonthFromUrl = (url: string | undefined): string | null => {
  if (!url) return null;

  const match = url.match(/\/newsletter\/([^\/]+)/);
  return match ? match[1] : null;
};

export const getServerSideProps: GetServerSideProps = async ({
  params,
  req,
}) => {
  const monthsNewsRes = await fetch(
    "http://localhost:5002/month_newsletter_page"
  );
  const monthsNewsData: MonthNewsPageProps = await monthsNewsRes.json();

  const month = getMonthFromUrl(req.url);

  const singleNews =
    month && monthsNewsData[month]
      ? monthsNewsData[month].top_novosti
          .concat(monthsNewsData[month].ostanati_novosti)
          .find((news) => news.id === params?.newsId) || null
      : null;

  return {
    props: {
      singleNewsData: singleNews,
    },
  };
};

export default SingleNewsPage;
