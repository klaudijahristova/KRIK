export interface EShopProductProps {
  id: string;
  image: string;
  title: string;
  content1: string;
  price: number;
  content2: string;
  galery: ProductImagesProps[];
}
export interface ProductImagesProps {
  img: string;
}
export interface EShopPageProps {
  all_products: EShopProductProps[];
}
export interface ShopCardProps {
  id: string;
  image: string;
  title: string;
  content: string;
  price: number;
}
export interface ProductImagesProps {
  image: string;
  galery: ProductImagesProps[];
}
export interface ProductContentProps {
  title: string;
  content: string;
  price: number;
}
