import { GetServerSideProps } from "next";
import React from "react";
import TeamMemberCard from "src/components/NashiotTim/TeamMemberCard";
import { OurTeamPageProps, TeamProps } from "src/interfaces/OurTeam";

function TeamMembers({ teamMemberData }: { teamMemberData: TeamProps | null }) {
  if (!teamMemberData) {
    return <div>Loading...</div>;
  }

  const { image, name, about } = teamMemberData;
  return (
    <div className="teamMemberPage">
      <TeamMemberCard image={image} name={name} about={about} />
    </div>
  );
}
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const teamMemberRes = await fetch("http://localhost:5002/our_team_page");
  const teamMemberData: OurTeamPageProps = await teamMemberRes.json();

  const foundTeamMember = (
    params?.id ? [...teamMemberData.team, ...teamMemberData.odbor] : []
  ).find((member) => member.id === params?.id);

  return {
    props: {
      teamMemberData: foundTeamMember || null,
    },
  };
};
export default TeamMembers;
