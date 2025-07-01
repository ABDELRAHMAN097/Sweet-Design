// Fade in from bottom
export const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        duration: 0.8,
        ease: 'easeOut',
        delay: 1,
      },
    },
  };
  
  export const fadeInDown = {
    hidden: { opacity: 0, y: -40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        duration: 0.8,
        ease: 'easeOut',
        delay: 1,
      },
    },
  };
  
  export const fadeInLeft = {
    hidden: { opacity: 0, x: -40 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        duration: 0.8,
        ease: 'easeOut',
        delay: 1.5,
      },
    },
  };
  
  export const fadeInRight = {
    hidden: { opacity: 0, x: 40 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        duration: 0.8,
        ease: 'easeOut',
        delay: 1.5,
      },
    },
  };
  
  export const zoomIn = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        duration: 0.8,
        ease: 'easeOut',
        delay: 0.5,
      },
    },
  };
  
  export const staggerContainer = {
    hidden: {},
    show: {
      transition: {
        type: "spring",
        duration: 0.8,
        ease: 'easeOut',
        delay: 0.3,
      },
    },
  };