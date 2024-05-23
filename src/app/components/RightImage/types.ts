type ImageProps = {
  src: string;
  alt: string;
};

export type RightImageProps = {
  id: string;
  image: ImageProps;
  onClick: () => void;
};
