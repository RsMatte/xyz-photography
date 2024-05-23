export const SideImageParams = {
  initial: {
    opacity: 0.2,
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
  exit: {
    opacity: 0.2,
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
  hover: { scale: 1.1 },
};

export const MainImageParams = {
  initial: {
    y: -250,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
  exit: {
    y: 250,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
};

export const BackgroundImageParams = {
  initial: {
    opacity: 0.85,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
  exit: {
    opacity: 0.85,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
};

export const StrokedTitleParams = {
  initial: {
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: 'easeInOut',
    },
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeInOut',
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: 'easeInOut',
    },
  },
};
