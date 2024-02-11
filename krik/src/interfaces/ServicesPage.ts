export interface ServicesPageProps {
  info: ServicesContentProps[];
  images: ServiceGaleryProps[];
}

export interface InfoServicesProps {
  info: ServicesContentProps[];
  images: ServiceGaleryProps[];
}

export interface ServiceGaleryProps {
  id: string;
  src: string[];
  isActive: boolean;
}

export interface ServicesContentProps {
  id: string;
  title: string;
  content: string;
  isActive: boolean;
}
