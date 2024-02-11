export interface AboutPageProps {
  info: InfoAboutUsProps;
  zaKrik: ZaKrikRowProps[];
  prasanja: PrasanjeProps[];
}

export interface InfoAboutUsProps {
  title: string;
  content: string;
}

export interface ZaKrikRowProps {
  title: string;
  content: string;
}

export interface ZaKrikProps {
  zaKrik: ZaKrikRowProps[];
}

export interface PrasanjeProps {
  title: string;
  content: string;
  id: string;
}
export interface PrasanjaProps {
  prasanja: PrasanjeProps[];
}
