import { GetServerSideProps } from "next";
import React from "react";
import VolunteerCard from "src/components/VolunteerDetailPage/VolunteerCard";
import VolunteerProjects from "src/components/VolunteerDetailPage/VolunteerProjects";
import {
  OurVolonteerPageProps,
  OurVolonteerProps,
} from "src/interfaces/OurVolunteer";

function Volunteer({
  volunteerData,
}: {
  volunteerData: OurVolonteerProps | null;
}) {
  if (!volunteerData) {
    return <div className="volunteerPage">Volunteer not found</div>;
  }
  const { name, image, description, projects } = volunteerData;

  return (
    <div className="volunteerPage">
      <VolunteerCard image={image} name={name} description={description} />
      <VolunteerProjects projects={projects} />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const volunteersRes = await fetch(
    "http://localhost:5002/our_volunteers_page"
  );
  const volunteerData: OurVolonteerPageProps = await volunteersRes.json();

  const foundVolunteer = volunteerData.dolgRok
    .concat(volunteerData.kratokRok)
    .find((volunteer) => volunteer.id === params?.id);

  return {
    props: {
      volunteerData: foundVolunteer || null,
    },
  };
};

export default Volunteer;
