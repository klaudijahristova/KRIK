import { GetServerSideProps } from "next";
import React from "react";
import ShopCard from "src/components/eshop/ShopCard";
import FoundNews from "src/components/search/FoundNews";
import FoundProjects from "src/components/search/FoundProjects";
import { EShopPageProps, EShopProductProps } from "src/interfaces/EShop";
import {
  MonthNewsPageProps,
  OstanatiNovostiProps,
  TopNovostiPops,
} from "src/interfaces/MonthNewsPage";
import { ProjectContentProps } from "src/interfaces/Projects";
import { SearchPageProps } from "src/interfaces/SearchPage";

function search({
  projectsData,
  monthNewsletterData,
  eShopData,
}: SearchPageProps) {
  const hasProjects =
    (projectsData.tekovni && projectsData.tekovni.length > 0) ||
    (projectsData.zavrseni && projectsData.zavrseni.length > 0);

  const hasNews = Object.values(monthNewsletterData).some(
    (monthData) =>
      (monthData.top_novosti && monthData.top_novosti.length > 0) ||
      (monthData.ostanati_novosti && monthData.ostanati_novosti.length > 0)
  );
  const hasProducts =
    eShopData.all_products && eShopData.all_products.length > 0;
  const noMatchFound = !hasProjects && !hasNews && !hasProducts;

  return (
    <div className="searchPage">
      {hasProjects && (
        <div className="row justify-content-center">
          <FoundProjects
            projects={projectsData.tekovni}
            title="Тековни Проекти"
          />
          <FoundProjects
            projects={projectsData.zavrseni}
            title="Завршени Проекти"
          />
        </div>
      )}
      {hasNews && (
        <div>
          {Object.entries(monthNewsletterData).map(([month, newsData]) => (
            <div key={month} className="row ">
              {newsData.top_novosti && newsData.top_novosti.length > 0 && (
                <>
                  <h3 className="mulish fs-56 fw-800 lh-72 my-5 xl-title">
                    ТОП НОВОСТИ
                  </h3>
                  {newsData.top_novosti.map((newsItem) => (
                    <FoundNews
                      key={newsItem.id}
                      news={[newsItem]}
                      month={month}
                    />
                  ))}
                </>
              )}
              {newsData.ostanati_novosti &&
                newsData.ostanati_novosti.length > 0 && (
                  <>
                    <h3 className="mulish fs-56 fw-800 lh-72 my-5 xl-title">
                      ОСТАНАТИ НОВОСТИ
                    </h3>
                    {newsData.ostanati_novosti.map((newsItem) => (
                      <FoundNews
                        key={newsItem.id}
                        news={[newsItem]}
                        month={month}
                      />
                    ))}
                  </>
                )}
            </div>
          ))}
        </div>
      )}
      {hasProducts && (
        <div className="row justify-content-center">
          {eShopData.all_products && eShopData.all_products.length > 0 && (
            <h3 className="mulish fs-56 fw-800 lh-72 racniIzrabotki-naslov xl-title">
              Рачно изработен накит
            </h3>
          )}
          {eShopData.all_products.map((product: EShopProductProps) => (
            <ShopCard
              key={product.id}
              id={product.id}
              image={product.image}
              title={product.title}
              content={product.content1}
              price={product.price}
            />
          ))}
        </div>
      )}

      {noMatchFound && (
        <div className="row justify-content-center">
          <h2 className="xl-title">No Match Found</h2>
        </div>
      )}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  let projectsData = { tekovni: [], zavrseni: [] };
  let monthNewsletterData: MonthNewsPageProps = {};
  let eShopData: EShopPageProps = { all_products: [] };

  const searchFilter = query.q?.toString().toLowerCase() || "";
  if (searchFilter) {
    try {
      const projectsRes = await fetch(`http://localhost:5002/projects_page`);
      if (projectsRes.ok) {
        const allProjects = await projectsRes.json();

        projectsData.tekovni = allProjects.tekovni.filter(
          (project: ProjectContentProps) =>
            Object.values(project).some(
              (value) =>
                typeof value === "string" &&
                value.toLowerCase().includes(searchFilter)
            )
        );

        projectsData.zavrseni = allProjects.zavrseni.filter(
          (project: ProjectContentProps) =>
            Object.values(project).some(
              (value) =>
                typeof value === "string" &&
                value.toLowerCase().includes(searchFilter)
            )
        );
      }

      const newsRes = await fetch(
        `http://localhost:5002/month_newsletter_page`
      );
      if (newsRes.ok) {
        const allNews = (await newsRes.json()) as MonthNewsPageProps;

        Object.entries(allNews).forEach(([month, newsData]) => {
          const filteredTopNovosti = newsData.top_novosti.filter(
            (item: TopNovostiPops) =>
              Object.values(item).some(
                (value) =>
                  typeof value === "string" &&
                  value.toLowerCase().includes(searchFilter)
              )
          );

          const filteredOstanatiNovosti = newsData.ostanati_novosti.filter(
            (item: OstanatiNovostiProps) =>
              Object.values(item).some(
                (value) =>
                  typeof value === "string" &&
                  value.toLowerCase().includes(searchFilter)
              )
          );

          monthNewsletterData[month] = {
            top_novosti: filteredTopNovosti,
            ostanati_novosti: filteredOstanatiNovosti,
          };
        });
      }
      const eShopRes = await fetch(`http://localhost:5002/eshop_page`);
      if (eShopRes.ok) {
        const allProducts = await eShopRes.json();

        eShopData.all_products = allProducts.all_products.filter(
          (product: EShopProductProps) =>
            Object.values(product).some(
              (value) =>
                (typeof value === "string" &&
                  value.toLowerCase().includes(searchFilter)) ||
                (typeof value === "number" &&
                  value.toString().includes(searchFilter))
            ) ||
            product.galery.some((galleryItem) =>
              galleryItem.img.toLowerCase().includes(searchFilter)
            )
        );
      }
    } catch (error) {
      console.error("Failed to fetch projects:", error);
    }
  }

  return {
    props: {
      projectsData,
      monthNewsletterData,
      eShopData,
    },
  };
};

export default search;
