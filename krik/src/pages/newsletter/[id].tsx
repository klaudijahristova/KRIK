import { GetServerSideProps } from "next";
import React from "react";
import OstanatiNovosti from "src/components/monthNews/OstanatiNovosti";
import TopNovosti from "src/components/monthNews/TopNovosti";
import {
  MonthNewsPageProps,
  OneMonthProps,
} from "src/interfaces/MonthNewsPage";

function SingleMonthNewsletterPage({
  monthsNewsData,
}: {
  monthsNewsData: OneMonthProps | null;
}) {
  if (!monthsNewsData) {
    return <div className="volunteerPage">Months News not found</div>;
  }

  const { top_novosti, ostanati_novosti } = monthsNewsData;

  return (
    <div className="monthNews">
      <TopNovosti top_novosti={top_novosti} />
      <div className="hr1 custom-bg-color-01"></div>
      <OstanatiNovosti ostanati_novosti={ostanati_novosti} />
      <div className="hr2 custom-bg-color-01"></div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const monthsNewsRes = await fetch(
    "http://localhost:5002/month_newsletter_page"
  );
  const monthsNewsData: MonthNewsPageProps = await monthsNewsRes.json();

  const monthFromParams = params?.id as keyof MonthNewsPageProps;

  const selectedMonthData: OneMonthProps = monthsNewsData[monthFromParams];

  return {
    props: {
      monthsNewsData: selectedMonthData || null,
    },
  };
};

export default SingleMonthNewsletterPage;
