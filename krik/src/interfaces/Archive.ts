export interface ArchiveDocProps {
  id: string;
  title: string;
}
export interface YearDocProps {
  year: string;
  documents: ArchiveDocProps[];
}
export interface ArchivePageProps {
  godishni_izveshtai: YearDocProps[];
  finansiski_izvestai: YearDocProps[];
  politicki_dokumenti: YearDocProps[];
}
export interface ArhivaFilterBtnsProps extends ArchivePageProps {}

export interface Document {
  id: string;
  title: string;
}
