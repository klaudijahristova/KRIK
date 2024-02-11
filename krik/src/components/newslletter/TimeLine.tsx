import React from "react";
import { NewsletterPageProps } from "src/interfaces/NewsletterPage";
import TimeLineCard from "./TimeLineCard";
import { useSortedNewsletterData } from "src/services/functions";

function TimeLine({
  newsletterPageData,
}: {
  newsletterPageData: NewsletterPageProps[];
}) {
  const sortedData = useSortedNewsletterData(newsletterPageData);

  return (
    <div className="position-relative w-100 h-100 TimeLine">
      <div className="position-absolute w-50 verticalLine h-100 "></div>
      <div className="row w-100 timiline-row">
        {sortedData.map((data, index) => (
          <TimeLineCard
            id={data.id}
            key={data.id}
            month={data.month}
            content={data.content}
            image={data.image}
            date={data.date}
            reverseOrder={index % 2 !== 0}
          />
        ))}
      </div>
    </div>
  );
}

export default TimeLine;
