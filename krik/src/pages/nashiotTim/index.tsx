import { GetServerSideProps } from "next";
import { OurTeamPageProps } from "src/interfaces/OurTeam";
import SwiperSlideComponent from "src/components/NashiotTim/SwiperSlideComponent";
import Odbor from "src/components/NashiotTim/Odbor";

function NashiotTim({
  ourTeamPageData,
}: {
  ourTeamPageData: OurTeamPageProps;
}) {
  const { team, odbor } = ourTeamPageData;

  return (
    <div className="nashiotTim text-center d-flex flex-column  align-items-center">
      <h2 className="mulish fs-56 fw-800 lh-72 nashiotTim-title w-25 xl-title">
        Запознајте го Нашиот Тим
      </h2>
      <SwiperSlideComponent team={team} />

      <h2 className="mulish fs-56 fw-800 lh-72 text-center odbor-naslov mb-0 xl-title">
        Членови на Управниот Одбор
      </h2>
      <Odbor odbor={odbor} />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const ourTeamPageRes = await fetch("http://localhost:5002/our_team_page");
  const ourTeamPageData = await ourTeamPageRes.json();

  return {
    props: {
      ourTeamPageData,
    },
  };
};

export default NashiotTim;
