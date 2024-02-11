import { GetServerSideProps } from "next";
import Hero from "src/components/HomePage/Hero";
import NajnoviVesti from "src/components/HomePage/NajnoviVesti";
import Naskoro from "src/components/HomePage/Naskoro";
import Partneri from "src/components/HomePage/Partneri";
import Success from "src/components/HomePage/Success";
import TutorialWrapper from "src/components/HomePage/TutorialWrapper";
import Uslogi from "src/components/HomePage/Uslogi";
import { HomePageProps } from "src/interfaces/HomePageInterfaces";

export default function Home({
  homePageData,
}: {
  homePageData: HomePageProps;
}) {
  const { hero_content, naskoro, succsess, projects, uslogi, partneri } =
    homePageData;

  return (
    <div className="w-100 h-100 position-relative">
      <Hero
        title={hero_content.title}
        subtitle={hero_content.subtitle}
        content={hero_content.content}
      />
      <Naskoro
        title={naskoro.title}
        content={naskoro.content}
        day={naskoro.day}
        month={naskoro.month}
      />
      <Success
        proekti={succsess.proekti}
        volonteri={succsess.volonteri}
        partneri={succsess.partneri}
      />
      <TutorialWrapper />
      <NajnoviVesti project={projects} />
      <Uslogi uslogi={uslogi} />
      <Partneri partneri={partneri} />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const homePageRes = await fetch("http://localhost:5002/home_page");
  const homePageData: HomePageProps = await homePageRes.json();

  return {
    props: {
      homePageData,
    },
  };
};
