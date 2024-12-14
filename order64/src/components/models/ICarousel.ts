interface IImage {
  src: string;
  alt: string;
}

export interface ICarousel {
  title: string;
  imgs: IImage[];
}
