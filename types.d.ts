interface BasicType {
  name: string;
  slug: string;
  role: string;
  type: string;
  year: string;
  description: string;
}

type StackType = string[];

interface HomeImagesType {
  home: ImageType;
  phone: ImageType;
}

interface WorkDetailType {
  title: string;
  value: string;
  href?: string;
}

interface LinkType {
  title: string;
  value: string;
  href: string;
}

interface ImageType {
  src: string;
  alt: string;
  width: number;
  height: number;
}
