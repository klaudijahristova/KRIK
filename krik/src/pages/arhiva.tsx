import { GetServerSideProps } from "next";
import React from "react";
import ArhivaFilterBtns from "src/components/arhiva/ArhivaFilterBtns";
import { ArchivePageProps } from "src/interfaces/Archive";

function arhiva({ arhivePageData }: { arhivePageData: ArchivePageProps }) {
  const { godishni_izveshtai, finansiski_izvestai, politicki_dokumenti } =
    arhivePageData;
  return (
    <div className="arhiva">
      <ArhivaFilterBtns
        godishni_izveshtai={godishni_izveshtai}
        finansiski_izvestai={finansiski_izvestai}
        politicki_dokumenti={politicki_dokumenti}
      />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const arhivePageRes = await fetch("http://localhost:5002/archive_page");
  const arhivePageData: ArchivePageProps = await arhivePageRes.json();

  return {
    props: {
      arhivePageData,
    },
  };
};

export default arhiva;
