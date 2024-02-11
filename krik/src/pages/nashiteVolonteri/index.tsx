import { GetServerSideProps } from "next";
import React from "react";
import VolunteerFilterBtn from "src/components/NasiteVolonteri/VolunteerFilterBtn";
import { OurVolonteerPageProps } from "src/interfaces/OurVolunteer";

function nashiteVolonteri({
  ourVolunteerData,
}: {
  ourVolunteerData: OurVolonteerPageProps;
}) {
  const { dolgRok, kratokRok } = ourVolunteerData;
  return <VolunteerFilterBtn dolgRok={dolgRok} kratokRok={kratokRok} />;
}

export const getServerSideProps: GetServerSideProps = async () => {
  const ourVolunteersRes = await fetch(
    "http://localhost:5002/our_volunteers_page"
  );
  const ourVolunteerData: OurVolonteerPageProps = await ourVolunteersRes.json();

  return {
    props: {
      ourVolunteerData,
    },
  };
};

export default nashiteVolonteri;
