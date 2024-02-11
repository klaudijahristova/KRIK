import { CaroselProjectProps } from "./Projects";

export interface TopNovostiPops {
  id: string;
  images: string;
  date: string;
  title: string;
  content: string;
  singleNews: SingleNewsProps;
}
export interface OstanatiNovostiProps {
  id: string;
  images: string;
  date: string;
  title: string;
  content: string;
  singleNews: SingleNewsProps;
}

export interface SingleNewsProps {
  id: string;
  date: string;
  image1: string;
  title: string;
  content1: string;
  image2: string;
  content2: string;
  carosel: { img: [] };
  singleNews: {
    id: string;
    date: string;
    image1: string;
    title: string;
    content1: string;
    image2: string;
    content2: string;
    carosel: CaroselProjectProps[];
  }[];
}

export interface CaroselNewsProps {
  img: string[];
}
export interface OneMonthProps {
  top_novosti: TopNovostiPops[];
  ostanati_novosti: OstanatiNovostiProps[];
}

export interface MonthNewsPageProps {
  [month: string]: OneMonthProps;
}

export interface TopNovostiComponentProps {
  top_novosti: TopNovostiPops[];
}
export interface OstanatiNovostiComponentProps {
  ostanati_novosti: OstanatiNovostiProps[];
}
export type NewsItem = TopNovostiPops | OstanatiNovostiProps;

export interface SingleNewsPageProps {
  singleNewsData: SingleNewsProps | null;
}
