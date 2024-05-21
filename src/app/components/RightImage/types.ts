type ImageProps = {
  src: string;
  alt: string;
};

export type RightImageProps = {
  image: ImageProps;
  onClick: () => void;
};
