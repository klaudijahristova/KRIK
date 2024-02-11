export interface OurTeamPageProps {
  team: TeamProps[];
  odbor: ClenoviNaOdborotProps[];
}
export interface TeamProps {
  id: string;
  image: string;
  name: string;
  position: string;
  profil: string;
  about: string;
}
export interface SwiperSliderProps {
  team: TeamProps[];
}
export interface ClenoviNaOdborotProps {
  id: string;
  image: string;
  name: string;
  position: string;
  about: string;
}
export interface LinkedInBrnProps {
  profil: string;
}
export interface OdborProps {
  odbor: ClenoviNaOdborotProps[];
}
export interface TeamMemberProps {
  image: string;
  name: string;
  about: string;
}
