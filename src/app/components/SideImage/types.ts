type ImageProps = {
  src: string;
  alt: string;
};

export type SideImageProps = {
  id: string;
  image: ImageProps;
  position: 'right' | 'left';
  onClick: () => void;
};

export type ContainerProps = {
  $position: 'right' | 'left';
};
