export interface HomePageProps {
  hero_content: HeroProps;
  naskoro: NaskoroProps;
  succsess: SuccsessProps;
  projects: ProjectsProps[];
  uslogi: UslogiProps[];
  partneri: PartneriProps[];
}

export interface HeroProps {
  title: string;
  subtitle: string;
  content: string;
}
export interface NaskoroProps {
  title: string;
  content: string;
  day: number;
  month: string;
}
export interface SuccsessProps {
  proekti: number;
  volonteri: number;
  partneri: number;
}
export interface ProjectsProps {
  id: string;
  title: string;
  date: string;
  content: string;
  image: string;
}
export interface UslogiProps {
  id: string;
  title: string;
  content: string;
}
export interface PartneriProps {
  img: string;
}
export interface EventButtonProps {
  content: string;
  url: string;
  color: string;
}
export interface SuccsessCardProps {
  success: number;
  content: string;
}
export interface NajnoviVestiProps {
  project: ProjectsProps[];
}
export interface UslogiComponentProps {
  uslogi: UslogiProps[];
}
export interface PartneriComponentProps {
  partneri: PartneriProps[];
}
export interface PristapnostProps {
  onMouseOut: () => void;
}
export type HoverColorsType = { [key: string]: string };

export interface AccessibilityState {
  isPristapnostBtnVisible: boolean;
  isPristapnostVisible: boolean;
}
