import SwiperCore, { Swiper } from "swiper";

export interface ProjectsPageProps {
  tekovni: ProjectContentProps[];
  zavrseni: ProjectContentProps[];
}
export interface ProjectContentProps {
  id: string;
  image: string;
  isDone: string;
  carosel: CaroselProjectProps[];
  title: string;
  about: string;
  goal: string;
  forWho: string;
  contentImage: string;
}
export interface TekovniZavrsniProjectsProps {
  project: ProjectContentProps[];
}
export interface CaroselProjectProps {
  img: string;
}
export interface ProjectCarouselComponentProps {
  carosel: CaroselProjectProps[];
}
export interface AboutPrjectProps {
  title: string;
  about: string;
}
export interface GoalProjectProps {
  goal: string;
}
export interface ForWhoProps {
  forWho: string;
  contentImage: string;
}
export interface IsDoneProps {
  isDone: string;
}
export interface ProjectBtnProps {
  url: string;
  color: string;
  content: string;
  hover: string;
}

export interface SwiperControls {
  swiper: Swiper | null;
  setSwiper: (swiper: Swiper) => void;
  handlePrev: () => void;
  handleNext: () => void;
}
