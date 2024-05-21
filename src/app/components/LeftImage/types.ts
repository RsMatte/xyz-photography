type ImageProps = {
  src: string;
  alt: string;
};

export type LeftImageProps = {
  image: ImageProps;
  onClick: () => void;
};
