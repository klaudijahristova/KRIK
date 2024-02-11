import { EShopPageProps } from "./EShop";
import { MonthNewsPageProps, NewsItem, SingleNewsProps } from "./MonthNewsPage";
import { ProjectContentProps, ProjectsPageProps } from "./Projects";

export interface SearchPageProps {
  projectsData: {
    tekovni: ProjectContentProps[];
    zavrseni: ProjectContentProps[];
  };
  monthNewsletterData: MonthNewsPageProps;
  eShopData: EShopPageProps;
}

export interface FoundProjectsProps {
  projects: ProjectContentProps[];
  title: string;
}

export interface FoundNewsProps {
  news: NewsItem[];
  month: string;
}
