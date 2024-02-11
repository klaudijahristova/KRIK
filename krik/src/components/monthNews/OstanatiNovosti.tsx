import Link from "next/link";
import { Pagination, Stack } from "@mui/material";
import { OstanatiNovostiComponentProps } from "src/interfaces/MonthNewsPage";
import { useOstanatiNovostiPagination } from "src/services/functions";

const OstanatiNovosti: React.FC<OstanatiNovostiComponentProps> = ({
  ostanati_novosti,
}) => {
  const { asPath, displayedNews, totalPages, handlePageChange } =
    useOstanatiNovostiPagination(ostanati_novosti);

  return (
    <div className="ostanatiNovosti w-100 position-relative">
      <h2 className="mulish fs-48 fw-800 lh-64 ostanatiNovosti-naslov xl-subtitle">
        ОСТАНАТИ НОВОСТИ
      </h2>
      <div className="row">
        {displayedNews.map((news) => (
          <div className="col-4 news-col" key={news.id}>
            <span className="mulish fs-24 fw-700 lh-32 mn-date r-200">
              {news.date}
            </span>
            <h4 className="mulish fs-32 fw-700 lh-48 tn-title2 xl-content-40">
              {news.title}
            </h4>
            <p className="Montserrat fs-20 fw-400 lh-40 tn-content xl-content-26">
              {news.content}
            </p>
            <Link
              href={`/newsletter/${asPath}/${news.id}`}
              className="text-decoration-none custom-bg-color-01 custom-color-01  r-30 mulish fs-24 fw-700 lh-32 monthNewsBtn3"
            >
              CTA
            </Link>
          </div>
        ))}
      </div>
      <Stack spacing={2} className="position-absolute news-pagination">
        <Pagination
          count={totalPages}
          size="small"
          onChange={(event, page) => handlePageChange(page)}
        />
      </Stack>
    </div>
  );
};

export default OstanatiNovosti;
