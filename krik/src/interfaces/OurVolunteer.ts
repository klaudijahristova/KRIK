export interface OurVolonteerPageProps {
  dolgRok: OurVolonteerProps[];
  kratokRok: OurVolonteerProps[];
}
export interface OurVolonteerProps {
  id: string;
  name: string;
  years: number;
  country: string;
  image: string;
  description: string;
  projects: VolunteerProjectsProps[];
}
export interface VolunteerFilterBtnProps {
  dolgRok: OurVolonteerProps[];
  kratokRok: OurVolonteerProps[];
}

export interface VolunteerProjectsProps {
  id: string;
  title: string;
  date: string;
  content: string;
  image: string;
  isDone: boolean;
}

export interface VolunteerCardProps {
  image: string;
  name: string;
  description: string;
}
export interface VolunteerPageBtnProps {
  isDone: boolean;
}
export interface VolunteerProjectsPartProps {
  projects: VolunteerProjectsProps[];
}
